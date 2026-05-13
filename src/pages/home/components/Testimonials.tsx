import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const testimonials = [
  { name: 'Marek Kowalski', city: 'Bydgoszcz', rating: 5, text: 'Niesamowita robota! Po gradzie miałem kilkadziesiąt wgnieceń na masce i dachu. Pan naprawił wszystko w jeden dzień, lakier jak nowy. Polecam każdemu!' },
  { name: 'Anna Wiśniewska', city: 'Bydgoszcz', rating: 5, text: 'Wgniecenie na drzwiach od sąsiada na parkingu. Myślałam, że trzeba lakierować, ale PDR zrobił cuda. Nie widać śladu, a cena była bardzo rozsądna.' },
  { name: 'Tomasz Nowak', city: 'Bydgoszcz', rating: 5, text: 'Ekspresowa obsługa i świetny efekt. Błotnik po stłuczce wyglądał tragicznie, teraz nie ma śladu. Zdecydowanie najlepszy PDR w Bydgoszczy!' },
  { name: 'Katarzyna Zielińska', city: 'Bydgoszcz', rating: 5, text: 'Polecił mi znajomy i nie żałuję. Grad zrobił spustoszenie na moim Audi, a po naprawie wygląda jak nowe. Szybko, profesjonalnie i bez lakierowania.' },
  { name: 'Piotr Jabłoński', city: 'Bydgoszcz', rating: 5, text: 'Miałem wgniecenie na dachu po gałęzi. Naprawa trwała 2 godziny, efekt perfekcyjny. Oryginalny lakier zachowany w 100%. Bardzo polecam!' },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
      ))}
    </div>
  );
}

function TestimonialCard({ t: testimonial, delay, isVisible }: { t: typeof testimonials[0]; delay: number; isVisible: boolean }) {
  return (
    <div
      className={`bg-[#111111] border border-white/6 rounded-2xl p-6 card-hover transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-[#DC2626]/20 border border-[#DC2626]/30 flex items-center justify-center flex-shrink-0">
          <span className="text-[#DC2626] font-bold text-base" style={{ fontFamily: 'Syne, sans-serif' }}>
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
            {testimonial.name}
          </div>
          <div className="text-[#A3A3A3] text-xs">{testimonial.city}</div>
        </div>
        <div className="ml-auto">
          <i className="ri-double-quotes-l text-[#DC2626] text-2xl opacity-60"></i>
        </div>
      </div>
      <StarRating count={testimonial.rating} />
      <p className="text-[#A3A3A3] text-sm leading-relaxed mt-3">{testimonial.text}</p>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08 });
  const { t } = useTranslation();

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#DC2626] text-xs font-semibold tracking-widest uppercase mb-3 block">
            {t('test_label')}
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {t('test_title_1')}
            <br />
            <span className="text-[#DC2626]">{t('test_title_2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((item, i) => (
            <TestimonialCard key={item.name} t={item} delay={i * 0.1} isVisible={isVisible} />
          ))}
          {testimonials.slice(3).map((item, i) => (
            <TestimonialCard key={item.name} t={item} delay={(i + 3) * 0.1} isVisible={isVisible} />
          ))}

          <div
            className={`bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.55s' }}
          >
            <div className="text-5xl font-extrabold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              5.0
            </div>
            <StarRating count={5} />
            <p className="text-[#A3A3A3] text-sm mt-3">{t('test_avg')}</p>
            <p className="text-[#DC2626] text-xs font-semibold mt-1">S.M. auto PDR</p>
          </div>
        </div>
      </div>
    </section>
  );
}