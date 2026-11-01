
export type FrameType = "classic" | "aggressive";

interface FrameProps {
  color: string;
  type: FrameType;
}

export default function Frame({ color, type }: FrameProps) {
  const isAggressive = type === "aggressive";

  const seatTubeTopY = isAggressive ? 180 : 160;
  const headTubeTopY = isAggressive ? 140 : 165;

  return (
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Chain stays */}
      <path
        d="M200 360 L470 360"
        stroke={color}
        strokeWidth="11"
      />

      {/* Seat stays */}
      <path
        d={`M200 360 L345 ${seatTubeTopY}`}
        stroke={color}
        strokeWidth="11"
      />

      {/* Seat tube */}
      <path
        d={`M345 ${seatTubeTopY} L470 360`}
        stroke={color}
        strokeWidth="15"
      />

      {/* Top tube */}
      <path
        d={`M345 ${seatTubeTopY} L555 ${headTubeTopY}`}
        stroke={color}
        strokeWidth="15"
      />

      {/* Down tube */}
      <path
        d={`M555 ${headTubeTopY} L470 360`}
        stroke={color}
        strokeWidth="17"
      />

      {/* Head tube */}
      <path
        d={`M550 ${headTubeTopY - 17} L575 205`}
        stroke={color}
        strokeWidth="22"
      />

      {/* Bottom bracket */}
      <circle
        cx="470"
        cy="360"
        r="17"
        fill="#252525"
      />

      {/* Rear dropout */}
      <circle
        cx="200"
        cy="360"
        r="10"
        fill="#252525"
      />
    </g>
  );
}
