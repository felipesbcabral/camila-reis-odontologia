import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { usePhoneMask } from '@/hooks/usePhoneMask';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { OptimizedImage } from '@/components/OptimizedImage';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Instituto Camila Reis\nBrasília Shopping - SCN Quadra 05 Bloco A n 50\nTorre Sul sala 504 - Asa Norte, Brasília - DF\n70715-900',
    href: 'https://maps.google.com/?q=Instituto+Camila+Reis+Brasília+Shopping+SCN+Quadra+05+Bloco+A+50+Torre+Sul+sala+504+Asa+Norte+Brasília+DF+70715-900',
    isExternal: true,
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(61) 3328-8000',
    href: 'tel:+556133288000',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '(61) 98286-2014',
    href: 'https://wa.me/5561982862014',
    isExternal: true,
    isBrand: false,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'institutocamilareis@gmail.com',
    href: 'mailto:institutocamilareis@gmail.com',
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: 'Segunda a Sexta: 8h às 18h\nSábado: 9h às 13h',
    href: '#',
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/dra_camila_reis', label: 'Instagram' },
  { icon: WhatsAppIcon, href: 'https://wa.me/5561982862014', label: 'WhatsApp', isBrand: false },
];

export function Contact() {
  const phoneMask = usePhoneMask();

  /* 
    Função para formatar e enviar mensagem via WhatsApp 
    Isso facilita o trabalho da recepção já entregando os dados prontos.
  */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Coleta os dados do formulário
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    // Formata a mensagem para o WhatsApp
    // Formata a mensagem para o WhatsApp com Unicode escapes para evitar erros de encoding
    // \u2728 = Sparkles (✨)

    const whatsappMessage =
      `*Instituto Odontológico Camila Reis* \u2728\n` +
      `_Gostaria de agendar uma avaliação?_\n\n` +
      `*Nome:* ${name}\n` +
      `*Telefone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Interesse:* ${service || 'Não especificado'}\n` +
      `*Mensagem:* ${message || 'Sem mensagem adicional'}\n\n` +
      `--------------------------------\n` +
      `Mensagem enviada via formulário do site.`;

    // Codifica a mensagem
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Usa api.whatsapp.com que costuma ser mais robusto para formatação que wa.me
    window.open(`https://api.whatsapp.com/send?phone=5561982862014&text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-rose-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-rose-400 font-medium text-xs tracking-[0.2em] uppercase mb-4">
            CONTATO
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-medium text-dark leading-[1.15] mb-3 sm:mb-4">
            Agende sua{' '}
            <span className="text-rose-400">avaliação</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto">
            Entre em contato e dê o primeiro passo para transformar seu sorriso.
            Estamos prontos para cuidar de você.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Items */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${item.isBrand ? 'bg-green-100 group-hover:bg-green-500' : 'bg-rose-100 group-hover:bg-rose-400'}`}>
                    {item.isBrand ? (
                      <item.icon className={`w-5 h-5 transition-colors ${item.label === 'WhatsApp' ? 'text-green-600 group-hover:text-white' : ''}`} />
                    ) : (
                      <item.icon className="w-5 h-5 text-rose-400 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-dark font-medium mb-1">{item.label}</p>
                      {item.isExternal && item.label === 'Endereço' && (
                        <ExternalLink className="w-3 h-3 text-rose-400" />
                      )}
                    </div>
                    <p className="text-dark-500 text-sm whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-dark font-medium mb-4">Siga-nos</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.isBrand ? 'bg-green-100 hover:bg-green-500 text-green-600 hover:text-white' : 'bg-rose-100 hover:bg-rose-400 text-rose-400 hover:text-white'}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 sm:mt-10"
            >
              <a 
                href="https://maps.google.com/?q=Instituto+Camila+Reis+Brasília+Shopping+SCN+Quadra+05+Bloco+A+50+Torre+Sul+sala+504+Asa+Norte+Brasília+DF+70715-900"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-rose-50 border border-rose-100 shadow-card hover:shadow-card-hover transition-all duration-500">
                  {/* Map Preview */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <OptimizedImage
                      src="/images/clinic/recepcao-1.jpg"
                      alt="Localização Instituto Odontológico Camila Reis"
                      className="w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    {/* Overlay with pin */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-rose-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2">
                          <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <span className="bg-white/90 backdrop-blur-sm text-dark text-sm font-medium px-4 py-2 rounded-full shadow-md">
                          Ver no Google Maps
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Address info */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 pr-3">
                        <p className="text-dark font-medium text-sm">Instituto Camila Reis</p>
                        <p className="text-dark-400 text-xs leading-tight">Brasília Shopping - SCN Qd 05 Bl A n 50</p>
                        <p className="text-dark-400 text-xs">Torre Sul sala 504 - Asa Norte</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-400 transition-colors duration-300 flex-shrink-0">
                        <ExternalLink className="w-4 h-4 text-rose-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 sm:mt-8 p-6 bg-white rounded-2xl shadow-card border border-rose-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-dark font-medium">Fale pelo WhatsApp</p>
                  <p className="text-dark-400 text-sm">Resposta em minutos</p>
                </div>
              </div>
              <a
                href="https://wa.me/5561982862014"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-green-500 hover:bg-green-600 text-white text-center rounded-xl font-medium transition-colors"
              >
                Iniciar Conversa
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10 border border-rose-100">
              <h3 className="font-serif text-2xl font-medium text-dark mb-2">
                Envie uma mensagem
              </h3>
              <p className="text-dark-400 text-sm mb-8">
                Preencha o formulário abaixo e retornaremos em breve.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-dark text-sm">
                      Nome completo
                    </Label>
                    <Input
                      name="name"
                      id="name"
                      placeholder="Seu nome"
                      className="border-rose-100 focus:border-rose-400 focus:ring-rose-400/20 rounded-xl py-3"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-dark text-sm">
                      Telefone
                    </Label>
                    <Input
                      name="phone"
                      id="phone"
                      type="tel"
                      placeholder="(61) 99999-9999"
                      value={phoneMask.value}
                      onChange={phoneMask.onChange}
                      maxLength={15}
                      className="border-rose-100 focus:border-rose-400 focus:ring-rose-400/20 rounded-xl py-3"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-dark text-sm">
                    E-mail
                  </Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="border-rose-100 focus:border-rose-400 focus:ring-rose-400/20 rounded-xl py-3"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-dark text-sm">
                    Serviço de interesse
                  </Label>
                  <select
                    name="service"
                    id="service"
                    className="w-full border border-rose-100 focus:border-rose-400 focus:ring-rose-400/20 rounded-xl py-3 px-4 text-dark text-sm bg-white"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="invisalign">Invisalign</option>
                    <option value="aparelho">Aparelho HAAS</option>
                    <option value="infantil">Ortodontia Infantil</option>
                    <option value="implante">Implantes</option>
                    <option value="protese">Próteses</option>
                    <option value="clareamento">Clareamento</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-dark text-sm">
                    Mensagem
                  </Label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Como podemos ajudar você?"
                    rows={4}
                    className="border-rose-100 focus:border-rose-400 focus:ring-rose-400/20 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-rose-400 hover:bg-rose-500 text-white rounded-xl py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-button flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
