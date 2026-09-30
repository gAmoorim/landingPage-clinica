import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  Sparkles,
  UserCheck,
  Clock,
  ChevronRight,
  Instagram,
  Phone,
  CheckCircle2,
} from "lucide-react";

export default function LandingPage() {
  const WHATSAPP_NUMBER = "5500000000000";

  const [formData, setFormData] = useState({
    nome: "",
    procedimento: "",
    mensagem: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleWhatsAppSubmit(event) {
    event.preventDefault();
    const texto = `Olá! Gostaria de agendar uma avaliação.\n\nMe chamo: ${formData.nome}\nTenho interesse em: ${formData.procedimento || "Não informado"}.\n ${formData.mensagem || "Não informado"}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  }

  const procedimentos = [
    { titulo: "Toxina Botulínica", texto: "Suavização de linhas de expressão com resultado natural e planejamento individualizado." },
    { titulo: "Preenchimento Facial", texto: "Realce de contornos, lábios e regiões específicas com equilíbrio e segurança." },
    { titulo: "Bioestimuladores", texto: "Estímulo de colágeno para melhora gradual da firmeza e qualidade da pele." },
    { titulo: "Harmonização Facial", texto: "Planejamento completo para valorizar os traços naturais do rosto." },
    { titulo: "Skinbooster", texto: "Hidratação profunda para melhora da textura, luminosidade e viço da pele." },
    { titulo: "Fios de PDO", texto: "Tratamento minimamente invasivo para sustentação e estímulo de colágeno." },
  ];

  const diferenciais = [
    "Atendimento médico individualizado",
    "Foco em naturalidade e segurança",
    "Ambiente sofisticado e acolhedor",
    "Acompanhamento antes e após o procedimento",
  ];

  const depoimentos = [
    { nome: "Paciente A.", texto: "Atendimento excelente, muito cuidado na explicação e resultado super natural." },
    { nome: "Paciente B.", texto: "Me senti segura desde a avaliação. O resultado ficou delicado e elegante." },
    { nome: "Paciente C.", texto: "Profissional muito atencioso. A clínica é linda e o atendimento é impecável." },
  ];

  const perguntas = [
    { pergunta: "A avaliação é obrigatória?", resposta: "Sim. A avaliação permite entender seus objetivos e indicar o tratamento mais adequado com segurança." },
    { pergunta: "O resultado fica natural?", resposta: "O foco do atendimento é valorizar os traços do paciente com equilíbrio, sem exageros." },
    { pergunta: "Como faço para agendar?", resposta: "Você pode clicar no botão de WhatsApp e falar diretamente com a equipe de atendimento." },
  ];

  return (
    <main className="min-h-screen bg-[#f0fbfb] text-[#1a3a36]">

      {/* ── HEADER ── */}
      <header className="fixed left-0 top-0 z-40 w-full backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <img src="/" alt="logo" className="h-13 w-13 object-contain" />
            <span className="text-lg font-semibold tracking-tight text-[#1a3a36]">Clínica Dr. Marcelo</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {["sobre", "procedimentos", "depoimentos", "contato"].map((s) => (
              <a key={s} href={`#${s}`} className="capitalize text-[#2d6b62] transition hover:text-[#1a3a36]">{s}</a>
            ))}
          </nav>

          <a
            href="https://wa.me/5500000000000"
            className="hidden rounded-full bg-[#2d6b62] px-5 py-3 text-sm font-medium text-white shadow-md transition hover:scale-105 hover:bg-[#1a3a36] md:inline-flex"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fbfb] via-[#d8f3f0] to-[#b7e4dd] pt-20">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#b7e4dd]/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-[#d8f3f0]/80 blur-2xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1a3a36] md:text-6xl">
                Realce sua beleza com naturalidade, segurança e sofisticação.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#2d6b62]">
                Procedimentos estéticos faciais realizados por médico, com planejamento personalizado para valorizar seus traços de forma elegante e harmônica.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5500000000000"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2d6b62] px-7 py-4 text-white shadow-lg transition hover:scale-105 hover:bg-[#1a3a36]"
              >
                <MessageCircle size={20} /> Agendar avaliação
              </a>
              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2d6b62]/30 bg-white/60 px-7 py-4 font-medium text-[#1a3a36] backdrop-blur transition hover:bg-white"
              >
                Conhecer procedimentos <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* teal ring decoration */}
            <div className="absolute -inset-4 rounded-[2.5rem]" />
            <img
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80"
              alt="Médico em ambiente clínico"
              className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] opacity-50" />
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
            alt="Profissional da saúde"
            className="relative h-[600px] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3a9b8e]">Sobre o médico</span>
          <h2 className="text-3xl font-semibold text-[#1a3a36] md:text-5xl">
            Cuidado estético com técnica, ética e atenção aos detalhes.
          </h2>
          <p className="text-lg leading-relaxed text-[#2d6b62]">
            Dr. Marcelo é especializado em procedimentos estéticos faciais, com foco em resultados naturais, avaliação individualizada e segurança em cada etapa do atendimento.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl p-5 shadow-sm">
              <p className="text-3xl font-semibold text-[#1a3a36]">+500</p>
              <p className="text-sm text-[#2d6b62]">pacientes atendidos</p>
            </div>
            <div className="rounded-3xl p-5 shadow-sm">
              <p className="text-3xl font-semibold text-[#1a3a36]">CRM</p>
              <p className="text-sm text-[#2d6b62]">registro profissional visível</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCEDIMENTOS ── */}
      <section id="procedimentos" className="bg-gradient-to-b from-[#d8f3f0] to-[#f0fbfb] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3a9b8e]">Procedimentos</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#1a3a36] md:text-5xl">
              Tratamentos para valorizar sua beleza natural
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {procedimentos.map((item) => (
              <div
                key={item.titulo}
                className="rounded-[2rem] bg-white/70 p-7 shadow-sm ring-1 ring-[#b7e4dd]/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:ring-[#3a9b8e]/40"
              >
                <Sparkles className="mb-5 text-[#3a9b8e]" />
                <h3 className="mb-3 text-xl font-semibold text-[#1a3a36]">{item.titulo}</h3>
                <p className="leading-relaxed text-[#2d6b62]">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3a9b8e]">Diferenciais</span>
            <h2 className="text-3xl font-semibold text-[#1a3a36] md:text-5xl">
              Experiência premium do primeiro contato ao pós-procedimento.
            </h2>
            <div className="space-y-4">
              {diferenciais.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#d8f3f0] to-[#f0fbfb] p-4 shadow-sm ring-1 ring-[#b7e4dd]/50">
                  <UserCheck className="shrink-0 text-[#3a9b8e]" size={22} />
                  <p className="font-medium text-[#1a3a36]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.5rem] opacity-50" />
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=80"
              alt="Tratamento estético facial"
              className="relative h-[500px] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="bg-gradient-to-br from-[#1a3a36] via-[#2d6b62] to-[#3a9b8e] px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b7e4dd]">Como funciona</span>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Um processo simples, seguro e personalizado</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {["Avaliação", "Planejamento", "Procedimento", "Acompanhamento"].map((passo, index) => (
              <div key={passo} className="rounded-[2rem] bg-white/10 p-7 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">
                <p className="mb-5 text-4xl font-semibold text-[#b7e4dd]">0{index + 1}</p>
                <h3 className="mb-3 text-xl font-semibold">{passo}</h3>
                <p className="text-white/70">Cada etapa é conduzida com orientação clara e atenção às necessidades individuais do paciente.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section id="depoimentos" className="bg-gradient-to-b from-[#f0fbfb] to-[#d8f3f0] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3a9b8e]">Depoimentos</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#1a3a36] md:text-5xl">O que os pacientes dizem</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {depoimentos.map((item) => (
              <div key={item.nome} className="rounded-[2rem] bg-white/80 p-7 shadow-sm ring-1 ring-[#b7e4dd]/60 backdrop-blur">
                <div className="mb-4 flex gap-1 text-[#3a9b8e]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-5 leading-relaxed text-[#2d6b62]">"{item.texto}"</p>
                <p className="font-semibold text-[#1a3a36]">{item.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f0fbfb] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3a9b8e]">FAQ</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#1a3a36] md:text-5xl">Dúvidas frequentes</h2>
          </div>

          <div className="space-y-4">
            {perguntas.map((item) => (
              <div key={item.pergunta} className="rounded-3xl bg-gradient-to-r from-[#d8f3f0] to-[#f0fbfb] p-6 ring-1 ring-[#b7e4dd]/60">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[#1a3a36]">
                  <CheckCircle2 className="shrink-0 text-[#3a9b8e]" size={20} />
                  {item.pergunta}
                </h3>
                <p className="text-[#2d6b62]">{item.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="bg-[#f8f3ee] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3a9b8e]">Contato</span>
            <h2 className="text-3xl font-semibold text-[#1a3a36] md:text-5xl">Agende sua avaliação</h2>
            <p className="text-lg leading-relaxed text-[#2d6b62]">
              Tire suas dúvidas e descubra qual procedimento combina melhor com seus objetivos.
            </p>
            <div className="space-y-4 text-[#1a3a36]">
              <p className="flex items-center gap-3"><Phone className="text-[#3a9b8e]" /> (00) 00000-0000</p>
              <p className="flex items-center gap-3"><Instagram className="text-[#3a9b8e]" /> @drnomedomedico</p>
              <p className="flex items-center gap-3"><MapPin className="text-[#3a9b8e]" /> Av. Exemplo, 123 - Sua Cidade</p>
              <p className="flex items-center gap-3"><Clock className="text-[#3a9b8e]" /> Segunda a sexta, 08h às 18h</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/80 p-8 shadow-sm ring-1 ring-[#b7e4dd]/60 backdrop-blur">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <input
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#b7e4dd] bg-white px-5 py-4 outline-none transition focus:border-[#3a9b8e] focus:ring-2 focus:ring-[#3a9b8e]/20"
                placeholder="Seu nome"
              />
              <select
                name="procedimento"
                value={formData.procedimento}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#b7e4dd] bg-white px-5 py-4 outline-none transition focus:border-[#3a9b8e] focus:ring-2 focus:ring-[#3a9b8e]/20"
              >
                <option value="">Procedimento de interesse</option>
                <option value="Toxina Botulínica">Toxina Botulínica</option>
                <option value="Preenchimento Facial">Preenchimento Facial</option>
                <option value="Bioestimuladores">Bioestimuladores</option>
                <option value="Harmonização Facial">Harmonização Facial</option>
              </select>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className="h-32 w-full rounded-2xl border border-[#b7e4dd] bg-white px-5 py-4 outline-none transition focus:border-[#3a9b8e] focus:ring-2 focus:ring-[#3a9b8e]/20"
                placeholder="Conte brevemente o que você procura"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d6b62] px-7 py-4 text-white shadow-lg transition hover:scale-105 hover:bg-[#1a3a36]"
              >
                <Calendar size={20} /> Solicitar agendamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gradient-to-r from-[#1a3a36] to-[#2d6b62] px-6 py-8 text-center text-sm text-white/70">
        <p>© 2026 izcode. Todos os direitos reservados.</p>
        <p className="mt-2">CRM 000000 • Informações da página não substituem avaliação médica individual.</p>
      </footer>

      {/* ── WHATSAPP FAB ── */}
      <a
        href="https://wa.me/5500000000000"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#3a9b8e] text-white shadow-2xl transition hover:scale-110 hover:bg-[#2d6b62]"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
}
