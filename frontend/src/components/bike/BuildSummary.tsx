
import type { FrameType } from "./Frame";
import type { HandlebarType } from "./Handlebars";
import type { WheelType, WheelColor } from "./Wheels";

interface BuildSummaryProps {
  frameType: FrameType;
  frameColor: string;
  forkColor: string;
  wheelType: WheelType;
  wheelColor: WheelColor;
  handlebarType: HandlebarType;
  showWheels: boolean;
  showHandlebars: boolean;
  showSaddle: boolean;
  showDrivetrain: boolean;
}

export default function BuildSummary({
  frameType,
  frameColor,
  forkColor,
  wheelType,
  wheelColor,
  handlebarType,
  showWheels,
  showHandlebars,
  showSaddle,
  showDrivetrain,
}: BuildSummaryProps) {
  const formatLabel = (value: string) =>
    value
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (letter) => letter.toUpperCase());

  const specifications = [
    {
      label: "Frame",
      value: `${formatLabel(frameType)} Track`,
    },
    {
      label: "Frame color",
      value: frameColor,
    },
    {
      label: "Fork color",
      value: forkColor,
    },
    {
      label: "Wheelset",
      value: showWheels
        ? `${formatLabel(wheelType)} Rim`
        : "Not selected",
    },
    {
      label: "Rim color",
      value: showWheels
        ? formatLabel(wheelColor)
        : "Not selected",
    },
    {
      label: "Handlebars",
      value: showHandlebars
        ? formatLabel(handlebarType)
        : "Not selected",
    },
    {
      label: "Saddle",
      value: showSaddle ? "Installed" : "Not selected",
    },
    {
      label: "Drivetrain",
      value: showDrivetrain ? "Installed" : "Not selected",
    },
  ];

  return (
    <section className="border-t border-neutral-300 pt-8">
      <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
        Your configuration
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
        Build summary
      </h3>

      <dl className="mt-6">
        {specifications.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4 border-b border-neutral-200 py-4"
          >
            <dt className="text-sm text-neutral-500">
              {item.label}
            </dt>

            <dd className="text-right text-sm font-medium">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
