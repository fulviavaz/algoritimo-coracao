"use client";

import React, { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, Download, ExternalLink, Flame, Mail } from "lucide-react";

const TOKENS = {
  bg: "#07111F",
  bgSoft: "#0B1729",
  surface: "rgba(255,255,255,0.04)",
  surfaceStrong: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.10)",
  text: "#FFFFFF",
  textSoft: "rgba(255,255,255,0.72)",
  textMuted: "rgba(255,255,255,0.48)",
  accent: "#FF3B3B",
  accentSoft: "rgba(255,59,59,0.12)",
  radius: "1.5rem",
};

const pillars = [
  {
    title: "Confiança não é prometida. É percebida.",
    text: "A nova lealdade nasce quando experiência, discurso e entrega parecem a mesma coisa.",
  },
  {
    title: "Relacionamento é sistema, não campanha.",
    text: "Marcas memoráveis constroem vínculo contínuo, não apenas picos de ativação.",
  },
  {
    title: "IA deve ampliar humanidade, não substituir presença.",
    text: "Automação sem intenção vira frieza. Inteligência com contexto vira relevância.",
  },
  {
    title: "Lealdade é hábito com significado.",
    text: "Recorrência real acontece quando o cliente percebe valor, autonomia e coerência.",
  },
];

const articles = [
  {
    tag: "Artigo",
    title: "Por que satisfação não garante permanência",
    desc: "Uma reflexão sobre o abismo entre clientes satisfeitos e clientes verdadeiramente leais.",
  },
  {
    tag: "Ensaio",
    title: "IA, vínculo e confiança em escala",
    desc: "Como desenhar sistemas inteligentes sem transformar pessoas em números frios.",
  },
  {
    tag: "Framework",
    title: "Os sinais da Nova Lealdade",
    desc: "Indicadores práticos para medir coerência, recorrência e valor percebido.",
  },
];

const references = [
  "Behavioral Design e formação de hábito",
  "Customer Experience e confiança",
  "Governança de IA e transparência",
  "Brand strategy e consistência relacional",
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.28em] text-white/45">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{text}</p> : null}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.18)] ${className}`}
    >
      {children}
    </div>
  );
}

