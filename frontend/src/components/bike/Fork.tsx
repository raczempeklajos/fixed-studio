
interface ForkProps {
  color: string;
}

export default function Fork({ color }: ForkProps) {
  return (
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Fork steerer */}
      <path
        d="M575 205 L583 230"
        stroke={color}
        strokeWidth="14"
      />

      {/* Fork blade */}
      <path
        d="M583 230 Q590 290 600 360"
        stroke={color}
        strokeWidth="12"
      />

      {/* Front dropout */}
      <circle
        cx="600"
        cy="360"
        r="10"
        fill="#252525"
        stroke="none"
      />
    </g>
  );
}
