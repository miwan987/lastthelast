import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20sleek%20dark%20metallic%20car%20driving%20on%20empty%20highway%20at%20dusk%20golden%20hour%20dramatic%20sky%20orange%20red%20clouds%20cinematic%20wide%20shot%20premium%20automotive%20photography%20ultra%20realistic%20moody%20atmosphere%20motion%20blur%20speed&width=1920&height=1080&seq=hero_sm_pdr_003&orientation=landscape"
          alt="Usuwanie wgnieceń bez lakierowania PDR Bydgoszcz"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-[#050505]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Syne, sans-serif', transitionDelay: '0.2s' }}
          >
            {t('hero_title_1')}
            <br />
            <span className="text-[#DC2626]">{t('hero_title_2')}</span>
            <br />
            {t('hero_title_3')}
          </h1>

          <p
            className={`text-[#A3A3A3] text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.35s' }}
          >
            {t('hero_subtitle')}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <a
              href="tel:+48578519667"
              className="flex items-center justify-center gap-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base"
            >
              <i className="ri-phone-fill text-lg"></i>
              {t('hero_cta_call')}
            </a>
            <a
              href="https://wa.me/48578519667?text=Dzień%20dobry,%20chciałbym%20wysłać%20zdjęcie%20wgniecenia%20do%20wyceny."
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center justify-center gap-3 bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base"
            >
              <i className="ri-whatsapp-line text-lg text-green-400"></i>
              {t('hero_cta_whatsapp')}
            </a>
          </div>

          <div
            className={`flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.65s' }}
          >
            {[
              { value: '500+', labelKey: 'hero_stat_cars' },
              { value: '2h', labelKey: 'hero_stat_time' },
              { value: '100%', labelKey: 'hero_stat_paint' },
            ].map((stat) => (
              <div key={stat.labelKey}>
                <div
                  className="text-3xl font-extrabold text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-[#A3A3A3] text-sm mt-1">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}