function Pill({ children, danger = false }: { children: React.ReactNode; danger?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${danger
        ? "border-[#FF3B3B]/20 bg-[#FF3B3B]/10 text-[#FF6B6B]"
        : "border-white/10 bg-white/[0.04] text-white/72"
        }`}
    >
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode; className?: string }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#FF3B3B] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ff5252] ${className}`}
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode; className?: string }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08] ${className}`}
    >
      {children}
    </button>
  );
}

const AMAZON_BOOK_URL =
  "https://www.amazon.com.br/algoritmo-cora%C3%A7%C3%A3o-perspectivas-estrat%C3%A9gicas-relacionamento/dp/8550829048";

export default function HumanLoyaltyLandingPage() {
  const [diag, setDiag] = useState({
    strategy: 3,
    trust: 3,
    habit: 3,
    ai: 3,
    governance: 3,
    execution: 3,
  });

  const score = useMemo(() => {
    const values = Object.values(diag);
    const total = values.reduce((sum, value) => sum + value, 0);
    return Math.round((total / (values.length * 5)) * 100);
  }, [diag]);

  const scoreLabel = useMemo(() => {
    if (score < 45) return "Sua operação ainda parece presa a lógicas antigas de retenção.";
    if (score < 75) return "Há bons sinais, mas ainda existe espaço para mais coerência e profundidade relacional.";
    return "Sua organização já demonstra maturidade relevante para operar a Nova Lealdade.";
  }, [score]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const questions = [
    {
      key: "strategy",
      question: "Sua estratégia trata relacionamento como sistema contínuo?",
      left: "Campanhas isoladas",
      right: "Sistema vivo",
    },
    {
      key: "trust",
      question: "Vocês medem confiança e vínculo além de atividade?",
      left: "Só atividade",
      right: "Vínculo como KPI",
    },
    {
      key: "habit",
      question: "Vocês desenham hábitos saudáveis para o cliente?",
      left: "Só estímulo",
      right: "Valor recorrente",
    },
    {
      key: "ai",
      question: "A IA ajuda pessoas ou só acelera venda?",
      left: "Extração",
      right: "Serviço útil",
    },
    {
      key: "governance",
      question: "Há transparência, limites e governança?",
      left: "Sem clareza",
      right: "Com auditoria",
    },
    {
      key: "execution",
      question: "Vocês testam, aprendem e refinam continuamente?",
      left: "Lançamentos pontuais",
      right: "Pilotos iterativos",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-[#07111F] text-white">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent_20%)]" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_92%_10%,rgba(255,59,59,0.12),transparent_16%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111F]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">Algoritimo do Coração</p>
            <p className="text-sm font-semibold text-white">Manifesto + Livro + Talks</p>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {[
              ["manifesto", "Manifesto"],
              ["pilares", "Pilares"],
              ["diagnostico", "Diagnóstico"],
              ["talks", "Talks"],
              ["comprar", "Livro"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
<a
  href={AMAZON_BOOK_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF3B3B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ff5252]"
>
  Comprar agora
</a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,59,59,0.12),transparent_22%),radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%)]" />

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>Livro</Pill>
                <Pill>Manifesto estratégico</Pill>
                <Pill danger>IA + confiança + vínculo</Pill>
              </div>

              <p className="mt-6 text-[11px] uppercase tracking-[0.30em] text-white/45">
                Algoritimo do Coração
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                O Algoritmo do Coração
                <span className="block text-white/80">
                  e a nova lógica do relacionamento entre marcas e pessoas.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                Uma visão estratégica sobre como inteligência artificial, confiança e
                comportamento do consumidor redefinem a lealdade — com aplicações
                práticas para marcas, líderes e organizações.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={AMAZON_BOOK_URL} target="_blank" rel="noopener noreferrer">
  <PrimaryButton>
    <BookOpen className="h-4 w-4" />
    Comprar o livro
  </PrimaryButton>
</a>

                <SecondaryButton onClick={() => scrollToId("talks")}>
                  <Flame className="h-4 w-4" />
                  Levar para uma talk
                </SecondaryButton>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Para quem é
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/78">
                    CEOs, CMOs, líderes de CRM, CX, branding, produto, dados e inovação.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    O que entrega
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/78">
                    Visão, linguagem, diagnóstico e repertório para transformação real.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Tema central
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/78">
                    Como usar IA sem desumanizar experiências, marcas e relações.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-auto top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#FF3B3B]/10 blur-3xl" />

              <div className="relative w-full max-w-[520px] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:p-6">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#081321] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  <img
                    src="/livro.png"
                    alt="Capa do livro O Algoritmo do Coração"
                    className="mx-auto h-auto w-full max-w-[320px] object-contain transition duration-300 hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                    Estratégia
                  </span>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                    IA aplicada
                  </span>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                    Relacionamento
                  </span>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                    Lealdade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {[
              "Por que clientes satisfeitos ainda abandonam marcas?",
              "Onde termina personalização e começa manipulação?",
              "Como transformar dados em confiança concreta?",
              "O que faz uma marca virar escolha recorrente?",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#0B1729]/70 p-4">
                <p className="text-sm leading-relaxed text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="manifesto" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionTitle
              eyebrow="Manifesto"
              title="A lealdade não mora em pontos, descontos e automações vazias."
            />
            <div className="grid gap-4">
              <Card className="p-7">
                <p className="text-base leading-relaxed text-white/78 sm:text-lg">
                  A obra parte de uma provocação simples: o consumidor mudou, mas muitas marcas continuam operando com lógicas antigas. O problema não é falta de tecnologia. É excesso de fórmula e pouca intenção relacional.
                </p>
              </Card>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Tese central", "Lealdade é efeito colateral da coerência entre discurso, experiência e valor percebido."],
                  ["O risco", "IA sem intenção humana otimiza a frieza e acelera a desconfiança."],
                  ["O convite", "Construir marcas mais confiáveis, mais relevantes e mais insubstituíveis."],
                ].map(([title, text]) => (
                  <Card key={title} className="p-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">{title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/78">{text}</p>
                  </Card>
                ))}
                          </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl">
            <Card className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                Além da Eficiência
              </p>

              <h3 className="mt-3 max-w-4xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Um manifesto sobre relacionamento em tempos algorítmicos
              </h3>

              <div className="mt-8 grid gap-6 text-sm leading-relaxed text-white/72 sm:text-base lg:grid-cols-2">
                <div className="space-y-5">
                  <p>
                    A IA é um espelho, não uma máscara. Empresas utilitaristas criam algoritmos invasivos, mas as que respeitam seus clientes criam tecnologias que amplificam a humanidade. O código que você escreve e o dado que você coleta dizem tudo sobre quem você é antes mesmo de dizerem o que você vende. A regra é clara, a tecnologia precisa servir ao vínculo, nunca o contrário.
                  </p>

                  <p>
                    O fim da perseguição. O mercado saturou. Ninguém mais aguenta ser caçado por cookies ou algoritmos de extração. A defesa do Zero-Party Data existe por uma razão ética, o dado é um voto de confiança. Se o cliente compartilha uma intenção, a nossa obrigação é devolver valor real, não spam mascarado de oportunidade. A troca é necessária.
                  </p>

                  <p>
                    Máquinas fazem o mecânico e humanos fazem o que é vivo. Escala e repetição pertencem aos processadores. Mas a empatia, o tato em uma crise e o salto criativo são territórios exclusivamente nossos. Uma IA verdadeiramente inteligente é aquela que sabe a hora de agir e mais importante, a hora de sair do caminho e deixar que duas pessoas conversem.
                  </p>
                </div>

                <div className="space-y-5">
                  <p>
                    A ciência do grupo, a arte do indivíduo. Clusters e personas são o ponto de partida. Eles dão a ordem e a escala, mas é a individuação que traz a alma. O engajamento real acontece quando a estrutura dos segmentos é usada para sustentar o reconhecimento da singularidade. Pessoas carregam micro-identidades fluidas e o nosso papel é garantir que a eficiência do grupo nunca atropele a dignidade do indivíduo.
                  </p>

                  <p>
                    O lucro é o aplauso. Fidelidade não se impõe com contrato ou multa, ela é conquistada com coerência, transparência e entrega. Quando o relacionamento é baseado em respeito e utilidade, o resultado financeiro aparece como consequência natural. Quem foca só no número perde a alma. Quem foca na alma, ganha o jogo a longo prazo.
                  </p>

                  <p className="border-l-2 border-[#FF3B3B] pl-5 text-lg font-semibold leading-snug text-white">
                    Sua marca está construindo um código ou um vínculo?
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="pilares" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Pilares"
              title="Os pilares da Nova Lealdade"
              text="Uma estrutura de conteúdo mais sóbria, limpa e orientada à clareza."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {pillars.map((item, index) => (
                <Card key={item.title} className="h-full p-7">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#FF3B3B]/10 text-sm font-semibold text-[#FF6B6B]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold leading-snug">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="diagnostico" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Diagnóstico"
              title="Veja o quão preparada sua organização está para a Nova Lealdade"
              text="Interação simples, visual limpo e hierarquia mais executiva."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <Card className="p-5 sm:p-6">
                <div className="space-y-4">
                  {questions.map((item) => (
                    <div key={item.key} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm font-semibold leading-relaxed">{item.question}</p>
                      <input
                        type="range"
                        min={1}
                        max={5}
                        value={diag[item.key]}
                        onChange={(e) => setDiag((prev) => ({ ...prev, [item.key]: Number(e.target.value) }))}
                        className="mt-4 w-full accent-[#FF3B3B]"
                      />
                      <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-white/48 sm:text-xs">
                        <span>{item.left}</span>
                        <span className="text-center text-white/82">{diag[item.key]}/5</span>
                        <span>{item.right}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="space-y-4">
                <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-[#0B1729] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                  <p className="text-xs uppercase tracking-[0.22em] text-black/45">Resultado atual</p>
                  <p className="mt-3 text-5xl font-semibold">{score}%</p>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">{scoreLabel}</p>
                  <PrimaryButton onClick={() => scrollToId("talks")} className="mt-6 w-full">
                    Agendar conversa estratégica
                  </PrimaryButton>
                </div>

                <Card className="p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Próximo passo</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/76">
                    Escolha um ponto crítico — fricção, coerência, governança ou hábito — e rode um piloto de 30 dias com um único objetivo mensurável.
                  </p>

                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="ideias" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Conteúdo complementar" title="Artigos & ideias para aprofundar a tese" />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.title} className="p-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">{article.tag}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{article.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/72">{article.desc}</p>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white">
                    Ler conteúdo <ArrowUpRight className="h-4 w-4" />
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="autor" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,#0B1729,rgba(255,255,255,0.03))]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[420px] border-b border-white/10 lg:min-h-full lg:border-b-0 lg:border-r">
                  <img
                    src="/ranoya.jpg"
                    alt="Christiano Ranoya"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,17,31,0.82),rgba(7,17,31,0.15),transparent)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                      Autor
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                      Christiano Ranoya
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/72">
                      CEO da INDICO, consultoria especializada em fidelidade e
                      relacionamento com clientes.
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                    Sobre o autor
                  </p>

                  <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                    Três décadas dedicadas a entender confiança, lealdade e comportamento do consumidor.
                  </h2>

                  <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/72 sm:text-base">
                    <p>
                      Christiano Ranoya é CEO da INDICO, consultoria especializada em
                      fidelidade e relacionamento com clientes. Ao longo de três
                      décadas, participou da concepção e reinvenção de mais de 120
                      projetos para grandes marcas, gerando valor real para empresas e consumidores.
                    </p>

                    <p>
                      É palestrante, Mestre em Finanças e Doutorando em Fidelidade e
                      Comportamento do Consumidor na FGV. Sua pesquisa investiga como a
                      inteligência artificial e as novas dinâmicas de consumo desafiam
                      os conceitos tradicionais de confiança e lealdade.
                    </p>

                    <p>
                      Observador atento do comportamento humano, seu trabalho parte da
                      vida real: consumidores que abandonam marcas mesmo satisfeitos,
                      empresas presas a indicadores obsoletos e líderes que precisam
                      reaprender a construir vínculos verdadeiros.
                    </p>

                    <p>
                      Casado e pai de dois filhos, escreve com a clareza de quem sabe
                      que confiança é frágil — e que tecnologia, por si só, não
                      substitui uma relação verdadeira.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                        Experiência
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">30 anos</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                        Projetos
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">120+ marcas</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                        Atuação
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Fidelidade, IA e relacionamento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="talks" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,#0B1729,rgba(255,255,255,0.03))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <SectionTitle
                  eyebrow="Talks & workshops"
                  title="Leve essa conversa para sua empresa, evento ou liderança"
                  text="Bloco de oferta com contraste controlado e CTA mais forte em vermelho."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Card className="bg-[#07111F]/60 p-5">
                    <p className="text-sm font-semibold">Formatos</p>
                    <ul className="mt-3 space-y-2 text-sm text-white/72">
                      <li>• Keynote (45–60 min)</li>
                      <li>• Workshop estratégico (3–4h)</li>
                      <li>• Sessão executiva (90 min)</li>
                      <li>• Mesa redonda / painel</li>
                    </ul>
                  </Card>
                  <Card className="bg-[#07111F]/60 p-5">
                    <p className="text-sm font-semibold">Públicos</p>
                    <ul className="mt-3 space-y-2 text-sm text-white/72">
                      <li>• CEOs e founders</li>
                      <li>• Marketing, branding e CRM</li>
                      <li>• Produto, dados e CX</li>
                      <li>• Inovação e transformação</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-[#0B1729] sm:p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-black/45">Solicitar proposta</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">Monte uma conversa sob medida para seu contexto</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/68">
                  Diagnóstico, conteúdo, frameworks e aplicações práticas para marcas que precisam construir vínculo com mais intenção.
                </p>
                <PrimaryButton onClick={() => scrollToId("newsletter")} className="mt-6 w-full">
                  <Mail className="h-4 w-4" />
                  Falar sobre uma talk
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        <section id="comprar" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Livro" title="Compre na Amazon" />

            <div className="mt-8 max-w-xl">
              <Card className="p-7">
                <p className="text-xl font-semibold">Amazon</p>
                <p className="mt-3 text-sm leading-relaxed text-white/72">
                  Garanta seu exemplar de <span className="text-white">O Algoritmo do Coração</span>.
                </p>

              <a
  href={AMAZON_BOOK_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B6B] hover:text-[#ff8a8a]"
>
  Comprar na Amazon <ExternalLink className="h-4 w-4" />
</a>
              </Card>
            </div>
          </div>
        </section>

        {/* <section id="referencias" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Base teórica" title="Referências e leituras complementares" />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {references.map((item) => (
                <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="newsletter" className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <SectionTitle
                eyebrow="Atualizações"
                title="Receba ensaios, convites e novidades do projeto"
                text="Fechamento com CTA principal mais sóbrio e alinhado ao restante da experiência."
              />

              <Card className="p-6">
                <form
  className="grid gap-3"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      type: "Atualizações / Newsletter",
      name: formData.get("name"),
      email: formData.get("email"),
      message: "Usuário quer receber ensaios, convites e novidades do projeto.",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Erro no envio:", result);
        alert("Erro ao enviar. Verifique os logs da Vercel.");
        return;
      }

      alert("Enviado com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Erro ao submeter formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    }
  }}
>
  <input
    name="name"
    type="text"
    placeholder="Seu nome"
    required
    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#FF3B3B]/40"
  />

  <input
    name="email"
    type="email"
    placeholder="Seu e-mail"
    required
    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#FF3B3B]/40"
  />

  <PrimaryButton type="submit" className="w-full">
    <Mail className="h-4 w-4" />
    Quero acompanhar
  </PrimaryButton>
</form>
                <p className="mt-4 text-xs leading-relaxed text-white/58">
                  Privacidade por design: envie apenas o necessário.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  O Algoritmo do Coração
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Human Loyalty Project
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/68">
                  Reflexões, frameworks e aplicações práticas sobre confiança,
                  lealdade, inteligência artificial e relacionamento entre marcas e pessoas.
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Navegação
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
                  <button onClick={() => scrollToId("manifesto")} className="text-left transition hover:text-white">
                    Manifesto
                  </button>
                  <button onClick={() => scrollToId("pilares")} className="text-left transition hover:text-white">
                    Pilares
                  </button>
                  <button onClick={() => scrollToId("diagnostico")} className="text-left transition hover:text-white">
                    Diagnóstico
                  </button>
                  <button onClick={() => scrollToId("talks")} className="text-left transition hover:text-white">
                    Talks
                  </button>
                  <button onClick={() => scrollToId("comprar")} className="text-left transition hover:text-white">
                    Livro
                  </button>
                  <button onClick={() => scrollToId("autor")} className="text-left transition hover:text-white">
                    Autor
                  </button>
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Autor
                </p>
                <p className="mt-4 text-sm font-semibold text-white">
                  Christiano Ranoya
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  CEO da INDICO, palestrante, Mestre em Finanças e pesquisador em fidelidade e comportamento do consumidor.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-xs leading-relaxed text-white/45">
                © {new Date().getFullYear()} O Algoritmo do Coração. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
