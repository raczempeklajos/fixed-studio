import Saddle from "./Saddle";
import Drivetrain from "./Drivetrain";
import Handlebars, { type HandlebarType } from "./Handlebars";

interface BikePreviewProps {
  frameColor: string;
  showWheels: boolean;
  showHandlebars: boolean;
  showSaddle: boolean;
  showDrivetrain: boolean;
  handlebarType: HandlebarType;
}

export default function BikePreview({
  frameColor,
  showWheels,
  showHandlebars,
  showSaddle,
  showDrivetrain,
  handlebarType,
}: BikePreviewProps) {
  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full max-w-[900px]"
      role="img"
      aria-label="Custom bicycle preview"
    >
      {/* Bicycle wheels */}
      {showWheels && (
        <g>
          <circle
            cx="200"
            cy="360"
            r="120"
            fill="none"
            stroke="#252525"
            strokeWidth="9"
          />

          <circle
            cx="600"
            cy="360"
            r="120"
            fill="none"
            stroke="#252525"
            strokeWidth="9"
          />

          {/* Wheel hubs */}
          <circle cx="200" cy="360" r="12" fill="#555555" />
          <circle cx="600" cy="360" r="12" fill="#555555" />
        </g>
      )}

      {/* Bicycle frame */}
      <g
        fill="none"
        stroke={frameColor}
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M200 360 L345 160 L470 360 Z" />
        <path d="M345 160 L555 165 L470 360" />
      </g>

      {/* Head tube */}
      <line
        x1="555"
        y1="150"
        x2="575"
        y2="205"
        stroke={frameColor}
        strokeWidth="22"
        strokeLinecap="round"
      />

      {/* Fork */}
      <line
        x1="575"
        y1="205"
        x2="600"
        y2="360"
        stroke="#444444"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Bottom bracket */}
      <circle cx="470" cy="360" r="17" fill="#252525" />

      {/* Rear dropout */}
      <circle cx="200" cy="360" r="10" fill="#252525" />

      {/* Seat tube opening */}
      <line
        x1="337"
        y1="149"
        x2="354"
        y2="149"
        stroke="#252525"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Optional components */}
      {showHandlebars && <Handlebars type={handlebarType} />}
      {showSaddle && <Saddle />}
      {showDrivetrain && <Drivetrain />}
    </svg>
  );
}
