import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'cookieConsent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Mostra o banner após 2 segundos
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: true,
      date: new Date().toISOString(),
      necessary: true,
      analytics: true,
      marketing: false,
    }));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: false,
      date: new Date().toISOString(),
      necessary: true,
      analytics: false,
      marketing: false,
    }));
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-rose-100 shadow-2xl"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Icon & Text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-medium text-dark mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-rose-400" />
                    Sua privacidade é importante
                  </h3>
                  <p className="text-dark-500 text-sm leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência no site. 
                    Os cookies necessários são essenciais para o funcionamento do site. 
                    Ao continuar navegando, você concorda com nossa{' '}
                    <a 
                      href="#" 
                      className="text-rose-400 hover:text-rose-500 underline"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Política de Privacidade será implementada em breve!');
                      }}
                    >
                      Política de Privacidade
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                <Button
                  onClick={handleAccept}
                  className="w-full sm:w-auto bg-rose-400 hover:bg-rose-500 text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300"
                >
                  Aceitar todos
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="w-full sm:w-auto border-dark-200 text-dark hover:bg-dark hover:text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300"
                >
                  Apenas necessários
                </Button>
              </div>

              {/* Close button (mobile only) */}
              <button
                onClick={handleClose}
                className="lg:hidden absolute top-4 right-4 p-1 text-dark-400 hover:text-dark transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
