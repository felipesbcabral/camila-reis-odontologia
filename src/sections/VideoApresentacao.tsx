
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

export function VideoApresentacao() {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Tenta iniciar o vídeo assim que montar
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            });
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <section className="py-12 md:py-20 bg-rose-50/50">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif text-rose-700 mb-4"
                    >
                        Conheça a Dra. Camila Reis
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-rose-700/80 font-medium"
                    >
                        Uma experiência única em odontologia estética
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-[320px] md:max-w-[400px] mx-auto group"
                >
                    {/* Container do Vídeo com Estética Premium */}
                    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-rose-glow-strong border border-rose-100 bg-white aspect-[9/16]">
                        {/*
                          NOTA: O vídeo deve estar em public/images/camila-apresentacao.mp4
                        */}
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            src="/images/camila-apresentacao.mp4"
                            poster="/images/camila-portrait.jpg"
                            playsInline
                            loop
                            muted={isMuted}
                            autoPlay
                            onClick={handlePlayPause}
                        />

                        {/* Overlay Gradient para legibilidade dos controles se necessário */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                        {/* Controle de Mute - Elegante e Discreto */}
                        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
                            <button
                                onClick={toggleMute}
                                className="flex items-center gap-3 bg-white/90 hover:bg-white backdrop-blur-sm text-rose-700 px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group/btn"
                            >
                                {isMuted ? (
                                    <>
                                        <VolumeX className="w-5 h-5 text-rose-500" />
                                        <span className="font-medium text-sm tracking-wide">Ativar Som</span>
                                    </>
                                ) : (
                                    <>
                                        <Volume2 className="w-5 h-5 text-rose-500" />
                                        <span className="font-medium text-sm tracking-wide">Silenciar</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Botão de Play Central (aparece apenas se pausado ou autoplay falhar) */}
                        <AnimatePresence>
                            {!isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] z-10"
                                >
                                    <button
                                        onClick={handlePlayPause}
                                        className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-rose-glow hover:scale-110 transition-transform duration-300"
                                    >
                                        <Play className="w-8 h-8 text-rose-600 ml-1" fill="currentColor" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Elementos Decorativos de Fundo */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-300/20 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
