import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'pl', label: 'PL', flag: '🇵🇱' },
  { code: 'uk', label: 'UA', flag: '🇺🇦' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = LANGS.find((l) => l.code === i18n.language) || LANGS[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const close = () => setLangOpen(false);
    if (langOpen) document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [langOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const navLinks = [
    { labelKey: 'nav_services', href: '#services' },
    { labelKey: 'nav_gallery', href: '#gallery' },
    { labelKey: 'nav_testimonials', href: '#testimonials' },
    { labelKey: 'nav_contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      {/* Main navbar row */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="https://static.readdy.ai/image/aaff12815fc27193fbf72a54fb0ca162/b342cdf3b3770ab8dccc7ca1651aa721.jpeg"
            alt="S.M. auto PDR logo"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-white font-extrabold text-lg md:text-3xl tracking-wider uppercase whitespace-nowrap"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '0.08em' }}
            >
              <span>S&#46;M&#46;</span> <span className="text-[#DC2626]">auto PDR</span>
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[#A3A3A3] text-[10px] md:text-xs tracking-widest uppercase">{t('nav_hours')}</span>
              <div className="md:hidden flex items-center gap-1.5">
                {LANGS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={(e) => { e.preventDefault(); handleLangChange(lang.code); }}
                    className={`flex items-center gap-0.5 px-1.5 py-0 rounded text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                      lang.code === i18n.language
                        ? 'text-[#DC2626]'
                        : 'text-[#A3A3A3] hover:text-white'
                    }`}
                  >
                    <span className="text-[11px]">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-[#A3A3A3] hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>

        {/* Desktop: Lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold px-3 py-2 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
              <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#111111] border border-white/10 rounded-xl overflow-hidden min-w-[100px] z-[200]">
                {LANGS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors cursor-pointer whitespace-nowrap ${
                      lang.code === i18n.language
                        ? 'bg-[#DC2626]/20 text-white font-semibold'
                        : 'text-[#A3A3A3] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href="tel:+48578519667"
            className="flex items-center gap-2 bg-[#DC2626] hover:bg-[#b91c1c] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-line text-base"></i>
            {t('nav_call')}
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="w-10 h-10 flex items-center justify-center text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}`}></i>
          </button>
        </div>
      </div>



      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0a0a0a] border-t border-white/5`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-[#A3A3A3] hover:text-white text-base font-medium py-3 border-b border-white/5 transition-colors cursor-pointer"
            >
              {t(link.labelKey)}
            </a>
          ))}
          <a
            href="tel:+48578519667"
            className="mt-3 flex items-center justify-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-5 py-3 rounded-full whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-line"></i>
            {t('nav_call')}
          </a>

          {/* Language switcher duplicated at bottom of mobile menu */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  lang.code === i18n.language
                    ? 'bg-[#DC2626]/20 text-white border border-[#DC2626]/40'
                    : 'text-[#A3A3A3] border border-white/10 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}