import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const galleryData = [
  {
    before: 'https://raw.githubusercontent.com/miwan987/fotorep/main/112.jpg',
    after: 'https://raw.githubusercontent.com/miwan987/fotorep/main/11.jpg',
    labelKey: 'gallery_item1',
    size: 'large',
  },
  {
    before: 'https://raw.githubusercontent.com/miwan987/fotorep/main/21.jpg',
    after: 'https://raw.githubusercontent.com/miwan987/fotorep/main/22.jpg',
    labelKey: 'gallery_item2',
    size: 'small',
  },
  {
    before: 'https://raw.githubusercontent.com/miwan987/foto20/main/31.jpg',
    after: 'https://raw.githubusercontent.com/miwan987/foto20/main/32.jpg',
    labelKey: 'gallery_item3',
    size: 'small',
  },
];

type GalleryData = typeof galleryData[0];

function GalleryCard({ item, delay }: { item: GalleryData; delay: number }) {
  const [showAfter, setShowAfter] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative rounded-2xl overflow-hidden border border-white/6 transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } ${item.size === 'large' ? 'row-span-2' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <img
        src={showAfter ? item.after : item.before}
        alt={`${t(item.labelKey)} - usuwanie wgniotek bez lakierowania`}
        className="w-full h-full object-cover object-top transition-all duration-500"
        style={{ minHeight: item.size === 'large' ? '480px' : '220px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => setShowAfter(false)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
            !showAfter
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/20 hover:bg-white/20'
          }`}
        >
          {t('gallery_btn_before')}
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
            showAfter
              ? 'bg-[#DC2626] text-white'
              : 'bg-black/50 text-white border border-white/20 hover:bg-white/20'
          }`}
        >
          {t('gallery_btn_after')}
        </button>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
          {t(item.labelKey)}
        </span>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[#A3A3A3] text-xs">
            {showAfter ? t('gallery_after_label') : t('gallery_before_label')}
          </span>
          {showAfter && (
            <span className="text-[#DC2626] text-xs font-semibold ml-1">{t('gallery_fixed')}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#DC2626] text-xs font-semibold tracking-widest uppercase mb-3 block">
            {t('gallery_label')}
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {t('gallery_title_1')}{' '}
            <span className="text-[#DC2626]">{t('gallery_title_before')}</span>
            {' '}{t('gallery_title_and')}{' '}
            <span className="text-[#DC2626]">{t('gallery_title_after')}</span>
          </h2>
          <p className="text-[#A3A3A3] mt-4 text-base max-w-xl mx-auto">
            {t('gallery_hint')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ gridTemplateRows: 'auto' }}>
          <div className="md:row-span-2">
            <GalleryCard item={galleryData[0]} delay={0.1} />
          </div>
          <div className="flex flex-col gap-5">
            <GalleryCard item={galleryData[1]} delay={0.2} />
            <GalleryCard item={galleryData[2]} delay={0.3} />
          </div>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <a
            href="https://wa.me/48578519667?text=Dzień%20dobry,%20chciałbym%20wysłać%20zdjęcie%20wgniecenia%20do%20wyceny."
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg"></i>
            {t('gallery_cta')}
          </a>
        </div>
      </div>
    </section>
  );
}