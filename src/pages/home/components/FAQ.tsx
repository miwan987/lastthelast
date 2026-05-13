import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const faqData = [
  {
    q: 'Czym jest metoda PDR?',
    a: 'Metoda PDR (Paintless Dent Repair) to usuwanie wgnieceń bez szpachli i lakierowania. Specjalne narzędzia pozwalają przywrócić blachę do pierwotnego kształtu od wewnątrz. Oryginalny lakier fabryczny pozostaje w 100% nienaruszony.',
  },
  {
    q: 'Jak długo trwa naprawa PDR w Bydgoszczy?',
    a: 'Większość napraw PDR wykonujemy nawet tego samego dnia. Drobne wgniecenie parkingowe to 1–2 godziny. Naprawa po gradzie z wieloma wgnieceniami może zająć cały dzień roboczy.',
  },
  {
    q: 'Ile kosztuje usuwanie wgnieceń bez lakierowania?',
    a: 'Cena zależy od wielkości, głębokości i liczby wgnieceń. Wyślij zdjęcie na WhatsApp +48 578 519 667 — otrzymasz bezpłatną wycenę w ciągu kilku minut.',
  },
  {
    q: 'Czy PDR niszczy lakier?',
    a: 'Nie — to właśnie główna zaleta metody PDR. Oryginalny lakier fabryczny pozostaje w 100% nienaruszony. Samochód po naprawie PDR ma wyższą wartość przy sprzedaży niż po tradycyjnym lakierowaniu.',
  },
  {
    q: 'Jakie wgniecenia można naprawić metodą PDR?',
    a: 'Metodą PDR naprawiamy wgniecenia po gradzie, wgniecenia parkingowe, uderzenia drzwiami, wgniecenia na dachu, masce i błotnikach. Warunek: lakier nie może być pęknięty ani zarysowany do blachy.',
  },
  {
    q: 'Gdzie znajduje się warsztat PDR w Bydgoszczy?',
    a: 'S.M. auto PDR mieści się przy ul. Filtrowej 27 w Bydgoszczy. Pracujemy poniedziałek–sobota w godzinach 9:00–18:00. Zadzwoń lub napisz na WhatsApp: +48 578 519 667.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08 });
  const { t } = useTranslation();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#DC2626] text-xs font-semibold tracking-widest uppercase mb-3 block">
            {t('faq_label', 'Często zadawane pytania')}
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {t('faq_title', 'Masz pytania?')}
            <br />
            <span className="text-[#DC2626]">{t('faq_title2', 'Mamy odpowiedzi')}</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`bg-[#111111] border rounded-2xl overflow-hidden transition-all duration-700 ${
                openIndex === i ? 'border-[#DC2626]/30' : 'border-white/6'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
              >
                <h4
                  className={`font-semibold text-base transition-colors duration-200 ${
                    openIndex === i ? 'text-white' : 'text-[#D4D4D4] group-hover:text-white'
                  }`}
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  <a id={`faq-${i}`} href={`#faq-${i}`} onClick={(e) => e.preventDefault()}>
                    {item.q}
                  </a>
                </h4>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-[#DC2626] rotate-45'
                      : 'bg-white/5 group-hover:bg-white/10'
                  }`}
                >
                  <i className="ri-add-line text-white text-base"></i>
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-[#A3A3A3] text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <p className="text-[#A3A3A3] text-sm mb-4">
            {t('faq_cta_text', 'Nie znalazłeś odpowiedzi? Napisz do nas!')}
          </p>
          <a
            href="https://wa.me/48578519667?text=Dzień%20dobry,%20mam%20pytanie%20dotyczące%20naprawy%20PDR."
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-green-400 text-base"></i>
            {t('faq_cta_btn', 'Zapytaj na WhatsApp')}
          </a>
        </div>
      </div>
    </section>
  );
}