
export type WheelType = "classic" | "deep";

export type WheelColor = "black" | "silver" | "white";

interface WheelsProps {
  type: WheelType;
  color: WheelColor;
}

const wheelColors: Record<WheelColor, string> = {
  black: "#252525",
  silver: "#A5A5A5",
  white: "#F5F5F5",
};

export default function Wheels({ type, color }: WheelsProps) {
  const rimColor = wheelColors[color];

  const wheelPositions = [200, 600];

  return (
    <g>
      {wheelPositions.map((cx) => (
        <g key={cx}>
          {/* Tire */}
          <circle
            cx={cx}
            cy="360"
            r="120"
            fill="none"
            stroke="#252525"
            strokeWidth="9"
          />

          {/* Rim */}
          <circle
            cx={cx}
            cy="360"
            r={type === "deep" ? 105 : 114}
            fill="none"
            stroke={rimColor}
            strokeWidth={type === "deep" ? 22 : 7}
          />

          {/* Spokes */}
          {Array.from({ length: 12 }, (_, index) => {
            const angle = (index * Math.PI * 2) / 12;

            return (
              <line
                key={index}
                x1={cx}
                y1={360}
                x2={cx + Math.cos(angle) * 108}
                y2={360 + Math.sin(angle) * 108}
                stroke="#777777"
                strokeWidth="2"
              />
            );
          })}

          {/* Hub */}
          <circle
            cx={cx}
            cy="360"
            r="12"
            fill="#555555"
          />
        </g>
      ))}
    </g>
  );
}
