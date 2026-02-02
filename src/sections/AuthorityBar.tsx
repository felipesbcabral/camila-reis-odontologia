import { motion } from 'framer-motion';
import { Award, Star, Trophy, Medal, Crown } from 'lucide-react';

const credentials = [
  { icon: Trophy, text: '33x Nº 1 Invisalign Brasília' },
  { icon: Star, text: 'Emerald Provider' },
  { icon: Award, text: 'Top 1% Provider Mundial' },
  { icon: Medal, text: 'Ortodontista USP' },
  { icon: Crown, text: 'Mestre em Ortodontia' },
  { icon: Award, text: 'Certificação Internacional' },
];

export function AuthorityBar() {
  return (
    <section className="py-8 bg-rose-400 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-rose-400 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rose-400 to-transparent z-10" />

        {/* Scrolling content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex animate-scroll-logos"
        >
          {/* Duplicate for seamless loop */}
          {[...credentials, ...credentials].map((cred, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 whitespace-nowrap"
            >
              <cred.icon className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">
                {cred.text}
              </span>
              <span className="text-white/50 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
