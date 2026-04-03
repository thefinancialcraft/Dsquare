'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { loadSlim } from "@tsparticles/slim";
import type { Engine, RecursivePartial, IOptions } from "@tsparticles/engine";

// Dynamically import Particles to avoid SSR issues
import dynamic from 'next/dynamic';
const Particles = dynamic(() => import('@tsparticles/react'), { ssr: false });
const { initParticlesEngine } = require("@tsparticles/react");

const GlobalParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions: RecursivePartial<IOptions> = useMemo(() => ({
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { 
          enable: true, 
          mode: "grab",
        },
        resize: { enable: true },
      },
      modes: {
        grab: {
          distance: 220,
          links: {
            opacity: 0.6,
          }
        },
      },
    },
    particles: {
      color: { value: ["#ffffff", "#0066FF"] },
      links: {
        color: "#0066FF",
        distance: 140,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true, 
        speed: 0.7,
        straight: false,
      },
      number: {
        density: { enable: true, area: 1000 },
        value: 120, 
      },
      opacity: {
        value: { min: 0.15, max: 0.5 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 1.8 },
      },
    },
    detectRetina: true,
    fullScreen: { 
      enable: false,
    },
  }), []);

  if (!init) return null;

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      <Particles
        id="global-background-particles"
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default React.memo(GlobalParticles);
