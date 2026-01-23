"use client";

import { useEffect, useRef } from "react";

export default function AsciiPlant() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let A = 0;
    let B = 0;

    // === CONFIGURATION ===
    // [FORMULA] Speed of rotation
    const ROTATION_SPEED_A = 0.04; 
    const ROTATION_SPEED_B = 0.02;
    const ANIMATION_SPEED_MULTIPLIER = 0.1; // Adjust this to make it faster/slower

    // [FORMULA] Shape parameters
    const R = Math.random() * 4; // Major radius (Distance from center)
    const PETAL_COUNT = Math.random() * 10; // 'k' = number of petals
    const PETAL_SIZE = Math.random() * 5; // Modulation amplitude for petals
    // =====================

    const render = () => {
      const width = 80;
      const height = 60;
      const zBuffer = new Array(width * height).fill(0);
      const output = new Array(width * height).fill(" ");

      // Flower/Torus parameters
      // R = major radius, r = minor radius
      // We modulate r to create petals
      // const R = 2; // Distance from center
      
      // Precision for points
      const thetaSpacing = 0.07;
      const phiSpacing = 0.02;

      // k = number of petals
      const k = PETAL_COUNT; 

      for (let theta = 0; theta < 2 * Math.PI; theta += thetaSpacing) {
        // Modulate minor radius for petals
        // [FORMULA] r = 1 + PETAL_SIZE * sin(k * theta)
        const r = 1 + PETAL_SIZE * Math.sin(k * theta); 
        
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);

        for (let phi = 0; phi < 2 * Math.PI; phi += phiSpacing) {
          const cosPhi = Math.cos(phi);
          const sinPhi = Math.sin(phi);

          // 3D coordinates of the flower torus
          // x = (R + r*cos(phi)) * cos(theta) ... swapped phi/theta roles for standard donut logic usually
          // Let's stick to standard donut math but with modulated radius
          
          // Standard torus: circle of radius r centered at R rotated around Y axis
          // circle in x-z plane: (R + r*cos(theta), r*sin(theta))
          // rotated by phi around Y axis
          
          // Let's use the provided logic reference:
          // x = (R + r*cos(theta)) * cos(phi)
          // y = (R + r*cos(theta)) * sin(phi)
          // z = r*sin(theta)
          // But we want it to spin around X and Z (A and B)
          
          const circleX = R + r * cosTheta;
          const circleY = r * sinTheta;

          // Before rotation
          const x = circleX * cosPhi;
          const y = circleX * sinPhi;
          const z = circleY;

          // Rotation around X axis (A)
          // y' = y*cosA - z*sinA
          // z' = y*sinA + z*cosA
          const sinA = Math.sin(A);
          const cosA = Math.cos(A);
          const y2 = y * cosA - z * sinA;
          const z2 = y * sinA + z * cosA;

          // Rotation around Z axis (B) of the whole thing
          // x'' = x*cosB - y'*sinB
          // y'' = x*sinB + y'*cosB
          const sinB = Math.sin(B);
          const cosB = Math.cos(B);
          const x3 = x * cosB - y2 * sinB;
          const y3 = x * sinB + y2 * cosB;
          const z3 = z2;

          // Projection
          // ooz = one over z
          const K2 = 5; // Distance from viewer
          const K1 = width * K2 * 3 / (8 * (R + 1)); // Scale factor

          const ooz = 1 / (z3 + K2);
          
          // 2D Projection
          const xp = Math.floor(width / 2 + K1 * ooz * x3);
          const yp = Math.floor(height / 2 - K1 * ooz * y3);
          
          const L = 0.7 * (cosPhi * cosTheta * sinB - cosA * cosTheta * sinPhi - sinA * sinTheta + cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi));
          
          if (L > 0) {
            if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
              const idx = xp + yp * width;
              if (ooz > zBuffer[idx]) {
                zBuffer[idx] = ooz;
                const chars = ".,-~:;=!*#$@";
                const luminanceIndex = Math.floor(L * 8);
                output[idx] = chars[Math.max(0, Math.min(chars.length - 1, luminanceIndex))];
              }
            }
          }
        }
      }

      // Convert array to string
      let s = "";
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            s += output[j + i * width];
        }
        s += "\n";
      }

      if (preRef.current) {
        preRef.current.innerText = s;
      }

      A += ROTATION_SPEED_A * ANIMATION_SPEED_MULTIPLIER;
      B += ROTATION_SPEED_B * ANIMATION_SPEED_MULTIPLIER;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <pre 
        ref={preRef} 
        className="text-[5px] lg:text-[12px] leading-[5px] lg:leading-[12px] whitespace-pre font-mono text-gray-500 select-none overflow-hidden"
        style={{
          maskImage: "radial-gradient(circle, black 10%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 90%)",
        }}
    />
  );
}
