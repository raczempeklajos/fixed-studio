
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { bikeBuilds } from "../data/bikes";
import BikePreview from "../components/bike/BikePreview";

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

  const [showWheels, setShowWheels] = useState(true);
  const [showHandlebars, setShowHandlebars] = useState(false);
  const [showSaddle, setShowSaddle] = useState(false);

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
                {showWheels
                  ? "Standard wheelset"
                  : "No wheels selected"}
              </p>

              <button
                type="button"
                onClick={() => setShowWheels((previous) => !previous)}
                className="mt-6 border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white"
              >
                {showWheels ? "Remove wheels" : "Add wheels"}
              </button>
            </div>

            {/* Handlebar configuration */}
            <div className="border-t border-neutral-300 pt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                03 / Handlebars
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Flat handlebar
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                {showHandlebars
                  ? "Handlebars installed"
                  : "No handlebars selected"}
              </p>

              <button
                type="button"
                onClick={() =>
                  setShowHandlebars((previous) => !previous)
                }
                className="mt-6 border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white"
              >
                {showHandlebars
                  ? "Remove handlebars"
                  : "Add handlebars"}
              </button>
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

            {/* Upcoming components */}
            <div className="border-t border-neutral-300 pt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                Next components
              </p>

              <p className="mt-5 text-sm text-neutral-500">
                05 / Drivetrain
              </p>
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
