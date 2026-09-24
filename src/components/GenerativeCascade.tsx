"use client";

import React, { useState, useEffect, useMemo, useSyncExternalStore } from "react";

// Deterministic pseudo-random number generator
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type ShapeType =
  | "EMPTY"
  | "SQUARE"
  | "TRIANGLE_TL"
  | "TRIANGLE_TR"
  | "TRIANGLE_BR"
  | "TRIANGLE_BL"
  | "ARC_TL"
  | "ARC_TR"
  | "ARC_BR"
  | "ARC_BL"
  | "HALF_CIRCLE_T"
  | "HALF_CIRCLE_B"
  | "HALF_CIRCLE_L"
  | "HALF_CIRCLE_R"
  | "DOT"
  | "DOT_SM";

const ALL_SHAPES: ShapeType[] = [
  "SQUARE",
  "TRIANGLE_TL",
  "TRIANGLE_TR",
  "TRIANGLE_BR",
  "TRIANGLE_BL",
  "ARC_TL",
  "ARC_TR",
  "ARC_BR",
  "ARC_BL",
  "HALF_CIRCLE_T",
  "HALF_CIRCLE_B",
  "HALF_CIRCLE_L",
  "HALF_CIRCLE_R",
  "DOT",
  "DOT_SM",
];

const DEFAULT_SEED = 40182;
let globalClientSeed: number | null = null;

function getClientSnapshot(propSeed?: number) {
  if (propSeed !== undefined) return propSeed;
  if (globalClientSeed === null) {
    globalClientSeed = Math.floor(Math.random() * 1000000);
  }
  return globalClientSeed;
}

function getServerSnapshot(propSeed?: number) {
  return propSeed ?? DEFAULT_SEED;
}

const emptySubscribe = () => () => {};

interface CellData {
  r: number;
  c: number;
  shape: ShapeType;
}

interface GenerativeCascadeProps {
  columns?: number;
  rows?: number;
  cellSize?: number;
  seed?: number;
  className?: string;
}

function renderShape(shape: ShapeType, size: number) {
  const s = size;
  const half = s / 2;

  switch (shape) {
    case "EMPTY":
      return null;

    case "SQUARE":
      return <rect x={0} y={0} width={s} height={s} fill="currentColor" />;

    case "TRIANGLE_TL":
      return <polygon points={`0,0 ${s},0 0,${s}`} fill="currentColor" />;

    case "TRIANGLE_TR":
      return <polygon points={`0,0 ${s},0 ${s},${s}`} fill="currentColor" />;

    case "TRIANGLE_BR":
      return <polygon points={`${s},0 ${s},${s} 0,${s}`} fill="currentColor" />;

    case "TRIANGLE_BL":
      return <polygon points={`0,0 ${s},${s} 0,${s}`} fill="currentColor" />;

    case "ARC_TL":
      return <path d={`M 0,0 L ${s},0 A ${s},${s} 0 0,1 0,${s} Z`} fill="currentColor" />;

    case "ARC_TR":
      return <path d={`M ${s},0 L ${s},${s} A ${s},${s} 0 0,1 0,0 Z`} fill="currentColor" />;

    case "ARC_BR":
      return <path d={`M ${s},${s} L 0,${s} A ${s},${s} 0 0,1 ${s},0 Z`} fill="currentColor" />;

    case "ARC_BL":
      return <path d={`M 0,${s} L 0,0 A ${s},${s} 0 0,1 ${s},${s} Z`} fill="currentColor" />;

    case "HALF_CIRCLE_T":
      return <path d={`M 0,${half} A ${half},${half} 0 0,1 ${s},${half} Z`} fill="currentColor" />;

    case "HALF_CIRCLE_B":
      return <path d={`M ${s},${half} A ${half},${half} 0 0,1 0,${half} Z`} fill="currentColor" />;

    case "HALF_CIRCLE_L":
      return <path d={`M ${half},0 A ${half},${half} 0 0,0 ${half},${s} Z`} fill="currentColor" />;

    case "HALF_CIRCLE_R":
      return <path d={`M ${half},0 A ${half},${half} 0 0,1 ${half},${s} Z`} fill="currentColor" />;

    case "DOT":
      return <circle cx={half} cy={half} r={s * 0.32} fill="currentColor" />;

    case "DOT_SM":
      return <circle cx={half} cy={half} r={s * 0.18} fill="currentColor" />;

    default:
      return null;
  }
}

interface CascadeCellProps {
  initialShape: ShapeType;
  r: number;
  c: number;
  cellSize: number;
}

