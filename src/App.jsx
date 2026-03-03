// src/App.jsx
import BackgroundFx from "./components/BackgroundFx";
import CursorGlow from "./components/CursorGlow";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import ProjectsCarousel from "./components/ProjectsCarousel/ProjectsCarousel";
import Process from "./components/Process";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

import { useI18n } from "./hooks/useI18n";

export default function App() {
  const { lang, toggleLang } = useI18n();

  return (
    <>
      <BackgroundFx />
      <CursorGlow />

      <Topbar />
      <Header lang={lang} onToggleLang={toggleLang} />

      <main>
        <Hero />
        <TechStrip />
        <ProjectsCarousel />
        <Process />
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