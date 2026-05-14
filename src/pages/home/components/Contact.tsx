import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DC2626]/4 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#DC2626] text-xs font-semibold tracking-widest uppercase mb-3 block">
            {t('contact_label')}
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {t('contact_title')}
          </h2>
          <p className="text-[#A3A3A3] mt-4 text-base max-w-lg mx-auto">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className={`flex flex-col gap-5 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <a
              href="tel:+48578519667"
              className="group flex items-center gap-5 bg-[#111111] border border-white/6 hover:border-[#DC2626]/30 rounded-2xl p-6 transition-all duration-200 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#DC2626]/10 group-hover:bg-[#DC2626]/20 rounded-xl transition-colors flex-shrink-0">
                <i className="ri-phone-fill text-[#DC2626] text-2xl"></i>
              </div>
              <div>
                <div className="text-[#A3A3A3] text-xs uppercase tracking-widest mb-1">{t('contact_phone_label')}</div>
                <div className="text-white font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>
                  +48 578 519 667
                </div>
                <div className="text-[#A3A3A3] text-sm mt-0.5">{t('contact_phone_hours')}</div>
              </div>
            </a>

            <a
              href="https://wa.me/48578519667?text=Dzień%20dobry,%20chciałbym%20wysłać%20zdjęcie%20wgniecenia%20do%20wyceny."
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex items-center gap-5 bg-[#111111] border border-white/6 hover:border-green-500/30 rounded-2xl p-6 transition-all duration-200 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-green-500/10 group-hover:bg-green-500/20 rounded-xl transition-colors flex-shrink-0">
                <i className="ri-whatsapp-line text-green-400 text-2xl"></i>
              </div>
              <div>
                <div className="text-[#A3A3A3] text-xs uppercase tracking-widest mb-1">{t('contact_wa_label')}</div>
                <div className="text-white font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>
                  +48 578 519 667
                </div>
                <div className="text-[#A3A3A3] text-sm mt-0.5">{t('contact_wa_sub')}</div>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/THpoGLkvtonCkosx8"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex items-center gap-5 bg-[#111111] border border-white/6 hover:border-[#DC2626]/30 rounded-2xl p-6 transition-all duration-200 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#DC2626]/10 group-hover:bg-[#DC2626]/20 rounded-xl transition-colors flex-shrink-0">
                <i className="ri-map-pin-line text-[#DC2626] text-2xl"></i>
              </div>
              <div>
                <div className="text-[#A3A3A3] text-xs uppercase tracking-widest mb-1">{t('contact_loc_label')}</div>
                <div className="text-white font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {t('contact_loc_street')}
                </div>
                <div className="text-[#A3A3A3] text-sm mt-0.5">{t('contact_loc_sub')}</div>
              </div>
            </a>
          </div>

          <a
            href="https://maps.app.goo.gl/THpoGLkvtonCkosx8"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`lg:col-span-2 rounded-2xl overflow-hidden border border-white/6 hover:border-[#DC2626]/30 transition-all duration-700 relative group cursor-pointer block ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '0.2s', minHeight: '380px' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Filtrowa+27,+Bydgoszcz,+Poland&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', minHeight: '380px', pointerEvents: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S.M. auto PDR - Filtrowa 27, Bydgoszcz"
            ></iframe>
            <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-[#DC2626] text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2">
                <i className="ri-map-pin-line text-base"></i>
                {t('contact_map_btn')}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}