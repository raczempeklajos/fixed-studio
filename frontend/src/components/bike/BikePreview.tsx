
import Saddle from "./Saddle";
import Drivetrain from "./Drivetrain";
import Handlebars, { type HandlebarType } from "./Handlebars";
import Wheels, {
  type WheelType,
  type WheelColor,
} from "./Wheels";
import Frame, { type FrameType } from "./Frame";
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
  frameType: FrameType;
  forkColor: string;
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
  frameType,
  forkColor,
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
      <Frame color={frameColor} type={frameType} />
      <Fork color={forkColor} />

      {showHandlebars && (
        <Handlebars
            type={handlebarType}
            frameType={frameType}
        />
        )}

      {showSaddle && <Saddle frameType={frameType} />}

      {showDrivetrain && <Drivetrain />}
    </svg>
  );
}
