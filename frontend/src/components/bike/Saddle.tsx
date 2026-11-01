
import type { FrameType } from "./Frame";

interface SaddleProps {
  frameType: FrameType;
}

export default function Saddle({ frameType }: SaddleProps) {
  const offsetY = frameType === "aggressive" ? 20 : 0;

  return (
    <g transform={`translate(0 ${offsetY})`}>
      {/* Seatpost */}
      <line
        x1="345"
        y1="160"
        x2="338"
        y2="120"
        stroke="#444444"
        strokeWidth="10"
      />

      {/* Saddle */}
      <path
        d="M298 112 Q335 104 374 112 Q360 125 320 122 Z"
        fill="#252525"
      />
    </g>
  );
}
