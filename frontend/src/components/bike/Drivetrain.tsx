
export default function Drivetrain() {
  return (
    <g>
      {/* Chain */}
      <path
        d="M200 345 L470 330 A30 30 0 0 1 470 390 L200 375 A15 15 0 0 1 200 345"
        fill="none"
        stroke="#777777"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Chainring */}
      <circle
        cx="470"
        cy="360"
        r="36"
        fill="none"
        stroke="#252525"
        strokeWidth="9"
      />

      {/* Crank arm */}
      <line
        x1="470"
        y1="360"
        x2="495"
        y2="415"
        stroke="#252525"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Pedal */}
      <rect
        x="480"
        y="410"
        width="36"
        height="12"
        rx="3"
        fill="#252525"
      />

      {/* Crank axle */}
      <circle
        cx="470"
        cy="360"
        r="10"
        fill="#777777"
      />
    </g>
  );
}
