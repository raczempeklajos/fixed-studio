
import type { FrameType } from "./Frame";

export type HandlebarType = "flat" | "riser" | "drop";

interface HandlebarsProps {
  type: HandlebarType;
  frameType: FrameType;
}

export default function Handlebars({
  type,
  frameType,
}: HandlebarsProps) {
  const offsetY = frameType === "aggressive" ? -42 : 0;

  return (
    <g transform={`translate(0 ${offsetY})`}>
      <g
        fill="none"
        stroke="#252525"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Stem */}
        <path d="M558 153 L585 132" />

        {/* Flat handlebar */}
        {type === "flat" && (
          <path d="M555 132 L615 132" />
        )}

        {/* Riser handlebar */}
        {type === "riser" && (
          <path d="M555 132 L570 115 L600 115 L615 132" />
        )}

        {/* Drop handlebar */}
        {type === "drop" && (
          <path d="M555 132 L605 132 Q625 132 625 155 Q625 180 605 180 L595 170" />
        )}
      </g>
    </g>
  );
}
