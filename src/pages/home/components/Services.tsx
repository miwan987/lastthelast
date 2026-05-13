import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const serviceKeys = [
  {
    titleKey: 'svc1_title',
    descKey: 'svc1_desc',
    tagKey: 'svc1_tag',
    img: 'https://raw.githubusercontent.com/miwan987/fotorep/main/grad.jpg',
  },
  {
    titleKey: 'svc2_title',
    descKey: 'svc2_desc',
    tagKey: 'svc2_tag',
    img: 'https://raw.githubusercontent.com/miwan987/fotorep/main/parking.jpg',
  },
  {
    titleKey: 'svc3_title',
    descKey: 'svc3_desc',
    tagKey: 'svc3_tag',
    img: 'https://raw.githubusercontent.com/miwan987/fotorep/main/doors.jpg',
  },
  {
    titleKey: 'svc4_title',
    descKey: 'svc4_desc',
    tagKey: 'svc4_tag',
    img: 'https://raw.githubusercontent.com/miwan987/fotorep/main/maska.jpg',
  },
  {
    titleKey: 'svc5_title',
    descKey: 'svc5_desc',
    tagKey: 'svc5_tag',
    img: 'https://raw.githubusercontent.com/miwan987/fotorep/main/karoseria.jpg',
  },
];

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08 });
  const { t } = useTranslation();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#DC2626] text-xs font-semibold tracking-widest uppercase mb-3 block">
            {t('services_label')}
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {t('services_title')}
          </h2>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible snap-x snap-mandatory md:snap-none">
          {serviceKeys.map((svc, i) => (
            <div
              key={svc.titleKey}
              className={`group flex-shrink-0 w-64 md:w-auto bg-[#111111] border border-white/6 rounded-2xl overflow-hidden card-hover snap-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="h-48 md:h-52 relative overflow-hidden">
                <img
                  src={svc.img}
                  alt={`${t(svc.titleKey)} - usuwanie wgnieceń bez lakierowania Bydgoszcz`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#DC2626]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t(svc.tagKey)}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="text-white font-bold text-base mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {t(svc.titleKey)}
                </h3>
                <p className="text-[#A3A3A3] text-sm leading-relaxed">{t(svc.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}