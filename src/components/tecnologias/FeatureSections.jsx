import { useEffect, useMemo, useRef, useState } from "react";

const SLIDES = [
  {
    title: "Herramientas para la creación de contenido",
    description:
      "Contenido visual elaborado con precisión para proyectos modernos, dinámicos y de alta calidad.",
    tools: ["houdini", "ae", "ps"],
  },
  {
    title: "Herramientas para la creación de contenido",
    description:
      "Diseñamos impresionantes modelos 3D, animaciones y entornos realistas para experiencias inmersivas.",
    tools: ["ae", "ps", "resolve"],
  },
  {
    title: "Herramientas para la creación de contenido",
    description:
      "Creamos piezas visuales con efectos, composición y motion design para una presentación profesional.",
    tools: ["ps", "resolve", "houdini"],
  },
  {
    title: "Herramientas para la creación de contenido",
    description:
      "Flujos de trabajo visuales pensados para producir contenido potente, atractivo y listo para destacar.",
    tools: ["resolve", "houdini", "ae"],
  },
];

function ToolIcon({ type }) {
  if (type === "ae") {
    return (
      <span className="text-[1.35rem] font-extrabold tracking-[-0.05em] text-violet-400">
        Ae
      </span>
    );
  }

  if (type === "ps") {
    return (
      <span className="text-[1.35rem] font-extrabold tracking-[-0.05em] text-sky-400">
        Ps
      </span>
    );
  }

  if (type === "houdini") {
    return (
      <span className="text-[1.35rem] font-extrabold tracking-[-0.05em] text-orange-400">
        H
      </span>
    );
  }

  if (type === "resolve") {
    return (
      <span className="relative block h-7 w-7">
        <span className="absolute left-2 top-0 h-[11px] w-[11px] rounded-full bg-cyan-300" />
        <span className="absolute bottom-0 left-0 h-[11px] w-[11px] rounded-full bg-lime-300" />
        <span className="absolute bottom-0 right-0 h-[11px] w-[11px] rounded-full bg-pink-500" />
        <span className="absolute inset-[1px] rounded-full border border-amber-200/90" />
      </span>
    );
  }

  return <span className="text-white">•</span>;
}

