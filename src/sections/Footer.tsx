import { motion } from 'framer-motion';
import { Instagram, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const quickLinks = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Tecnologia', href: '#tecnologia' },
  { name: 'Casos', href: '#casos' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Contato', href: '#contato' },
];

const services = [
  'Invisalign',
  'Aparelho HAAS',
  'Ortodontia Infantil',
  'Implantes',
  'Próteses',
  'Clareamento',
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-800 pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-dark-700">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <a href="#" className="inline-block mb-6">
              <span className="font-serif text-2xl">
                <span className="text-white">Camila</span>
                <span className="text-rose-400">Reis</span>
              </span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              Referência em Ortodontia Estética em Brasília.
              Transformando sorrisos com tecnologia e excelência.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/dra_camila_reis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-dark-400 hover:bg-rose-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5561982862014"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-dark-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-medium mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-dark-400 text-sm hover:text-rose-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-medium mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-dark-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-medium mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-dark-400 text-sm">
                  Brasília Shopping, Torre Sul, Sala 504<br />
                  Asa Sul, Brasília - DF
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="https://wa.me/5561982862014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 text-sm hover:text-rose-400 transition-colors"
                >
                  (61) 98286-2014
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="mailto:institutocamilareis@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  institutocamilareis@gmail.com
                </a>
              </li>
            </ul>

            {/* CRO */}
            <div className="mt-6 pt-6 border-t border-dark-700">
              <p className="text-dark-400 text-xs">
                CRO/DF: 8822
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-dark-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Instituto Odontológico Camila Reis. Todos os direitos reservados.
          </p>
          <p className="text-dark-400 text-xs">
            Desenvolvido com excelência
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
