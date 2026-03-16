// src/App.jsx
import { useEffect, useState } from "react";

import BackgroundFx from "./components/BackgroundFx";
import CursorGlow from "./components/CursorGlow";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import ProcessShowcase from "./components/seccionProceso/ProcessShowcase";
import Carrusel from "./components/ProjectsCarousel";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import LoadingScreen from "./components/pantallaDeCarga/LoadingScreen";

import { useI18n } from "./hooks/useI18n";

export default function App() {
  const { lang, toggleLang } = useI18n();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <BackgroundFx />
      <CursorGlow />

      <Topbar />
      <Header lang={lang} onToggleLang={toggleLang} />

      <main>
        <Hero />
        <TechStrip />
        <ProcessShowcase />
        <Carrusel />
        <Benefits />
        <Services />
        <Pricing />
        <Faq />
        <Cta />
      </main>

      <Footer />
    </>
  );
}