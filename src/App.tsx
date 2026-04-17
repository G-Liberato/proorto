/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Heart, 
  ShieldCheck, 
  MapPin,
  X
} from 'lucide-react';

const DATA = {
  name: "Pro Orto",
  role: "Especialistas em Implantes",
  location: "Belo Horizonte e Justinópolis",
  whatsapp: "https://api.whatsapp.com/send/?phone=5531983731919&text&type=phone_number&app_absent=0&utm_source=ig",
  instagram: "https://www.instagram.com/proortoodontologia/",
  images: {
    hero: "https://i.imgur.com/4POBW8G.png",
    expert: "https://i.imgur.com/dwxV4IU.jpeg",
    results: [
      "https://i.imgur.com/X46vykd.jpeg",
      "https://i.imgur.com/DNWsZtX.jpeg",
      "https://i.imgur.com/qwKKv1d.jpeg",
      "https://i.imgur.com/PEKBQSa.jpeg"
    ]
  }
};

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 ${className}`}>
    <div className="max-w-md mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ onClick, children, className = "", primary = true }: { onClick?: () => void, children: ReactNode, className?: string, primary?: boolean }) => {
  const base = "w-full py-4 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg uppercase tracking-wider text-xs";
  const styles = primary 
    ? "bg-gold text-black hover:bg-gold/90 shadow-gold/10" 
    : "bg-transparent text-white border border-gold/30 hover:bg-white/5 shadow-none";
  
  return (
    <a 
      href={DATA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-gold/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 overflow-hidden border-b border-white/10">
        <div className="max-w-md mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-3 py-1 rounded-md bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-4 border border-gold/20">
              Primeira Consulta Gratuita
            </span>
            <h1 className="text-3xl md:text-5xl font-sans font-bold leading-tight mb-4 tracking-tight">
              Eu sou <span className="text-gold">Pro Orto</span>, seu especialista em implantes em {DATA.location}.
            </h1>
            <p className="text-sm text-text-dim leading-relaxed mb-8">
              Recupere sua autoestima com quem é referência em Justinópolis e Belo Horizonte. Atendimento humanizado e tecnologia de ponta.
            </p>
            
            <Button>
              <MessageCircle size={18} fill="currentColor" />
              Agendar consulta gratuita
            </Button>
            <p className="text-center text-[10px] text-text-dim mt-4 font-medium uppercase tracking-tighter">
              Resposta rápida via WhatsApp • Sem compromisso
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full aspect-[4/5] mt-4 flex items-end justify-center px-4"
        >
          <img 
            src={DATA.images.hero} 
            alt="Pro Orto Hero" 
            className="w-full h-full object-cover object-top rounded-2xl border-4 border-white/5"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
        </motion.div>
      </section>

      {/* 2. QUEM SOU EU */}
      <Section className="bg-card-bg border-b border-white/10">
        <div className="flex flex-col gap-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold mx-auto shadow-2xl">
            <img 
              src={DATA.images.expert} 
              alt="Expert Pro Orto" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gold uppercase tracking-tighter">Por que confiar em mim?</h2>
            <div className="space-y-4 text-sm text-text-dim leading-relaxed text-left">
              <p>
                Minha missão é devolver o prazer de sorrir. A Pro Orto não é apenas uma clínica, é o resultado de anos de dedicação exclusiva aos implantes.
              </p>
              <p>
                Através da Pro Orto, transformamos a vida de centenas de pacientes com avaliação honesta e acompanhamento VIP.
              </p>
            </div>
            
            <ul className="mt-8 space-y-3 text-left">
              {[
                "Especialista em casos complexos",
                "Avaliação honesta e direta",
                "Acompanhamento pós-cirúrgico VIP",
                "Equipamentos de última geração"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[11px] font-medium text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section id="resultados" className="bg-dark-bg">
        <div className="mb-10">
          <p className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] mb-2">03. Prova Social</p>
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Resultados Reais</h2>
          <p className="text-text-dim text-xs">Toque nas imagens para ampliar e ver detalhes.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {DATA.images.results.map((url, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer bg-card-bg border border-white/5"
              onClick={() => setSelectedImage(url)}
            >
              <img 
                src={url} 
                alt={`Resultado ${i + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
        <p className="text-[8px] text-text-dim/50 mt-6 uppercase tracking-widest italic">
          Resultados podem variar de pessoa para pessoa. Fotos autorizadas.
        </p>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white p-2">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. POR QUE CONFIAR */}
      <Section className="bg-card-bg">
        <p className="text-center text-[10px] text-gold font-bold uppercase tracking-[0.2em] mb-4">Diferenciais</p>
        <h2 className="text-2xl font-bold mb-10 text-center tracking-tight">Por que confiar em mim?</h2>
        <div className="grid gap-4">
          {[
            { 
              title: "Avaliação Honesta", 
              desc: "Diagnóstico claro e direto, sem tratamentos desnecessários." 
            },
            { 
              title: "Foco no Resultado", 
              desc: "Cada sorriso é planejado para ser funcional e estético." 
            },
            { 
              title: "Atendimento Humano", 
              desc: "Você não é apenas um número. Entendemos suas expectativas." 
            },
            { 
              title: "Localização de Elite", 
              desc: "Unidades modernas em Belo Horizonte e Justinópolis." 
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-bg p-5 rounded-lg border-l-2 border-gold shadow-sm"
            >
              <h3 className="font-bold mb-1 text-sm text-gold uppercase tracking-tight">{card.title}</h3>
              <p className="text-text-dim text-[11px] leading-relaxed italic opacity-80">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section className="bg-gold text-black text-center">
        <h2 className="text-xl font-bold mb-4 uppercase tracking-tighter">Sua avaliação não tem custo</h2>
        <p className="text-black/70 text-sm mb-8 font-medium">
          Tire suas dúvidas e receba um plano de tratamento personalizado sem compromisso.
        </p>
        <Button className="bg-black text-gold hover:bg-black/90">
          <MessageCircle size={18} fill="currentColor" />
          Falar com especialista agora
        </Button>
      </Section>

      {/* 6. BLOCO – Como funciona a primeira consulta */}
      <Section className="bg-dark-bg border-y border-white/5">
        <p className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] mb-4 text-center">04. Jornada de Atendimento</p>
        <h2 className="text-2xl font-bold mb-12 text-center tracking-tight">Como funciona?</h2>
        <div className="space-y-4">
          {[
            { step: "PASSO 01", title: "CONTATO", desc: "Você clica no botão e fala comigo pelo WhatsApp." },
            { step: "PASSO 02", title: "AGENDAMENTO", desc: "Marcamos sua avaliação gratuita presencial em BH ou Justinópolis." },
            { step: "PASSO 03", title: "AVALIAÇÃO", desc: "Criamos seu plano de tratamento totalmente personalizado." }
          ].map((step, i) => (
            <div key={i} className="bg-card-bg p-6 rounded-lg border border-white/5 flex flex-col gap-1">
              <div className="text-[10px] font-bold text-gold tracking-widest">{step.step}</div>
              <h3 className="text-sm font-bold uppercase">{step.title}</h3>
              <p className="text-text-dim text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. BLOCO – Mais provas (Expert + Bastidores) */}
      <Section className="bg-card-bg">
        <h2 className="text-2xl font-bold mb-8 text-center tracking-tight">Autoridade & Bastidores</h2>
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-4">
          <img 
            src={DATA.images.expert} 
            alt="Bastidores Pro Orto" 
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="text-center text-[10px] font-bold text-text-dim uppercase tracking-widest italic tracking-tighter">"Atendimento personalizado e humanizado sempre."</p>
      </Section>

      {/* 8. CTA FINAL (Momento de decisão) */}
      <section className="py-24 px-6 bg-dark-bg relative overflow-hidden border-t border-white/10">
        <div className="max-w-md mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 leading-tight tracking-tighter uppercase">
              Vamos começar sua<br/>transformação hoje?
            </h2>
            <p className="text-text-dim mb-10 text-sm italic">
              Recupere o prazer de sorrir. Estou pronto para te ajudar com segurança e técnica de elite.
            </p>
            <Button className="py-6 text-sm animate-bounce-subtle bg-gold text-black">
              <MessageCircle size={22} fill="currentColor" />
              SIM, QUERO MINHA CONSULTA
            </Button>
            <div className="mt-12 flex justify-center gap-8 text-text-dim/40">
               <ShieldCheck size={24} />
               <Heart size={24} />
               <Star size={24} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-card-bg text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <div className="text-xl font-bold tracking-tighter uppercase">Pro Orto</div>
              <div className="text-gold text-[9px] font-bold uppercase tracking-widest">{DATA.role}</div>
            </div>
            
            <div className="flex gap-3">
              <a href={DATA.instagram} className="p-2 bg-white/5 rounded-lg text-white hover:text-gold"><Instagram size={18} /></a>
              <a href={DATA.whatsapp} className="p-2 bg-white/5 rounded-lg text-white hover:text-gold"><MessageCircle size={18} /></a>
            </div>
          </div>

          <div className="text-[10px] text-text-dim/60 font-medium uppercase tracking-widest flex flex-col gap-2">
            <p className="flex items-center gap-1"><MapPin size={10} /> {DATA.location}</p>
            <p>© {new Date().getFullYear()} {DATA.name}. Reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href={DATA.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gold text-black rounded-full flex items-center justify-center shadow-2xl animate-pulse ring-4 ring-gold/10"
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
      </div>
    </div>
  );
}
