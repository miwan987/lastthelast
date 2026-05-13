export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/48578519667?text=Dzień%20dobry,%20chciałbym%20wysłać%20zdjęcie%20wgniecenia%20do%20wyceny."
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 whitespace-nowrap cursor-pointer"
      aria-label="Wyślij zdjęcie na WhatsApp"
      style={{ boxShadow: '0 4px 24px rgba(37, 211, 102, 0.35)' }}
    >
      <i className="ri-whatsapp-line text-xl"></i>
      Wyślij zdjęcie na WhatsApp
    </a>
  );
}