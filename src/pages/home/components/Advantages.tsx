import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const advantageKeys = [
  { icon: 'ri-paint-brush-line', titleKey: 'adv1_title', descKey: 'adv1_desc' },
  { icon: 'ri-time-line', titleKey: 'adv2_title', descKey: 'adv2_desc' },
  { icon: 'ri-shield-check-line', titleKey: 'adv3_title', descKey: 'adv3_desc' },
  { icon: 'ri-money-dollar-circle-line', titleKey: 'adv4_title', descKey: 'adv4_desc' },
  { icon: 'ri-calendar-check-line', titleKey: 'adv5_title', descKey: 'adv5_desc' },
];

export default function Advantages() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <section
      id="advantages"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#DC2626] text-xs font-semibold tracking-widest uppercase mb-3 block">
            {t('adv_label')}
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {t('adv_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {advantageKeys.map((adv, i) => (
            <div
              key={adv.titleKey}
              className={`group bg-[#111111] border border-white/6 rounded-2xl p-6 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#DC2626]/10 rounded-xl mb-5 group-hover:bg-[#DC2626]/20 transition-colors duration-200">
                <i className={`${adv.icon} text-[#DC2626] text-xl`}></i>
              </div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {t(adv.titleKey)}
              </h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed">{t(adv.descKey)}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 rounded-2xl overflow-hidden relative transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <img
            src="https://readdy.ai/api/search-image?query=professional%20PDR%20technician%20working%20on%20luxury%20car%20dent%20removal%20tools%20dark%20workshop%20dramatic%20lighting%20close%20up%20hands%20automotive%20repair%20premium%20service%20cinematic%20dark%20background&width=1400&height=400&seq=adv001&orientation=landscape"
            alt="Profesjonalne usuwanie wgnieceń bez lakierowania Bydgoszcz"
            className="w-full h-48 md:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent flex items-center">
            <div className="px-8 md:px-12">
              <p className="text-[#A3A3A3] text-sm uppercase tracking-widest mb-2">
                {t('adv_banner_sub')}
              </p>
              <h3
                className="text-white text-2xl md:text-3xl font-extrabold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {t('adv_banner_title')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}