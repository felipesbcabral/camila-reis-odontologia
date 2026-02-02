import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/OptimizedImage';
import { MapPin, Sparkles } from 'lucide-react';

const clinicImages = [
  {
    src: '/images/clinic/recepcao-1.jpg',
    alt: 'Recepção do Instituto Odontológico Camila Reis',
    title: 'Recepção',
    description: 'Ambiente acolhedor e sofisticado',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/clinic/corredor.jpg',
    alt: 'Corredor da clínica',
    title: 'Corredor',
    description: 'Elegância em cada detalhe',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/clinic/consultorio-2.jpg',
    alt: 'Consultório equipado',
    title: 'Consultório',
    description: 'Tecnologia de ponta',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/clinic/consultorio-1.jpg',
    alt: 'Sala de atendimento',
    title: 'Sala de Atendimento',
    description: 'Conforto e privacidade',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/clinic/sala-vista.jpg',
    alt: 'Vista da sala de atendimento',
    title: 'Vista Panorâmica',
    description: 'Naturalidade e bem-estar',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/clinic/consultorio-3.jpg',
    alt: 'Consultório',
    title: 'Atendimento',
    description: 'Design minimalista',
    span: 'col-span-1 row-span-1',
  },
];

export function ClinicStructure() {
  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Nossa Estrutura</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-dark leading-[1.15] mb-4">
            Um espaço pensado para{' '}
            <span className="text-rose-400">você</span>
          </h2>
          
          <p className="text-dark-500 max-w-2xl mx-auto text-base lg:text-lg">
            Cada ambiente foi cuidadosamente projetado para oferecer conforto, 
            privacidade e uma experiência única em odontologia.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-2 mt-6 text-dark-400 text-sm"
          >
            <MapPin className="w-4 h-4 text-rose-400" />
            <span>Brasília Shopping - SCN Qd 05 Bl A n 50, Torre Sul sala 504</span>
          </motion.div>
        </motion.div>

        {/* Gallery Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-4 h-[800px]">
          {clinicImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="font-serif text-xl text-white font-medium mb-1">
                  {image.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {image.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Gallery Grid - Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {clinicImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="font-serif text-lg text-white font-medium mb-1">
                  {image.title}
                </h3>
                <p className="text-white/80 text-xs">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery - Mobile Carousel */}
        <div className="md:hidden space-y-4">
          {clinicImages.slice(0, 4).map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-serif text-lg text-white font-medium mb-1">
                  {image.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { value: '300m²', label: 'Área construída' },
            { value: '5+', label: 'Salas de atendimento' },
            { value: 'Alto Padrão', label: 'Acabamento premium' },
            { value: 'Acessível', label: 'Localização privilegiada' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-rose-50 rounded-2xl"
            >
              <p className="font-serif text-2xl lg:text-3xl text-rose-400 font-semibold mb-1">
                {stat.value}
              </p>
              <p className="text-dark-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
