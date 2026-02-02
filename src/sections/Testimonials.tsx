import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';

const testimonials = [
  {
    id: 1,
    name: 'Mariana Oliveira',
    role: 'Paciente Invisalign',
    image: '/images/testimonials/testimonial-1.jpg',
    text: 'Minha experiência com a Dra. Camila foi incrível! O tratamento com Invisalign superou todas as minhas expectativas. Em 14 meses, meu sorriso foi completamente transformado. A tecnologia do scanner 3D é impressionante!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ricardo Santos',
    role: 'Paciente Aparelho Estético',
    image: '/images/testimonials/testimonial-2.jpg',
    text: 'Sempre tive vergonha do meu sorriso, mas a Dra. Camila me deu confiança desde a primeira consulta. O acompanhamento foi impecável e o resultado final é simplesmente perfeito. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Paula Costa',
    role: 'Paciente Invisalign',
    image: '/images/testimonials/testimonial-3.jpg',
    text: 'A Dra. Camila é uma profissional excepcional. Além da expertise técnica, ela tem uma sensibilidade incrível para entender o que o paciente precisa. Meu tratamento foi rápido, confortável e o resultado é maravilhoso!',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-400/5 rounded-full blur-3xl" />
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
            DEPOIMENTOS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-white leading-[1.15]">
            O que nossos pacientes{' '}
            <span className="text-rose-400">dizem</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote className="absolute -top-4 left-0 w-16 h-16 text-rose-400/20" />

          {/* Testimonial Content */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-rose-400 fill-rose-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <OptimizedImage
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full border-2 border-rose-400"
                  />
                  <div className="text-left">
                    <p className="text-white font-medium">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-dark-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-dark-600 flex items-center justify-center text-white hover:bg-rose-400 hover:border-rose-400 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-rose-400'
                      : 'bg-dark-600 hover:bg-dark-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-dark-600 flex items-center justify-center text-white hover:bg-rose-400 hover:border-rose-400 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
