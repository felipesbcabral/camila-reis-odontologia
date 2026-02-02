import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, BookOpen } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Formação USP',
    description: 'Universidade de São Paulo, uma das melhores do mundo',
  },
  {
    icon: Award,
    title: 'Mestrado em Ortodontia',
    description: 'Especialização avançada com foco em estética',
  },
  {
    icon: Globe,
    title: '33x Top Provider',
    description: 'Reconhecimento Invisalign por 33 vezes consecutivas',
  },
  {
    icon: BookOpen,
    title: 'Certificações Internacionais',
    description: 'Formação contínua nos EUA e Europa',
  },
];

const stats = [
  { value: '30.000+', label: 'Pacientes Atendidos' },
  { value: '15+', label: 'Anos de Experiência' },
  { value: '33x', label: 'Nº 1 Invisalign' },
  { value: '99%', label: 'Taxa de Satisfação' },
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/camila-portrait.jpg"
                alt="Instituto Odontológico Camila Reis"
                className="w-full rounded-3xl shadow-card object-cover aspect-[3/4]"
              />

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-8 -right-4 lg:bottom-12 lg:-right-8 bg-white rounded-2xl shadow-rose-glow p-6 border border-rose-100"
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="font-serif text-2xl font-semibold text-rose-400">
                        {stat.value}
                      </p>
                      <p className="text-dark-400 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-rose-400 font-medium text-xs tracking-[0.2em] uppercase mb-4"
            >
              SOBRE A DOUTORA
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-dark leading-[1.15] mb-6"
            >
              Referência em{' '}
              <span className="text-rose-400">Ortodontia Estética</span>
            </motion.h2>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 mb-10"
            >
              <p className="text-dark-500 leading-relaxed">
                Dra. Camila Reis é ortodontista formada pela USP, com mestrado em
                Ortodontia e especialização em Invisalign. Por <strong className="text-dark">33 vezes consecutivas</strong>,
                foi reconhecida como a <strong className="text-dark">Nº 1 em tratamentos Invisalign em Brasília</strong>.
              </p>
              <p className="text-dark-500 leading-relaxed">
                Sua busca constante por excelência a levou a conquistar certificações
                internacionais e a se tornar uma das poucas ortodontistas no Brasil
                com o título de <strong className="text-dark">Emerald Provider</strong>, reservado aos melhores
                profissionais do mundo.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-rose-50 hover:bg-rose-100 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-dark font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-dark-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Full Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-4 gap-4 mt-10 pt-10 border-t border-rose-100"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-serif text-xl lg:text-2xl font-semibold text-rose-400">
                    {stat.value}
                  </p>
                  <p className="text-dark-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
