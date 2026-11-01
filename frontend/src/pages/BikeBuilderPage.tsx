import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { bikeBuilds } from "../data/bikes";
import BikePreview from "../components/bike/BikePreview";
import type { HandlebarType } from "../components/bike/Handlebars";
import type { WheelType, WheelColor } from "../components/bike/Wheels";
import type { FrameType } from "../components/bike/Frame";
import BuildSummary from "../components/bike/BuildSummary";

type FrameColor = { name: string; hex: string };
type BuilderSection = "frame" | "wheels" | "handlebars" | "saddle" | "drivetrain" | "summary";

const frameColors: FrameColor[] = [
  { name: "Matte Black", hex: "#252525" },
  { name: "Burnt Orange", hex: "#D65B40" },
  { name: "Silver", hex: "#A5A5A5" },
];

const sections: { id: BuilderSection; label: string; number: string }[] = [
  { id: "frame", label: "Frame", number: "01" },
  { id: "wheels", label: "Wheels", number: "02" },
  { id: "handlebars", label: "Handlebars", number: "03" },
  { id: "saddle", label: "Saddle", number: "04" },
  { id: "drivetrain", label: "Drivetrain", number: "05" },
  { id: "summary", label: "Summary", number: "06" },
];

export default function BikeBuilderPage() {
  const [searchParams] = useSearchParams();
  const selectedBuild = bikeBuilds.find((bike) => bike.id === searchParams.get("build"));

  const [activeSection, setActiveSection] = useState<BuilderSection>("frame");
  const [selectedColor, setSelectedColor] = useState<FrameColor>(frameColors[0]);
  const [forkColor, setForkColor] = useState<FrameColor>(frameColors[0]);
  const [frameType, setFrameType] = useState<FrameType>("classic");
  const [wheelType, setWheelType] = useState<WheelType>("classic");
  const [wheelColor, setWheelColor] = useState<WheelColor>("black");
  const [handlebarType, setHandlebarType] = useState<HandlebarType>("flat");
  const [showWheels, setShowWheels] = useState(true);
  const [showHandlebars, setShowHandlebars] = useState(false);
  const [showSaddle, setShowSaddle] = useState(false);
  const [showDrivetrain, setShowDrivetrain] = useState(false);

  const optionClass = (selected: boolean) =>
    `border px-4 py-3 text-sm font-medium transition-colors ${
      selected
        ? "border-foreground bg-foreground text-white"
        : "border-neutral-300 hover:border-foreground"
    }`;

  const colorButtonClass = (selected: boolean) =>
    `h-12 w-12 rounded-full border-4 transition-transform hover:scale-110 ${
      selected ? "border-neutral-900" : "border-neutral-300"
    }`;

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-[1600px] px-6 py-8 md:px-12 lg:px-16">
        <header className="border-b border-neutral-300 pb-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            Fixed Studio / Builder
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-[-0.065em]">
            BUILD YOUR BIKE.
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Choose your frame. Define your style. Build something entirely your own.
          </p>
        </header>

        <div className="grid items-start gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_400px]">
          {/* Sticky live preview on desktop */}
          <div className="flex min-h-[280px] items-center justify-center bg-neutral-200 p-4 sm:min-h-[400px] lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:p-6">
            <BikePreview
              frameColor={selectedColor.hex}
              forkColor={forkColor.hex}
              frameType={frameType}
              showWheels={showWheels}
              showHandlebars={showHandlebars}
              showSaddle={showSaddle}
              showDrivetrain={showDrivetrain}
              handlebarType={handlebarType}
              wheelType={wheelType}
              wheelColor={wheelColor}
            />
          </div>

          <aside className="min-w-0">
            <div className="border-b border-neutral-300 pb-5">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Current setup
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                {selectedBuild?.name ?? "Untitled Build"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {selectedBuild?.description ?? "A new bicycle build, created entirely by you."}
              </p>
            </div>

            {/* Quick-access category navigation */}
            <nav className="mt-5 grid grid-cols-3 gap-2" aria-label="Builder categories">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSection(section.id)}
                  aria-pressed={activeSection === section.id}
                  className={`min-w-0 border px-2 py-3 text-center transition-colors ${
                    activeSection === section.id
                      ? "border-foreground bg-foreground text-white"
                      : "border-neutral-300 hover:border-foreground"
                  }`}
                >
                  <span className="block font-mono text-[10px] opacity-70">{section.number}</span>
                  <span className="mt-1 block text-[11px] font-medium sm:text-xs">{section.label}</span>
                </button>
              ))}
            </nav>

            {/* Only the active category is visible */}
            <div className="mt-7 border-t border-neutral-300 pt-6">
              {activeSection === "frame" && (
                <section aria-label="Frame configuration" className="space-y-8">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">01 / Frame</p>
                    <h3 className="mt-4 text-xl font-semibold">Frame color</h3>
                    <p className="mt-2 text-sm text-neutral-600">{selectedColor.name}</p>
                    <div className="mt-4 flex gap-4">
                      {frameColors.map((color) => (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          aria-label={`Select ${color.name} frame`}
                          aria-pressed={selectedColor.name === color.name}
                          className={colorButtonClass(selectedColor.name === color.name)}
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">Frame geometry</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {(["classic", "aggressive"] as FrameType[]).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFrameType(type)}
                          aria-pressed={frameType === type}
                          className={optionClass(frameType === type)}
                        >
                          {type === "classic" ? "Classic Track" : "Aggressive Track"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">Fork color</p>
                    <p className="mt-2 text-sm text-neutral-600">{forkColor.name}</p>
                    <div className="mt-4 flex gap-4">
                      {frameColors.map((color) => (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => setForkColor(color)}
                          aria-label={`Select ${color.name} fork`}
                          aria-pressed={forkColor.name === color.name}
                          className={colorButtonClass(forkColor.name === color.name)}
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "wheels" && (
                <section aria-label="Wheel configuration">
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">02 / Wheels</p>
                  <h3 className="mt-4 text-xl font-semibold">Wheelset</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {showWheels ? "Configure your wheelset." : "No wheels selected"}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {(["classic", "deep"] as WheelType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => { setWheelType(type); setShowWheels(true); }}
                        aria-pressed={showWheels && wheelType === type}
                        className={optionClass(showWheels && wheelType === type)}
                      >
                        {type === "classic" ? "Classic Rim" : "Deep Rim"}
                      </button>
                    ))}
                  </div>
                  <p className="mt-7 font-mono text-xs uppercase tracking-wider text-neutral-500">Rim color</p>
                  <div className="mt-4 flex gap-3">
                    {(["black", "silver", "white"] as WheelColor[]).map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => { setWheelColor(color); setShowWheels(true); }}
                        aria-label={`Select ${color} rims`}
                        aria-pressed={showWheels && wheelColor === color}
                        className={colorButtonClass(showWheels && wheelColor === color)}
                        style={{ backgroundColor: color === "black" ? "#252525" : color === "silver" ? "#A5A5A5" : "#F5F5F5" }}
                      />
                    ))}
                  </div>
                  {showWheels && (
                    <button type="button" onClick={() => setShowWheels(false)} className="mt-6 text-sm text-neutral-500 underline underline-offset-4 hover:text-foreground">
                      Remove wheels
                    </button>
                  )}
                </section>
              )}

              {activeSection === "handlebars" && (
                <section aria-label="Handlebar configuration">
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">03 / Handlebars</p>
                  <h3 className="mt-4 text-xl font-semibold">Handlebar type</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {showHandlebars ? "Choose your preferred handlebar." : "No handlebars selected"}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {(["flat", "riser", "drop"] as HandlebarType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => { setHandlebarType(type); setShowHandlebars(true); }}
                        aria-pressed={showHandlebars && handlebarType === type}
                        className={`${optionClass(showHandlebars && handlebarType === type)} capitalize`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  {showHandlebars && (
                    <button type="button" onClick={() => setShowHandlebars(false)} className="mt-5 text-sm text-neutral-500 underline underline-offset-4 hover:text-foreground">
                      Remove handlebars
                    </button>
                  )}
                </section>
              )}

              {activeSection === "saddle" && (
                <section aria-label="Saddle configuration">
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">04 / Saddle</p>
                  <h3 className="mt-4 text-xl font-semibold">Standard saddle</h3>
                  <p className="mt-2 text-sm text-neutral-600">{showSaddle ? "Saddle installed" : "No saddle selected"}</p>
                  <button type="button" onClick={() => setShowSaddle((previous) => !previous)} className="mt-6 border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white">
                    {showSaddle ? "Remove saddle" : "Add saddle"}
                  </button>
                </section>
              )}

              {activeSection === "drivetrain" && (
                <section aria-label="Drivetrain configuration">
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">05 / Drivetrain</p>
                  <h3 className="mt-4 text-xl font-semibold">Single-speed drivetrain</h3>
                  <p className="mt-2 text-sm text-neutral-600">{showDrivetrain ? "Drivetrain installed" : "No drivetrain selected"}</p>
                  <button type="button" onClick={() => setShowDrivetrain((previous) => !previous)} className="mt-6 border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white">
                    {showDrivetrain ? "Remove drivetrain" : "Add drivetrain"}
                  </button>
                </section>
              )}

              {activeSection === "summary" && (
                <BuildSummary
                  frameType={frameType}
                  frameColor={selectedColor.name}
                  forkColor={forkColor.name}
                  wheelType={wheelType}
                  wheelColor={wheelColor}
                  handlebarType={handlebarType}
                  showWheels={showWheels}
                  showHandlebars={showHandlebars}
                  showSaddle={showSaddle}
                  showDrivetrain={showDrivetrain}
                />
              )}
            </div>

            <Link to="/explore" className="mt-8 inline-block border-b border-foreground pb-1 text-sm font-medium hover:text-accent">
              Explore other builds
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
