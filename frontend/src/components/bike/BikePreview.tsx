
import Saddle from "./Saddle";
import Drivetrain from "./Drivetrain";
import Handlebars, { type HandlebarType } from "./Handlebars";
import Wheels, {
  type WheelType,
  type WheelColor,
} from "./Wheels";
import Frame from "./Frame";
import Fork from "./Fork";

interface BikePreviewProps {
  frameColor: string;
  showWheels: boolean;
  showHandlebars: boolean;
  showSaddle: boolean;
  showDrivetrain: boolean;
  handlebarType: HandlebarType;
  wheelType: WheelType;
  wheelColor: WheelColor;
}

export default function BikePreview({
  frameColor,
  showWheels,
  showHandlebars,
  showSaddle,
  showDrivetrain,
  handlebarType,
  wheelType,
  wheelColor,
}: BikePreviewProps) {
  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full max-w-[900px]"
      role="img"
      aria-label="Custom bicycle preview"
    >
      {/* Wheels */}
      {showWheels && (
        <Wheels type={wheelType} color={wheelColor} />
      )}

      {/* Frame and fork */}
      <Frame color={frameColor} />
      <Fork color={frameColor} />

      {/* Optional components */}
      {showHandlebars && (
        <Handlebars type={handlebarType} />
      )}

      {showSaddle && <Saddle />}

      {showDrivetrain && <Drivetrain />}
    </svg>
  );
}