function UpdatesCard({ className = "", app, title, text, date, style }) {
  const badgeStyles = {
    gmail: "bg-gradient-to-br from-orange-300 to-orange-600 text-white",
    notion: "bg-gradient-to-br from-zinc-100 to-zinc-400 text-black",
    slack: "bg-gradient-to-br from-zinc-700 to-black text-white",
  };

  return (
    <div
      style={style}
      className={`absolute w-[314px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.018)),rgba(20,20,24,0.78)] p-[13px_15px_12px] shadow-[inset_0_1px_0_rgba(255,255,255,0.032),inset_0_-8px_18px_rgba(0,0,0,0.16),0_16px_42px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-transform duration-200 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8)_0.4px,transparent_0.9px),radial-gradient(circle_at_72%_60%,rgba(255,255,255,0.4)_0.4px,transparent_0.9px)] [background-size:120px_120px,150px_150px]" />

      <div className="relative z-[1] flex items-center gap-2.5">
        <span
          className={`grid h-[18px] w-[18px] place-items-center rounded-[5px] text-[10px] font-black ${badgeStyles[app]}`}
        >
          {app === "gmail" ? "M" : app === "notion" ? "N" : "✦"}
        </span>

        <span className="text-xs font-extrabold text-white/95">{title}</span>
      </div>

      <p className="relative z-[1] mt-2 text-[11px] font-semibold leading-[1.35] text-white/60">
        {text}
      </p>

      {date ? (
        <span className="relative z-[1] mt-2 inline-block text-[10px] font-semibold text-white/35">
          {date}
        </span>
      ) : null}
    </div>
  );
}

export default function FeatureSections() {
  const [current, setCurrent] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rightRef = useRef(null);

  const currentSlide = useMemo(() => SLIDES[current], [current]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () =>
    setCurrent((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length);
  const next = () =>
    setCurrent((prevIndex) => (prevIndex + 1) % SLIDES.length);

  const onMouseMove = (e) => {
    if (!rightRef.current) return;

    const rect = rightRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    setMouse({ x, y });
  };

  const onMouseLeave = () => setMouse({ x: 0, y: 0 });

  const backStyle = {
    transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 8}px, 0) rotate(-8deg)`,
  };

  const middleStyle = {
    transform: `translate3d(${mouse.x * 16}px, ${mouse.y * 10}px, 0) rotate(-8deg)`,
  };

  const frontStyle = {
    transform: `translate3d(${mouse.x * 24}px, ${mouse.y * 14}px, 0) rotate(-8deg)`,
  };

  return (
    <section className="w-full bg-black px-5 pb-6 pt-3">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-3 lg:grid-cols-2">
        <article className="relative isolate min-h-[344px] overflow-hidden rounded-[18px] border border-white/10 bg-[radial-gradient(circle_at_18%_88%,rgba(88,51,255,0.18),transparent_24%),radial-gradient(circle_at_82%_90%,rgba(255,132,58,0.09),transparent_24%),radial-gradient(circle_at_86%_100%,rgba(21,91,255,0.14),transparent_26%),linear-gradient(180deg,#111217_0%,#060608_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),inset_0_-20px_60px_rgba(0,0,0,0.24),0_18px_50px_rgba(0,0,0,0.35)]">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] [background-image:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.75)_0.45px,transparent_0.9px),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.45)_0.45px,transparent_0.9px),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.35)_0.45px,transparent_0.9px)] [background-size:140px_140px,160px_160px,180px_180px]" />
          <div className="pointer-events-none absolute bottom-[-42px] left-[-22px] z-0 h-[190px] w-[190px] rounded-full bg-violet-500/20 blur-[88px]" />
          <div className="pointer-events-none absolute bottom-[-74px] right-[-10px] z-0 h-[220px] w-[220px] rounded-full bg-orange-400/10 blur-[88px]" />
          <div className="pointer-events-none absolute left-10 top-2.5 z-0 h-20 w-[220px] rotate-[-6deg] bg-gradient-to-r from-white/10 to-transparent blur-2xl" />

          <div className="relative z-[2] max-w-[432px] rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)),rgba(18,18,22,0.48)] p-[20px_16px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_12px_30px_rgba(0,0,0,0.24)] backdrop-blur-md">
            <div
              key={`tools-${current}`}
              className="flex min-h-[54px] gap-4 animate-[fadeUp_.42s_ease]"
            >
              {currentSlide.tools.map((tool, index) => (
                <div
                  key={`${tool}-${index}-${current}`}
                  className={`grid place-items-center rounded-[10px] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.025),0_6px_18px_rgba(0,0,0,0.16)] transition-all duration-300 ${
                    index === 1
                      ? "h-[54px] w-[62px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))]"
                      : "h-[50px] w-[56px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.008))]"
                  }`}
                >
                  <ToolIcon type={tool} />
                </div>
              ))}
            </div>
          </div>

          <div
            key={`copy-${current}`}
            className="relative z-[2] mt-[18px] min-h-[124px] max-w-[430px] animate-[copyIn_.48s_ease]"
          >
            <h2 className="max-w-[420px] text-[31px] font-black leading-[0.91] tracking-[-0.06em] text-[#f5f5f7]">
              {currentSlide.title}
            </h2>
            <p className="mt-3 max-w-[360px] text-[12.5px] font-medium leading-[1.13] text-white/35">
              {currentSlide.description}
            </p>
          </div>

          <div className="relative z-[2] mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-[14px] max-[640px]:grid-cols-1">
            <button
              type="button"
              onClick={prev}
              className="justify-self-start rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02)),rgba(34,34,38,0.76)] px-4 py-[7px] text-[10px] font-bold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_8px_16px_rgba(0,0,0,0.18)] transition hover:-translate-y-[1px] hover:border-white/15 max-[640px]:justify-self-stretch"
            >
              Anterior
            </button>

            <div className="flex items-center justify-center max-[640px]:order-[-1]">
              <div className="flex items-center gap-1.5">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Ir al slide ${index + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === current
                        ? "w-[22px] bg-white"
                        : "w-1 bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={next}
              className="justify-self-end rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02)),rgba(34,34,38,0.76)] px-4 py-[7px] text-[10px] font-bold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_8px_16px_rgba(0,0,0,0.18)] transition hover:-translate-y-[1px] hover:border-white/15 max-[640px]:justify-self-stretch"
            >
              Continuar
            </button>
          </div>
        </article>

        <article
          ref={rightRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative isolate min-h-[344px] overflow-hidden rounded-[18px] border border-white/10 bg-[radial-gradient(circle_at_18%_88%,rgba(88,51,255,0.18),transparent_24%),radial-gradient(circle_at_82%_90%,rgba(255,132,58,0.09),transparent_24%),radial-gradient(circle_at_86%_100%,rgba(21,91,255,0.14),transparent_26%),linear-gradient(180deg,#111217_0%,#060608_100%)] p-[16px_20px_18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),inset_0_-20px_60px_rgba(0,0,0,0.24),0_18px_50px_rgba(0,0,0,0.35)]"
        >
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] [background-image:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.75)_0.45px,transparent_0.9px),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.45)_0.45px,transparent_0.9px),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.35)_0.45px,transparent_0.9px)] [background-size:140px_140px,160px_160px,180px_180px]" />
          <div className="pointer-events-none absolute bottom-[-42px] left-20 z-0 h-[190px] w-[190px] rounded-full bg-violet-500/20 blur-[88px]" />
          <div className="pointer-events-none absolute bottom-[-58px] right-[-10px] z-0 h-[220px] w-[220px] rounded-full bg-blue-500/15 blur-[88px]" />
          <div className="pointer-events-none absolute right-10 top-2.5 z-0 h-20 w-[260px] rotate-[-6deg] bg-gradient-to-r from-white/10 to-transparent blur-2xl" />

          <div className="relative z-[2]">
            <h2 className="max-w-[340px] text-[31px] font-black leading-[0.91] tracking-[-0.06em] text-[#f5f5f7]">
              Actualizaciones
              <br />
              fluidas para el
              <br />
              cliente
            </h2>

            <p className="mt-3 max-w-[360px] text-[12.5px] font-medium leading-[1.13] text-white/35">
              Herramientas personalizadas, actualizaciones sin esfuerzo,
              <br />
              comunicación simplificada.
            </p>
          </div>

          <div className="absolute bottom-8 left-[22px] right-[18px] z-[2] h-[190px] [perspective:1200px] max-[640px]:relative max-[640px]:bottom-auto max-[640px]:left-0 max-[640px]:right-0 max-[640px]:mt-[18px]">
            <div className="absolute left-[72px] top-2 h-[112px] w-[290px] rounded-[28px] bg-black/35 blur-2xl" />

            <UpdatesCard
              className="left-1 top-2 z-[1] opacity-60 animate-[floatBack_5.6s_ease-in-out_infinite]"
              app="slack"
              title="Flujo"
              text="El borrador del contenido avanza al 75%. Se ha compartido el estado actual para revisión."
              style={backStyle}
            />

            <UpdatesCard
              className="left-[30px] top-7 z-[2] opacity-80 animate-[floatMid_5.1s_ease-in-out_infinite]"
              app="gmail"
              title="Gmail"
              text="El desarrollo está completado en un 90%. El cronograma de pruebas se ha compartido con el equipo."
              style={middleStyle}
            />

            <UpdatesCard
              className="left-[58px] top-12 z-[3] animate-[floatFront_4.8s_ease-in-out_infinite]"
              app="notion"
              title="Notion"
              text="La fase de diseño se ha completado con éxito. Las tareas se han actualizado y están preparadas para su revisión."
              date="7 de noviembre"
              style={frontStyle}
            />
          </div>
        </article>
      </div>

      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes copyIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes floatBack {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -4px; }
        }

        @keyframes floatMid {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -6px; }
        }

        @keyframes floatFront {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -8px; }
        }
      `}</style>
    </section>
  );
}