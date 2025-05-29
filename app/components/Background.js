"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function VantaWavesBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.VANTA &&
      window.VANTA.WAVES &&
      window.THREE &&
      !vantaEffect
    ) {
      const effect = window.VANTA.WAVES({
        el: vantaRef.current,
        THREE: window.THREE, // ✅ Use the global THREE from the <script>
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x811,
        shininess: 27.0,
        waveHeight: 12.0,
        waveSpeed: 0.35,
        zoom: 0.84,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
        strategy="afterInteractive"
      />
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-0"
        id="vanta-bg"
      />
    </>
  );
}
