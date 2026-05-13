import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const pointKeys = [
  { icon: 'ri-shield-check-line', textKey: 'why_p1' },
  { icon: 'ri-money-dollar-circle-line', textKey: 'why_p2' },
  { icon: 'ri-time-line', textKey: 'why_p3' },
  { icon: 'ri-tools-line', textKey: 'why_p4' },
  { icon: 'ri-award-line', textKey: 'why_p5' },
  { icon: 'ri-leaf-line', textKey: 'why_p6' },
];

export default function WhyPDR() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <section
      id="why-pdr"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-[#050505] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DC2626]/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="rounded-3xl overflow-hidden border border-white/6">
              <img
                src="https://readdy.ai/api/search-image?query=PDR%20technician%20expert%20working%20on%20luxury%20car%20dent%20removal%20professional%20tools%20dark%20workshop%20dramatic%20cinematic%20lighting%20premium%20automotive%20service%20Bydgoszcz%20Poland%20high%20detail&width=700&height=800&seq=why001&orientation=portrait"
                alt="Dlaczego warto wybrać S.M. auto PDR - usuwanie wgniotek bez lakierowania"
                className="w-full h-80 md:h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 md:bottom-8 md:right-8 bg-[#111111] border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#DC2626]/15 rounded-xl">
                  <i className="ri-map-pin-line text-[#DC2626] text-xl"></i>
                </div>
                <div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {t('why_badge_city')}
                  </div>
                  <div className="text-[#A3A3A3] text-xs">{t('why_badge_sub')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="text-[#DC2626] text-xs font-semibold tracking-widest uppercase mb-4 block">
              {t('why_label')}
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {t('why_title_1')}
              <br />
              {t('why_title_2') && <>{t('why_title_2')} </>}
              <span className="text-[#DC2626]">{t('why_title_3')}</span>
            </h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed mb-8">
              {t('why_desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {pointKeys.map((point, i) => (
                <div
                  key={point.textKey}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#DC2626]/10 rounded-lg flex-shrink-0">
                    <i className={`${point.icon} text-[#DC2626] text-sm`}></i>
                  </div>
                  <span className="text-[#A3A3A3] text-sm">{t(point.textKey)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+48578519667"
                className="flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-fill"></i>
                {t('why_cta_call')}
              </a>
              <a
                href="https://wa.me/48578519667?text=Dzień%20dobry,%20chciałbym%20wysłać%20zdjęcie%20wgniecenia%20do%20wyceny."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-green-400"></i>
                {t('why_cta_wa')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}