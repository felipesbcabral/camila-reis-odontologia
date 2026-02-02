import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de agendar uma avaliação no Instituto Odontológico Camila Reis. Pode me ajudar?'
    );
    window.open(`https://wa.me/5561982862014?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Subtle glow effect */}
      <span className="absolute inset-0 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-500" />
      
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-dark text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Fale com a gente
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-white border-y-[6px] border-y-transparent" />
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </div>
    </motion.button>
  );
}
