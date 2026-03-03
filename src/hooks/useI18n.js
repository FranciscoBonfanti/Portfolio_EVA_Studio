// src/hooks/useI18n.js
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "site_lang";

export function useI18n() {
  const translations = useMemo(
    () => ({
      es: {
        "topbar.text": "✨ Cupos disponibles este mes",
        "topbar.link": "Hablemos",
        "nav.process": "Proceso",
        "nav.benefits": "Beneficios",
        "nav.services": "Servicios",
        "nav.pricing": "Precios",
        "nav.faqs": "FAQs",
        "nav.cta": "Hablemos",

        "hero.pill": "Diseño • Desarrollo • Conversión",
        "hero.subtitle": "Sistemas Digitales & Automatización",
        "hero.btnPricing": "Ver precios",
        "hero.btnProjects": "Ver proyectos",
        "hero.stats.delivered": "proyectos entregados",
        "hero.stats.days": "días promedio",
        "hero.stats.responsive": "responsive",

        "process.kicker": "Proceso",
        "process.title": "Nuestro proceso",
        "process.subtitle": "Tres pasos simples para pasar de idea a sitio publicado.",
        "process.s1.title": "Análisis y planificación",
        "process.s1.desc": "Alineamos objetivos, estructura y funcionalidades desde el primer día.",

        "benefits.kicker": "Beneficios",
        "benefits.title": "¿Qué obtenés con nosotros?",
        "benefits.subtitle": "Un servicio integral, claro y orientado a resultados.",
        "benefits.b1.title": "Web a medida",
        "benefits.b1.desc": "Diseño y contenido alineados a tu diferencial para atraer al cliente correcto.",
        "benefits.b2.title": "Performance real",
        "benefits.b2.desc": "Sitios rápidos y livianos para mejorar experiencia y conversiones.",
        "benefits.b3.title": "Autogestionable",
        "benefits.b3.desc": "Podés editar contenido y crecer sin depender de terceros.",

        "services.kicker": "Servicios",
        "services.title": "Soluciones digitales en un solo lugar",
        "services.subtitle": "Todo pensado para vender más.",
        "services.s1.title": "Diseño y desarrollo",
        "services.s1.desc": "Una web clara, profesional y coherente con tu marca.",
        "services.s2.title": "Responsive",
        "services.s2.desc": "Se ve perfecto en celular, tablet y computadora.",
        "services.s3.title": "Integración WhatsApp",
        "services.s3.desc": "Acortamos el camino entre interés y consulta.",
        "services.s4.title": "Formularios optimizados",
        "services.s4.desc": "Capturá datos útiles con fricción mínima.",
        "services.s5.title": "Seguridad y backups",
        "services.s5.desc": "Protección y respaldos automáticos para evitar pérdidas.",
        "services.s6.title": "Métricas",
        "services.s6.desc": "Configuración de analítica para medir resultados.",

        "pricing.kicker": "Precios",
        "pricing.title": "Planes que se ajustan a tus necesidades",
        "pricing.subtitle": "Elegí un plan base y lo adaptamos.",
        "pricing.usdNote": "Precio en dólares",
        "pricing.badge": "Más elegido",
        "pricing.p1.title": "Landing Page",
        "pricing.p1.li1": "1 página",
        "pricing.p1.li2": "Diseño personalizado",
        "pricing.p1.li3": "100% responsive",
        "pricing.p1.li4": "WhatsApp o formulario",
        "pricing.p1.cta": "Quiero mi web",
        "pricing.p2.title": "Institucional",
        "pricing.p2.li1": "Hasta 5 secciones",
        "pricing.p2.li2": "Diseño personalizado",
        "pricing.p2.li3": "SEO básico",
        "pricing.p2.li4": "Formulario + WhatsApp",
        "pricing.p2.cta": "Quiero mi web",
        "pricing.p3.title": "Web a medida",
        "pricing.p3.price": "Personalizada",
        "pricing.p3.note": "Cotizamos según alcance",
        "pricing.p3.li1": "Estructura y diseño",
        "pricing.p3.li2": "Optimización de rendimiento",
        "pricing.p3.li3": "Integraciones",
        "pricing.p3.li4": "Analítica y medición",
        "pricing.p3.cta": "Agendar una llamada",

        "faq.kicker": "FAQ",
        "faq.title": "Preguntas frecuentes",
        "faq.subtitle": "Resolvemos dudas comunes sobre tiempos, contenido y cambios.",
        "faq.q1.q": "¿En cuánto tiempo está lista la web?",
        "faq.q1.a": "Depende del alcance. Una landing suele estar en 7–10 días y un institucional en 10–14 días.",
        "faq.q2.q": "¿La web es autogestionable?",
        "faq.q2.a": "Sí. Te dejamos todo preparado para que puedas editar textos e imágenes sin complicaciones.",
        "faq.q3.q": "¿Tengo que aportar el contenido?",
        "faq.q3.a": "Idealmente sí (texto base, fotos, servicios). Si no lo tenés, te ayudamos a ordenarlo y redactarlo.",
        "faq.q4.q": "¿Incluye versión móvil?",
        "faq.q4.a": "Sí. Diseñamos pensando primero en celular para asegurar una experiencia excelente.",
        "faq.q5.q": "¿Puedo pedir cambios una vez entregada?",
        "faq.q5.a": "Incluimos una ronda de ajustes posteriores a la entrega. Extra cambios se cotizan aparte.",
        "faq.q6.q": "¿El dominio y hosting están incluidos?",
        "faq.q6.a": "Podemos gestionarlos con vos. La compra y renovación dependen del proveedor elegido.",

        "cta.title": "¿Tenés alguna consulta? Hablemos.",
        "cta.subtitle": "Agendá una llamada gratuita y te decimos qué conviene para tu caso.",
        "cta.btn1": "Consulta gratis",
        "cta.btn2": "Volver arriba",

        "footer.rights": "© Todos los derechos reservados",
        "footer.process": "Proceso",
        "footer.benefits": "Beneficios",
        "footer.services": "Servicios",
        "footer.pricing": "Precios",
        "footer.faqs": "FAQs",

        // Rotator
        "hero.word1": "CREA",
        "hero.word2": "TU",
        "hero.word3": "WEB",
      },
      en: {
        "topbar.text": "✨ Spots available this month",
        "topbar.link": "Let’s talk",
        "nav.process": "Process",
        "nav.benefits": "Benefits",
        "nav.services": "Services",
        "nav.pricing": "Pricing",
        "nav.faqs": "FAQs",
        "nav.cta": "Let’s talk",

        "hero.pill": "Design • Development • Conversion",
        "hero.subtitle": "Digital Systems & Automation",
        "hero.btnPricing": "See pricing",
        "hero.btnProjects": "View projects",
        "hero.stats.delivered": "projects delivered",
        "hero.stats.days": "avg. days",
        "hero.stats.responsive": "responsive",

        "process.kicker": "Process",
        "process.title": "Our process",
        "process.subtitle": "Three simple steps from idea to published website.",
        "process.s1.title": "Analysis & planning",
        "process.s1.desc": "We align goals, structure, and features from day one.",

        "benefits.kicker": "Benefits",
        "benefits.title": "What do you get with us?",
        "benefits.subtitle": "A complete service—clear and results-driven.",
        "benefits.b1.title": "Tailor-made website",
        "benefits.b1.desc": "Design and content aligned with your differentiator to attract the right customer.",
        "benefits.b2.title": "Real performance",
        "benefits.b2.desc": "Fast, lightweight websites to improve experience and conversions.",
        "benefits.b3.title": "Self-manageable",
        "benefits.b3.desc": "You can edit content and grow without relying on third parties.",

        "services.kicker": "Services",
        "services.title": "Digital solutions in one place",
        "services.subtitle": "Everything designed to help you sell more.",
        "services.s1.title": "Design & development",
        "services.s1.desc": "A clear, professional website consistent with your brand.",
        "services.s2.title": "Responsive",
        "services.s2.desc": "Looks perfect on mobile, tablet, and desktop.",
        "services.s3.title": "WhatsApp integration",
        "services.s3.desc": "We shorten the path between interest and inquiry.",
        "services.s4.title": "Optimized forms",
        "services.s4.desc": "Capture useful data with minimal friction.",
        "services.s5.title": "Security & backups",
        "services.s5.desc": "Protection and automated backups to prevent data loss.",
        "services.s6.title": "Metrics",
        "services.s6.desc": "Analytics setup to measure results.",

        "pricing.kicker": "Pricing",
        "pricing.title": "Plans that fit your needs",
        "pricing.subtitle": "Choose a base plan and we tailor it to you.",
        "pricing.usdNote": "Price in USD",
        "pricing.badge": "Most popular",
        "pricing.p1.title": "Landing Page",
        "pricing.p1.li1": "1 page",
        "pricing.p1.li2": "Custom design",
        "pricing.p1.li3": "100% responsive",
        "pricing.p1.li4": "WhatsApp or form",
        "pricing.p1.cta": "I want my website",
        "pricing.p2.title": "Institutional",
        "pricing.p2.li1": "Up to 5 sections",
        "pricing.p2.li2": "Custom design",
        "pricing.p2.li3": "Basic SEO",
        "pricing.p2.li4": "Form + WhatsApp",
        "pricing.p2.cta": "I want my website",
        "pricing.p3.title": "Custom website",
        "pricing.p3.price": "Custom",
        "pricing.p3.note": "Quoted based on scope",
        "pricing.p3.li1": "Structure & design",
        "pricing.p3.li2": "Performance optimization",
        "pricing.p3.li3": "Integrations",
        "pricing.p3.li4": "Analytics & tracking",
        "pricing.p3.cta": "Book a call",

        "faq.kicker": "FAQ",
        "faq.title": "Frequently asked questions",
        "faq.subtitle": "Answers to common questions about timelines, content, and changes.",
        "faq.q1.q": "How long does it take to get the website ready?",
        "faq.q1.a": "It depends on scope. A landing page is usually ready in 7–10 days and an institutional site in 10–14 days.",
        "faq.q2.q": "Can I manage the website myself?",
        "faq.q2.a": "Yes. We leave everything ready so you can edit text and images without hassle.",
        "faq.q3.q": "Do I need to provide the content?",
        "faq.q3.a": "Ideally yes (base copy, photos, services). If you don’t have it, we help you organize and write it.",
        "faq.q4.q": "Does it include a mobile version?",
        "faq.q4.a": "Yes. We design mobile-first to ensure an excellent experience.",
        "faq.q5.q": "Can I request changes after delivery?",
        "faq.q5.a": "We include one round of post-delivery tweaks. Extra changes are quoted separately.",
        "faq.q6.q": "Are domain and hosting included?",
        "faq.q6.a": "We can manage them with you. Purchase and renewal depend on the provider you choose.",

        "cta.title": "Have a question? Let’s talk.",
        "cta.subtitle": "Book a free call and we’ll tell you what makes the most sense for your case.",
        "cta.btn1": "Free consultation",
        "cta.btn2": "Back to top",

        "footer.rights": "© All rights reserved",
        "footer.process": "Process",
        "footer.benefits": "Benefits",
        "footer.services": "Services",
        "footer.pricing": "Pricing",
        "footer.faqs": "FAQs",

        // Rotator
        "hero.word1": "BUILD",
        "hero.word2": "YOUR",
        "hero.word3": "SITE",
      },
    }),
    []
  );

  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_KEY) || "es");

  useEffect(() => {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") el.textContent = value;
    });

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, translations]);

  const toggleLang = () => setLang((cur) => (cur === "es" ? "en" : "es"));

  return { lang, toggleLang };
}