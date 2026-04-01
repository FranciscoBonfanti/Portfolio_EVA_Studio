import { useState } from "react";
import "./ToolsSection.css";

import blenderImg from "../../assets/Adobe.png";
// import afterEffectsImg from "../assets/tools/after-effects.png";
// import photoshopImg from "../assets/tools/photoshop.png";
// import davinciImg from "../assets/tools/davinci.png";

const tools = [
  {
    id: 1,
    name: "Blender",
    image: blenderImg,
    description:
      "Dynamic motion graphics, cinematic visual effects and polished 3D assets for modern creative work.",
  },
  {
    id: 2,
    name: "After Effects",
    image: blenderImg,
    description:
      "Precision-crafted motion design and animated visual effects for professional creative projects.",
  },
  {
    id: 3,
    name: "Photoshop",
    image: blenderImg,
    description:
      "Professional image editing and visual composition for high-quality digital content.",
  },
  {
    id: 4,
    name: "DaVinci Resolve",
    image: blenderImg,
    description:
      "Professional video editing and vibrant color grading for high-quality storytelling.",
  },
];

export default function ToolsSection() {
  const [active, setActive] = useState(1);

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + tools.length) % tools.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % tools.length);
  };

  const getVisibleTools = () => {
    const prev = (active - 1 + tools.length) % tools.length;
    const next = (active + 1) % tools.length;

    return [
      { ...tools[prev], position: "left" },
      { ...tools[active], position: "center" },
      { ...tools[next], position: "right" },
    ];
  };

  const visibleTools = getVisibleTools();

  return (
    <section className="tools-wrap">
      <div className="tools-card">
        <div className="tools-top">
          {visibleTools.map((tool) => (
            <div
              key={tool.id}
              className={`tool-box tool-${tool.position}`}
              aria-hidden="true"
            >
              <img src={tool.image} alt={tool.name} className="tool-image" />
            </div>
          ))}
        </div>

        <div className="tools-content">
          <h2>Content Crafting Tools</h2>
          <p>{tools[active].description}</p>

          <div className="tools-bottom">
            <button className="nav-btn" onClick={prevSlide}>
              Previous
            </button>

            <div className="dots">
              {tools.map((item, index) => (
                <span
                  key={item.id}
                  className={`dot ${index === active ? "active" : ""}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>

            <button className="nav-btn primary" onClick={nextSlide}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}7