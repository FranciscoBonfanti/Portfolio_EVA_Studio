// src/components/BackgroundFx.jsx
import { useStarfieldCanvas } from "../hooks/useStarfieldCanvas";

export default function BackgroundFx() {
  useStarfieldCanvas();

  return (
    <div className="bg" aria-hidden="true">
      <canvas id="stars" />
      <div className="noise" />
    </div>
  );
}