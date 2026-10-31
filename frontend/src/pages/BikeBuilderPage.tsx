
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { bikeBuilds } from "../data/bikes";

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

  const [selectedColor, setSelectedColor] = useState(
    frameColors[0]
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 lg:px-16">
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

        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_360px]">
          {/* Interactive frame preview */}
          <div className="flex min-h-[480px] items-center justify-center bg-neutral-200 p-6">
            <svg
              viewBox="0 0 800 500"
              className="w-full max-w-[900px]"
              role="img"
              aria-label={`${selectedColor.name} bicycle frame preview`}
            >
              {/* Frame tubes */}
              <g
                fill="none"
                stroke={selectedColor.hex}
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
                stroke={selectedColor.hex}
                strokeWidth="22"
                strokeLinecap="round"
              />

              {/* Bottom bracket */}
              <circle
                cx="470"
                cy="360"
                r="17"
                fill="#252525"
              />

              {/* Rear dropout */}
              <circle
                cx="200"
                cy="360"
                r="10"
                fill="#252525"
              />

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
            </svg>
          </div>

          {/* Configuration panel */}
          <aside className="flex flex-col gap-10">
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
                    aria-pressed={
                      selectedColor.name === color.name
                    }
                    className={`h-12 w-12 rounded-full border-4 transition-transform hover:scale-110 ${
                      selectedColor.name === color.name
                        ? "border-neutral-900"
                        : "border-transparent"
                    }`}
                    style={{
                      backgroundColor: color.hex,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Upcoming component categories */}
            <div className="border-t border-neutral-300 pt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                Next components
              </p>

              <div className="mt-5 space-y-4 text-sm text-neutral-500">
                <p>02 / Wheels</p>
                <p>03 / Handlebars</p>
                <p>04 / Saddle</p>
                <p>05 / Drivetrain</p>
              </div>
            </div>

            <Link
              to="/explore"
              className="border-b border-foreground pb-1 text-sm font-medium self-start"
            >
              Explore other builds
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
