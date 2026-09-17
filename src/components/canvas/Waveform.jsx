import { useEffect, useRef } from "react";

// Layered sine waves with drifting phase — a signal, not a scene.
// Plain 2D canvas: no WebGL cost on top of the star field.
const LAYERS = [
  { amp: 0.15, freq: 1.6, speed: 0.18, width: 2.0, color: "145, 94, 255", alpha: 0.9 },
  { amp: 0.11, freq: 2.7, speed: -0.13, width: 1.5, color: "145, 94, 255", alpha: 0.45 },
  { amp: 0.07, freq: 4.3, speed: 0.24, width: 1.2, color: "223, 217, 255", alpha: 0.3 },
  { amp: 0.05, freq: 7.1, speed: -0.31, width: 1.0, color: "223, 217, 255", alpha: 0.18 },
];

const WaveformCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let frame;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      const t = time / 1000;
      const mid = height / 2;
      ctx.clearRect(0, 0, width, height);

      LAYERS.forEach((layer) => {
        ctx.beginPath();
        ctx.lineWidth = layer.width;
        ctx.strokeStyle = `rgba(${layer.color}, ${layer.alpha})`;

        for (let x = 0; x <= width; x += 2) {
          const u = x / width;
          // Taper the ends so the wave fades in and out instead of being cut off.
          const envelope = Math.sin(Math.PI * u) ** 1.5;
          const phase = u * layer.freq * Math.PI * 2 + t * layer.speed * Math.PI;
          const y = mid + Math.sin(phase) * layer.amp * height * envelope;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      });
    };

    resize();
    draw(0);

    if (!reduceMotion) {
      const loop = (time) => {
        draw(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='absolute inset-x-0 bottom-0 w-full h-[45vh] sm:h-[55vh]'
    />
  );
};

export default WaveformCanvas;
