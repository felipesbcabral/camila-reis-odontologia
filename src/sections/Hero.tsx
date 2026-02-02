import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Award, TrendingUp, Users, Calendar } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const stats = [
  {
    icon: Award,
    value: '33x',
    label: 'Nº 1 Invisalign',
    sublabel: 'Brasília'
  },
  {
    icon: Users,
    value: '30K+',
    label: 'Sorrisos',
    sublabel: 'Transformados'
  },
  {
    icon: TrendingUp,
    value: '15+',
    label: 'Anos de',
    sublabel: 'Experiência'
  },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-rose-50 to-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-12rem)]">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-500 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                33x Consecutivas Nº 1 Invisalign Brasília
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-medium text-dark leading-[1.1] mb-4 sm:mb-6"
            >
              Transforme seu sorriso com{' '}
              <span className="text-rose-400">quem é referência</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-dark-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              Instituto Odontológico Camila Reis
              Tecnologia de ponta para resultados extraordinários.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <Button
                onClick={() => scrollToSection('#contato')}
                className="bg-rose-400 hover:bg-rose-500 text-white rounded-full px-6 sm:px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-button w-full sm:w-auto"
              >
                Agendar Avaliação
              </Button>
              <Button
                onClick={() => scrollToSection('#casos')}
                variant="outline"
                className="border-dark-200 text-dark hover:bg-dark hover:text-white rounded-full px-6 sm:px-8 py-3 text-sm font-medium transition-all duration-300 w-full sm:w-auto"
              >
                Ver Casos Reais
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-rose-400" />
                    <span className="font-serif text-lg sm:text-2xl lg:text-3xl font-semibold text-dark">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-dark-500 text-[10px] sm:text-xs">{stat.label}</p>
                  <p className="text-dark-400 text-[10px] sm:text-xs">{stat.sublabel}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <OptimizedImage
                src="/images/camila-portrait.jpg"
                alt="Instituto Odontológico Camila Reis - Dra. Camila Reis"
                className="w-full max-w-lg mx-auto lg:max-w-none rounded-3xl shadow-card"
                aspectRatio="aspect-[3/4]"
              />

              {/* Floating Badge - Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:bottom-8 lg:-left-8 bg-white rounded-xl sm:rounded-2xl shadow-card p-3 sm:p-4 flex items-center gap-2 sm:gap-3 animate-pulse-rose"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-rose-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <p className="text-dark-400 text-[10px] sm:text-xs">Próxima disponível</p>
                  <p className="text-dark font-semibold text-xs sm:text-sm">Hoje às 14h</p>
                </div>
              </motion.div>

              {/* Diamond Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:top-8 lg:-right-8 bg-white rounded-xl sm:rounded-2xl shadow-rose-glow p-3 sm:p-4 border border-rose-100"
              >
                <div className="text-center">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 mx-auto mb-1" />
                  <p className="text-rose-400 font-serif text-base sm:text-lg font-semibold">Emerald</p>
                  <p className="text-dark-400 text-[10px] sm:text-xs">Provider</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
