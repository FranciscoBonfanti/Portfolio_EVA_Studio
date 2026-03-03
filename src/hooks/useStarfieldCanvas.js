// src/hooks/useStarfieldCanvas.js
import { useEffect } from "react";

export function useStarfieldCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("stars");
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0,
      h = 0,
      dpr = 1;
    let stars = [];
    let raf = null;

    // Ajustes (idénticos a tu script.js)
    const DENSITY = 0.00016;
    const UP_BIAS = 0.22;
    const DRIFT = 0.55;
    const SIZE_MIN = 0.25;
    const SIZE_MAX = 1.1;
    const SPEED_MIN = 0.1;
    const SPEED_MAX = 0.55;
    const TWINKLE = 0.1;

    const lerp = (a, b, t) => a + (b - a) * t;
    const rand = (min, max) => Math.random() * (max - min) + min;
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.floor(window.innerWidth);
      h = Math.floor(window.innerHeight);

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor(w * h * DENSITY);
      stars = new Array(count).fill(0).map(() => makeStar(true));
    }

    function makeStar(initial = false) {
      const z = Math.pow(Math.random(), 1.7);
      const r = lerp(SIZE_MAX, SIZE_MIN, z);
      const sp = lerp(SPEED_MAX, SPEED_MIN, z);

      let vx = rand(-1, 1);
      let vy = rand(-1, 1) - UP_BIAS;

      const len = Math.hypot(vx, vy) || 1;
      vx = (vx / len) * sp * (0.6 + DRIFT);
      vy = (vy / len) * sp * (0.8 + DRIFT);

      const life = Math.floor(rand(220, 520));
      const age = initial ? Math.floor(rand(0, life)) : 0;

      return {
        x: rand(0, w),
        y: rand(0, h),
        r,
        vx,
        vy,
        z,
        aBase: rand(0.25, 0.9),
        t: rand(0, Math.PI * 2),
        life,
        age,
      };
    }

    function lifeAlpha(age, life) {
      const p = clamp(age / life, 0, 1);
      return Math.sin(p * Math.PI);
    }

    function drawVignetteGlow() {
      const g = ctx.createRadialGradient(
        w * 0.5,
        h * 0.35,
        0,
        w * 0.5,
        h * 0.35,
        Math.max(w, h) * 0.8
      );
      g.addColorStop(0, "rgba(255,255,255,0.05)");
      g.addColorStop(0.45, "rgba(255,255,255,0.02)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    function wrap(s) {
      const pad = 40;
      if (s.x < -pad) s.x = w + pad;
      if (s.x > w + pad) s.x = -pad;
      if (s.y < -pad) s.y = h + pad;
      if (s.y > h + pad) s.y = -pad;
    }

    function resetStar(s) {
      const n = makeStar(false);
      s.x = rand(0, w);
      s.y = rand(0, h);
      s.r = n.r;
      s.vx = n.vx;
      s.vy = n.vy;
      s.z = n.z;
      s.aBase = n.aBase;
      s.t = n.t;
      s.life = n.life;
      s.age = 0;
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "#050508";
      ctx.fillRect(0, 0, w, h);

      drawVignetteGlow();

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!reduce) {
          s.x += s.vx;
          s.y += s.vy;
        }

        const tw = reduce ? 0 : Math.sin(s.t) * TWINKLE;
        s.t += 0.02 + (1 - s.z) * 0.01;
        s.age++;

        const alpha = clamp(s.aBase * lifeAlpha(s.age, s.life) + tw, 0, 1);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        wrap(s);

        if (s.age >= s.life) resetStar(s);
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Si reduce motion, dibujamos 1 frame y listo
    if (reduce) {
      tick();
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    } else {
      tick();
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}