
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { bikeBuilds } from "../data/bikes";
import BikePreview from "../components/bike/BikePreview";
import type { HandlebarType } from "../components/bike/Handlebars";
import type {
    WheelType,
    WheelColor,
    } from "../components/bike/Wheels";
import type { FrameType } from "../components/bike/Frame";

type FrameColor = {
  name: string;
  hex: string;
};


const frameColors: FrameColor[] = [
  { name: "Matte Black", hex: "#252525" },
  { name: "Burnt Orange", hex: "#D65B40" },
  { name: "Silver", hex: "#A5A5A5" },
];

export default function BikeBuilderPage() {
  const [searchParams] = useSearchParams();
  const buildId = searchParams.get("build");

  const selectedBuild = bikeBuilds.find(
    (bike) => bike.id === buildId
  );

  const [selectedColor, setSelectedColor] = useState<FrameColor>(
    frameColors[0]
  );

  const [handlebarType, setHandlebarType] =
  useState<HandlebarType>("flat");

  const [showWheels, setShowWheels] = useState(true);
  const [showHandlebars, setShowHandlebars] = useState(false);
  const [showSaddle, setShowSaddle] = useState(false);
  const [showDrivetrain, setShowDrivetrain] = useState(false);
  const [wheelType, setWheelType] = useState<WheelType>("classic");
  const [wheelColor, setWheelColor] = useState<WheelColor>("black");
  const [frameType, setFrameType] = useState<FrameType>("classic");
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 lg:px-16">
        {/* Page heading */}
        <div className="border-b border-neutral-300 pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            Fixed Studio / Builder
          </p>

          <h1 className="mt-6 text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
            BUILD YOUR BIKE.
          </h1>

          <p className="mt-5 max-w-xl text-neutral-600">
            Choose your frame. Define your style.
            Build something entirely your own.
          </p>
        </div>

        {/* Builder layout */}
        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_360px]">
          {/* Interactive bicycle preview */}
          <div className="flex min-h-[480px] items-center justify-center bg-neutral-200 p-6">
            
            <BikePreview
            frameColor={selectedColor.hex}
            showWheels={showWheels}
            showHandlebars={showHandlebars}
            showSaddle={showSaddle}
            showDrivetrain={showDrivetrain}
            handlebarType={handlebarType}
            wheelType={wheelType}
            wheelColor={wheelColor}
            frameType={frameType}
            />

          </div>

          {/* Configuration panel */}
          <aside className="flex flex-col gap-10">
            {/* Current build */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Current setup
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                {selectedBuild?.name ?? "Untitled Build"}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {selectedBuild?.description ??
                  "A new bicycle build, created entirely by you."}
              </p>
            </div>

            {/* Frame configuration */}
            <div className="border-t border-neutral-300 pt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                01 / Frame
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Frame color
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                {selectedColor.name}
              </p>

              <div className="mt-6 flex gap-4">
                {frameColors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color.name}`}
                    aria-pressed={selectedColor.name === color.name}
                    className={`h-12 w-12 rounded-full border-4 transition-transform hover:scale-110 ${
                      selectedColor.name === color.name
                        ? "border-neutral-900"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>

                <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                        Frame geometry
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                        {(["classic", "aggressive"] as FrameType[]).map((type) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => setFrameType(type)}
                            aria-pressed={frameType === type}
                            className={`border px-4 py-3 text-sm font-medium transition-colors ${
                            frameType === type
                                ? "border-foreground bg-foreground text-white"
                                : "border-neutral-300 hover:border-foreground"
                            }`}
                        >
                            {type === "classic" ? "Classic Track" : "Aggressive Track"}
                        </button>
                        ))}
                    </div>
                    </div>

            </div>

            
            {/* Wheel configuration */}
            <div className="border-t border-neutral-300 pt-6">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                02 / Wheels
            </p>

            <h3 className="mt-4 text-xl font-semibold">
                Wheelset
            </h3>

            <p className="mt-2 text-sm text-neutral-600">
                {showWheels ? "Configure your wheelset." : "No wheels selected"}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2">
                {(["classic", "deep"] as WheelType[]).map((type) => (
                <button
                    key={type}
                    type="button"
                    onClick={() => {
                    setWheelType(type);
                    setShowWheels(true);
                    }}
                    aria-pressed={showWheels && wheelType === type}
                    className={`border px-4 py-3 text-sm font-medium capitalize transition-colors ${
                    showWheels && wheelType === type
                        ? "border-foreground bg-foreground text-white"
                        : "border-neutral-300 hover:border-foreground"
                    }`}
                >
                    {type === "classic" ? "Classic Rim" : "Deep Rim"}
                </button>
                ))}
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-neutral-500">
                Rim color
            </p>

            <div className="mt-4 flex gap-3">
                {(["black", "silver", "white"] as WheelColor[]).map((color) => (
                <button
                    key={color}
                    type="button"
                    onClick={() => {
                    setWheelColor(color);
                    setShowWheels(true);
                    }}
                    aria-label={`Select ${color} rims`}
                    aria-pressed={showWheels && wheelColor === color}
                    className={`h-11 w-11 rounded-full border-4 transition-transform hover:scale-110 ${
                    showWheels && wheelColor === color
                        ? "border-neutral-900"
                        : "border-neutral-300"
                    }`}
                    style={{
                    backgroundColor:
                        color === "black"
                        ? "#252525"
                        : color === "silver"
                        ? "#A5A5A5"
                        : "#F5F5F5",
                    }}
                />
                ))}
            </div>

            {showWheels && (
                <button
                type="button"
                onClick={() => setShowWheels(false)}
                className="mt-5 text-sm text-neutral-500 underline underline-offset-4 hover:text-foreground"
                >
                Remove wheels
                </button>
            )}
            </div>


            
{/* Handlebar configuration */}
<div className="border-t border-neutral-300 pt-6">
  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
    03 / Handlebars
  </p>

  <h3 className="mt-4 text-xl font-semibold">
    Handlebar type
  </h3>

  <p className="mt-2 text-sm text-neutral-600">
    {showHandlebars
      ? "Choose your preferred handlebar."
      : "No handlebars selected"}
  </p>

        <div className="mt-6 grid grid-cols-3 gap-2">
            {(["flat", "riser", "drop"] as HandlebarType[]).map(
            (type) => (
                <button
                key={type}
                type="button"
                onClick={() => {
                    setHandlebarType(type);
                    setShowHandlebars(true);
                }}
                aria-pressed={
                    showHandlebars && handlebarType === type
                }
                className={`border px-3 py-3 text-xs font-medium capitalize transition-colors ${
                    showHandlebars && handlebarType === type
                    ? "border-foreground bg-foreground text-white"
                    : "border-neutral-300 hover:border-foreground"
                }`}
                >
                {type}
                </button>
            )
            )}
        </div>

        {showHandlebars && (
            <button
            type="button"
            onClick={() => setShowHandlebars(false)}
            className="mt-4 text-sm text-neutral-500 underline underline-offset-4 hover:text-foreground"
            >
            Remove handlebars
            </button>
        )}
        </div>


            {/* Saddle configuration */}
            <div className="border-t border-neutral-300 pt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                04 / Saddle
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Standard saddle
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                {showSaddle
                  ? "Saddle installed"
                  : "No saddle selected"}
              </p>

              <button
                type="button"
                onClick={() =>
                  setShowSaddle((previous) => !previous)
                }
                className="mt-6 border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white"
              >
                {showSaddle ? "Remove saddle" : "Add saddle"}
              </button>
            </div>
            
            {/* Drivetrain configuration */}
            <div className="border-t border-neutral-300 pt-6">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                05 / Drivetrain
            </p>

            <h3 className="mt-4 text-xl font-semibold">
                Single-speed drivetrain
            </h3>

            <p className="mt-2 text-sm text-neutral-600">
                {showDrivetrain
                ? "Drivetrain installed"
                : "No drivetrain selected"}
            </p>

            <button
                type="button"
                onClick={() =>
                setShowDrivetrain((previous) => !previous)
                }
                className="mt-6 border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white"
            >
                {showDrivetrain
                ? "Remove drivetrain"
                : "Add drivetrain"}
            </button>
            </div>


            {/* Navigation */}
            <Link
              to="/explore"
              className="self-start border-b border-foreground pb-1 text-sm font-medium hover:text-accent"
            >
              Explore other builds
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
