import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://static.readdy.ai/image/aaff12815fc27193fbf72a54fb0ca162/b342cdf3b3770ab8dccc7ca1651aa721.jpeg"
                alt="PDR Bydgoszcz logo"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                <span style={{ letterSpacing: '0.01em' }}>S&#46;M&#46;</span> auto <span className="text-[#DC2626]">PDR</span>
              </span>
            </div>
            <p className="text-[#A3A3A3] text-sm leading-relaxed">
              {t('footer_desc')}
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://wa.me/48578519667" target="_blank" rel="noopener noreferrer nofollow"
                className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer" aria-label="WhatsApp">
                <i className="ri-whatsapp-line text-white text-base"></i>
              </a>
              <a href="https://www.instagram.com/pdrstudio.bydgoszcz?igsh=aHNwY2N5NXQwb3h5" target="_blank" rel="noopener noreferrer nofollow"
                className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-[#DC2626]/20 rounded-full transition-colors cursor-pointer" aria-label="Instagram">
                <i className="ri-instagram-line text-white text-base"></i>
              </a>
              <a href="https://www.facebook.com/share/1CmMVktt2j/" target="_blank" rel="noopener noreferrer nofollow"
                className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-[#DC2626]/20 rounded-full transition-colors cursor-pointer" aria-label="Facebook">
                <i className="ri-facebook-line text-white text-base"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              <a id="footer-uslugi" href="#services">{t('footer_services')}</a>
            </h4>
            <ul className="flex flex-col gap-3">
              {(['footer_svc1', 'footer_svc2', 'footer_svc3', 'footer_svc4', 'footer_svc5'] as const).map((key) => (
                <li key={key}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                    className="text-[#A3A3A3] hover:text-white text-sm transition-colors cursor-pointer" rel="nofollow">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              <a id="footer-kontakt" href="#contact">{t('footer_contact')}</a>
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+48578519667" className="text-[#A3A3A3] hover:text-white text-sm transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-phone-line text-[#DC2626]"></i>
                  +48 578 519 667
                </a>
              </li>
              <li>
                <a href="https://wa.me/48578519667" target="_blank" rel="noopener noreferrer nofollow"
                  className="text-[#A3A3A3] hover:text-white text-sm transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-whatsapp-line text-green-400"></i>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/THpoGLkvtonCkosx8" target="_blank" rel="noopener noreferrer nofollow"
                  className="flex items-center gap-2 text-[#A3A3A3] hover:text-white text-sm transition-colors cursor-pointer">
                  <i className="ri-map-pin-line text-[#DC2626]"></i>
                  Bydgoszcz, Polska
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#A3A3A3] text-sm">
                <i className="ri-time-line text-[#DC2626]"></i>
                {t('footer_hours')}
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              <a id="footer-info" href="#why-pdr">{t('footer_info')}</a>
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { key: 'footer_info1', href: '#why-pdr' },
                { key: 'footer_info2', href: '#gallery' },
                { key: 'footer_info3', href: '#testimonials' },
                { key: 'footer_info4', href: '#contact' },
              ].map((item) => (
                <li key={item.key}>
                  <a href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-[#A3A3A3] hover:text-white text-sm transition-colors cursor-pointer">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A3A3A3] text-xs">{t('footer_copy')}</p>
          <div className="flex items-center gap-4">
            <span className="text-[#A3A3A3] text-xs">
              <strong>{t('footer_tagline')}</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}