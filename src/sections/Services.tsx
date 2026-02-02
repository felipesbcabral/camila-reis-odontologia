import { motion } from 'framer-motion';
import { ArrowRight, Smile, Sparkles, Baby, CircleDot, Crown, Sun } from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'Invisalign',
    description: 'Alinhadores invisíveis para resultados extraordinários. A tecnologia mais avançada em ortodontia estética.',
    features: ['Transparente', 'Removível', 'Confortável'],
    color: 'rose',
  },
  {
    icon: Sparkles,
    title: 'Endodontia',
    description: 'Correção discreta com bráquetes cerâmicos que se fundem naturalmente aos seus dentes.',
    features: ['Discreto', 'Eficiente', 'Rápido'],
    color: 'blue',
  },
  {
    icon: Baby,
    title: 'Ortodontia Infantil',
    description: 'Diagnóstico precoce e tratamento completo. O cuidado ideal para o sorriso do seu filho.',
    features: ['Preventivo', 'Educativo', 'Lúdico'],
    color: 'pink',
  },
  {
    icon: CircleDot,
    title: 'Implantes e Cirurgias',
    description: 'Reposição de dentes com tecnologia avançada e materiais de última geração.',
    features: ['Duradouro', 'Natural', 'Funcional'],
    color: 'green',
  },
  {
    icon: Crown,
    title: 'Próteses',
    description: 'Reabilitação estética e funcional com coroas, pontes e lentes de contato dental.',
    features: ['Personalizado', 'Estético', 'Resistente'],
    color: 'purple',
  },
  {
    icon: Sun,
    title: 'Clareamento',
    description: 'Sorriso mais branco e radiante com técnicas seguras e resultados duradouros.',
    features: ['Rápido', 'Seguro', 'Eficaz'],
    color: 'yellow',
  },
];

const colorClasses: Record<string, { bg: string; icon: string }> = {
  rose: { bg: 'bg-rose-100', icon: 'text-rose-400' },
  blue: { bg: 'bg-blue-100', icon: 'text-blue-500' },
  pink: { bg: 'bg-pink-100', icon: 'text-pink-500' },
  green: { bg: 'bg-green-100', icon: 'text-green-500' },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-500' },
  yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600' },
};

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-rose-400 font-medium text-xs tracking-[0.2em] uppercase mb-4">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-dark leading-[1.15] mb-4">
            Soluções completas para{' '}
            <span className="text-rose-400">seu sorriso</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto">
            Oferecemos tratamentos completos com as mais avançadas tecnologias
            para cuidar da sua saúde bucal e estética.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-rose-50 rounded-3xl p-8 hover:bg-white hover:shadow-card-hover transition-all duration-500 border border-transparent hover:border-rose-100"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${colorClasses[service.color].bg
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`w-7 h-7 ${colorClasses[service.color].icon}`}
                />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-medium text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-dark-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-white group-hover:bg-rose-50 rounded-full text-xs text-dark-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <button className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-500 text-sm font-medium transition-colors group/link">
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
