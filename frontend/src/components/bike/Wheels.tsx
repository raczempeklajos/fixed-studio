
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

const wheelPositions = [200, 600];
const wheelCenterY = 360;
const tireRadius = 120;

export default function Wheels({ type, color }: WheelsProps) {
  const rimColor = wheelColors[color];
  const isDeepRim = type === "deep";

  const rimOuterRadius = 113;
  const rimInnerRadius = isDeepRim ? 91 : 107;

  return (
    <g>
      {wheelPositions.map((cx) => (
        <g key={cx}>
          {/* Spokes */}
          {Array.from({ length: 24 }, (_, index) => {
            const angle = (index * Math.PI * 2) / 24;

            return (
              <line
                key={index}
                x1={cx}
                y1={wheelCenterY}
                x2={cx + Math.cos(angle) * rimInnerRadius}
                y2={wheelCenterY + Math.sin(angle) * rimInnerRadius}
                stroke="#777777"
                strokeWidth="1.4"
                opacity="0.75"
              />
            );
          })}

          {/* Rim */}
          <circle
            cx={cx}
            cy={wheelCenterY}
            r={(rimOuterRadius + rimInnerRadius) / 2}
            fill="none"
            stroke={rimColor}
            strokeWidth={rimOuterRadius - rimInnerRadius}
          />

          {/* Rim details */}
          <circle
            cx={cx}
            cy={wheelCenterY}
            r={rimInnerRadius}
            fill="none"
            stroke="#555555"
            strokeWidth="1.5"
          />

          {/* Tire */}
          <circle
            cx={cx}
            cy={wheelCenterY}
            r={tireRadius}
            fill="none"
            stroke="#202020"
            strokeWidth="10"
          />

          {/* Tire highlight */}
          <circle
            cx={cx}
            cy={wheelCenterY}
            r="116"
            fill="none"
            stroke="#555555"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Hub */}
          <circle
            cx={cx}
            cy={wheelCenterY}
            r="12"
            fill="#444444"
            stroke="#888888"
            strokeWidth="2"
          />

          <circle
            cx={cx}
            cy={wheelCenterY}
            r="4"
            fill="#B5B5B5"
          />
        </g>
      ))}
    </g>
  );
}
