import { motion } from 'framer-motion';
import { Scan, Sparkles, ScanLine, Check } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';

const technologies = [
  {
    icon: Scan,
    name: 'iTero Lumina',
    featured: true,
    description: 'Scanner intraoral 3D de última geração',
    benefits: [
      'Digitalização em segundos, sem massa',
      'Simulação do resultado em tempo real',
      'Precisão de 20 microns',
      'Experiência confortável',
    ],
    image: '/images/iTero Lumina.jpg',
  },
  {
    icon: Sparkles,
    name: 'Invisalign',
    featured: false,
    description: 'Alinhadores transparentes personalizados',
    benefits: [
      'Tecnologia SmartTrack',
      'Movimentos precisos',
      'Resultados previsíveis',
      'Removível e discreto',
    ],
  },
  {
    icon: ScanLine,
    name: 'Radiografia 3D',
    featured: false,
    description: 'Tomografia computadorizada de alta definição',
    benefits: [
      'Planejamento preciso',
      'Mínima radiação',
      'Visualização completa',
      'Diagnóstico avançado',
    ],
  },
];

export function Technology() {
  return (
    <section id="tecnologia" className="py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-rose-400 font-medium text-xs tracking-[0.2em] uppercase mb-4">
            TECNOLOGIA DE PONTA
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-white leading-[1.15] mb-4">
            Experiência digital{' '}
            <span className="text-rose-400">sem precedentes</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Tecnologias que garantem precisão, conforto e resultados previsíveis
          </p>
        </motion.div>

        {/* Featured Technology - iTero Lumina */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-dark-700 rounded-3xl p-8 lg:p-12 border border-rose-400/20 shadow-rose-glow">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <OptimizedImage
                src={technologies[0].image || '/images/iTero Lumina.jpg'}
                alt={`${technologies[0].name} - Scanner intraoral 3D`}
                className="w-full rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-400/20 flex items-center justify-center">
                  <Scan className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <span className="text-rose-400 text-xs font-medium uppercase tracking-wider">
                    Destaque
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-white">
                    {technologies[0].name}
                  </h3>
                </div>
              </div>

              <p className="text-dark-400 text-lg mb-6">
                {technologies[0].description}
              </p>

              <ul className="space-y-3">
                {technologies[0].benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-rose-400/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-rose-400" />
                    </div>
                    <span className="text-dark-400 text-sm">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Other Technologies */}
        <div className="grid md:grid-cols-2 gap-6">
          {technologies.slice(1).map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-rose-400/30 transition-all duration-300 hover:shadow-rose-glow group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-400/10 flex items-center justify-center group-hover:bg-rose-400/20 transition-colors">
                  <tech.icon className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="font-serif text-xl font-medium text-white">
                  {tech.name}
                </h3>
              </div>

              <p className="text-dark-400 mb-6">{tech.description}</p>

              <ul className="space-y-2">
                {tech.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span className="text-dark-400 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
