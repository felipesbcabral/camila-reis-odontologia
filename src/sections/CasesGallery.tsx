import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';

const categories = ['Todos', 'Invisalign', 'Aparelho HAAS', 'Infantil'];

const cases = [
  {
    id: 1,
    category: 'Invisalign',
    title: 'Mordida cruzada corrigida',
    description: 'Tratamento de 18 meses com Invisalign',
    beforeImage: '/images/cases/case-1-before.jpg',
    afterImage: '/images/cases/case-1-after.jpg',
  },
  {
    id: 2,
    category: 'Invisalign',
    title: 'Espaçamento eliminado',
    description: 'Resultado em 12 meses com alinhadores',
    beforeImage: '/images/cases/case-2-before.jpg',
    afterImage: '/images/cases/case-2-after.jpg',
  },
  {
    id: 3,
    category: 'Infantil',
    title: 'Prevenção ortodôntica',
    description: 'Tratamento precoce para criança',
    beforeImage: '/images/cases/case-3-before.jpg',
    afterImage: '/images/cases/case-3-after.jpg',
  },
  {
    id: 4,
    category: 'Aparelho HAAS',
    title: 'Crowding inferior corrigido',
    description: 'Resultado em 24 meses',
    beforeImage: '/images/cases/case-4-before.jpg',
    afterImage: '/images/cases/case-4-after.jpg',
  },
];

export function CasesGallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

  const filteredCases =
    activeCategory === 'Todos'
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <section id="casos" className="py-24 lg:py-32 bg-rose-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-rose-400 font-medium text-xs tracking-[0.2em] uppercase mb-4">
            RESULTADOS REAIS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-dark leading-[1.15] mb-4">
            Transformações que{' '}
            <span className="text-rose-400">falam por si</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto">
            Cada sorriso é único. Veja alguns dos resultados que conquistamos juntos
            com nossos pacientes.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-rose-400 text-white shadow-button'
                  : 'bg-white text-dark-500 hover:bg-rose-50 hover:text-rose-400'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCase(caseItem)}
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
                  {/* Images Container */}
                  <div className="relative aspect-square overflow-hidden">
                    {/* Before Image */}
                    <OptimizedImage
                      src={caseItem.beforeImage}
                      alt={`${caseItem.title} - Antes do tratamento`}
                      className="absolute inset-0 w-full h-full"
                    />

                    {/* After Image with Clip */}
                    <div
                      className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:[clip-path:inset(0_0_0_50%)]"
                      style={{ clipPath: 'inset(0 50% 0 0)' }}
                    >
                      <OptimizedImage
                        src={caseItem.afterImage}
                        alt={`${caseItem.title} - Depois do tratamento`}
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>

                    {/* Slider Line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-rose-400 transform -translate-x-1/2 z-10">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      Antes
                    </div>
                    <div className="absolute top-4 right-4 bg-rose-400 text-white text-xs px-3 py-1 rounded-full">
                      Depois
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-dark" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-rose-400 text-xs font-medium uppercase tracking-wider">
                      {caseItem.category}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-dark mt-1 mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-dark-400 text-sm">{caseItem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-500 font-medium transition-colors group">
            Ver todos os casos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors"
              >
                Fechar
              </button>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <OptimizedImage
                    src={selectedCase.beforeImage}
                    alt="Antes do tratamento"
                    className="w-full rounded-2xl"
                  />
                  <p className="text-center text-white/60 mt-2">Antes</p>
                </div>
                <div>
                  <OptimizedImage
                    src={selectedCase.afterImage}
                    alt="Depois do tratamento"
                    className="w-full rounded-2xl"
                  />
                  <p className="text-center text-rose-400 mt-2">Depois</p>
                </div>
              </div>

              <div className="text-center mt-6">
                <h3 className="font-serif text-2xl text-white mb-2">
                  {selectedCase.title}
                </h3>
                <p className="text-white/60">{selectedCase.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
