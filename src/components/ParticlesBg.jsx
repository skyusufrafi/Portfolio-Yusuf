import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className="absolute -z-10"
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