function CascadeCell({ initialShape, r, c, cellSize }: CascadeCellProps) {
  const [currentShape, setCurrentShape] = useState<ShapeType>(initialShape);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setCurrentShape(initialShape);
  }, [initialShape]);

  if (initialShape === "EMPTY" && currentShape === "EMPTY") {
    return null;
  }

  const handleMouseEnter = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Pick a new random shape from available shapes
    const pool = ALL_SHAPES.filter((s) => s !== currentShape);
    const nextShape = pool[Math.floor(Math.random() * pool.length)];

    // Smooth 1.4s total fade cycle: fade out over 600ms, then fade back in over 800ms
    setTimeout(() => {
      setCurrentShape(nextShape);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <g
      transform={`translate(${c * cellSize}, ${r * cellSize})`}
      onMouseEnter={handleMouseEnter}
      className="cursor-pointer group"
    >
      {/* Invisible interactive hit boundary for smooth hovering */}
      <rect x={0} y={0} width={cellSize} height={cellSize} fill="transparent" />

      <g
        className="ease-in-out group-hover:opacity-90"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          transitionProperty: "opacity, transform",
          transitionDuration: isTransitioning ? "600ms" : "800ms",
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? "scale(0.5) rotate(20deg)" : "scale(1) rotate(0deg)",
        }}
      >
        {renderShape(currentShape, cellSize)}
      </g>
    </g>
  );
}

export default function GenerativeCascade({
  columns = 7,
  rows = 16,
  cellSize = 38,
  seed: propSeed,
  className = "",
}: GenerativeCascadeProps) {
  // Safe hydration seed: renders deterministic seed during SSR, then synchronizes on client
  const currentSeed = useSyncExternalStore(
    emptySubscribe,
    () => getClientSnapshot(propSeed),
    () => getServerSnapshot(propSeed)
  );

  // Generate grid of geometric elements
  const grid: CellData[] = useMemo(() => {
    const rng = mulberry32(currentSeed);
    const cells: CellData[] = [];

    const denseShapes: ShapeType[] = [
      "SQUARE",
      "SQUARE",
      "TRIANGLE_TL",
      "TRIANGLE_TR",
      "TRIANGLE_BR",
      "TRIANGLE_BL",
      "ARC_TL",
      "ARC_TR",
      "ARC_BR",
      "ARC_BL",
      "HALF_CIRCLE_T",
      "HALF_CIRCLE_B",
      "HALF_CIRCLE_L",
      "HALF_CIRCLE_R",
    ];

    const midShapes: ShapeType[] = [
      "SQUARE",
      "TRIANGLE_TL",
      "TRIANGLE_TR",
      "TRIANGLE_BR",
      "TRIANGLE_BL",
      "ARC_TL",
      "ARC_TR",
      "ARC_BR",
      "ARC_BL",
      "HALF_CIRCLE_T",
      "HALF_CIRCLE_B",
      "HALF_CIRCLE_L",
      "HALF_CIRCLE_R",
      "DOT",
    ];

    const sparseShapes: ShapeType[] = [
      "TRIANGLE_TL",
      "TRIANGLE_TR",
      "TRIANGLE_BR",
      "TRIANGLE_BL",
      "ARC_TL",
      "ARC_TR",
      "ARC_BR",
      "ARC_BL",
      "DOT",
      "DOT_SM",
    ];

    for (let r = 0; r < rows; r++) {
      const progress = r / (rows - 1);
      // High density at top (~95%), steep cascade falloff dispersing into negative space
      const density = Math.max(0, Math.pow(1 - progress, 2.0) * 0.98);

      for (let c = 0; c < columns; c++) {
        const roll = rng();

        if (roll > density) {
          cells.push({ r, c, shape: "EMPTY" });
          continue;
        }

        let pool = denseShapes;
        if (progress > 0.55) {
          pool = sparseShapes;
        } else if (progress > 0.25) {
          pool = midShapes;
        }

        const shapeIndex = Math.floor(rng() * pool.length);
        cells.push({
          r,
          c,
          shape: pool[shapeIndex],
        });
      }
    }

    return cells;
  }, [currentSeed, columns, rows]);

  const svgWidth = columns * cellSize;
  const svgHeight = rows * cellSize;

  return (
    <div className={`relative select-none text-foreground ${className}`}>
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full h-auto block"
        style={{ maxWidth: `${svgWidth}px` }}
        shapeRendering="geometricPrecision"
      >
        {grid.map((cell) => (
          <CascadeCell
            key={`${cell.r}-${cell.c}-${currentSeed}`}
            initialShape={cell.shape}
            r={cell.r}
            c={cell.c}
            cellSize={cellSize}
          />
        ))}
      </svg>
    </div>
  );
}
