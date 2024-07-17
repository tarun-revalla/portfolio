"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from "next-themes";
import { cn } from "../../lib/utils";

function BgColor() {
  const root = document.documentElement;
  const lightBgColor = getComputedStyle(root).getPropertyValue("--bg-color");
  return lightBgColor;
}

function getHeight() {
  return document.getElementById("homepage").clientHeight;
}

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  waveWidth = 50,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const [isSafari, setIsSafari] = useState(false);

  const noise = useMemo(() => createNoise3D(), []);

  const getSpeed = useCallback(() => {
    return speed === "slow" ? 0.001 : 0.002;
  }, [speed]);

  const drawWave = useCallback(
    (ctx, w, h, nt) => {
      const n = 5;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = colors[i % colors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [colors, noise, waveWidth]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let nt = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = getHeight();
      ctx.filter = `blur(${blur}px)`;
    };

    const render = () => {
      const { width: w, height: h } = canvas;
      ctx.fillStyle = BgColor();
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(ctx, w, h, nt);
      nt += getSpeed();
      animationId = requestAnimationFrame(render);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    render();

    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [blur, drawWave, getSpeed, waveOpacity, theme]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default React.memo(WavyBackground);
