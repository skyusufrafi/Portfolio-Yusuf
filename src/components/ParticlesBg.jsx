import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition duration-300"
      init={init}
      options={{
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          move: { speed: 1 },
          links: { enable: true }
        }
      }}
    />
  );
}