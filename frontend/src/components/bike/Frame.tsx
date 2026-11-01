
interface FrameProps {
  color: string;
}

export default function Frame({ color }: FrameProps) {
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
        d="M200 360 L345 160"
        stroke={color}
        strokeWidth="11"
      />

      {/* Seat tube */}
      <path
        d="M345 160 L470 360"
        stroke={color}
        strokeWidth="15"
      />

      {/* Top tube */}
      <path
        d="M345 160 L555 165"
        stroke={color}
        strokeWidth="15"
      />

      {/* Down tube */}
      <path
        d="M555 165 L470 360"
        stroke={color}
        strokeWidth="17"
      />

      {/* Head tube */}
      <path
        d="M550 148 L575 205"
        stroke={color}
        strokeWidth="22"
      />

      {/* Bottom bracket */}
      <circle
        cx="470"
        cy="360"
        r="17"
        fill="#252525"
        stroke="none"
      />

      {/* Rear dropout */}
      <circle
        cx="200"
        cy="360"
        r="10"
        fill="#252525"
        stroke="none"
      />

      {/* Seat tube opening */}
      <path
        d="M337 149 L354 149"
        stroke="#252525"
        strokeWidth="7"
      />
    </g>
  );
}
