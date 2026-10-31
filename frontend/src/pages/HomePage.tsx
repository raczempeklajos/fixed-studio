
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="bg-background">
      <section className="mx-auto grid min-h-[calc(100svh-88px)] max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        {/* Editorial content */}
        <div className="flex flex-col justify-between px-6 py-12 md:px-12 lg:px-16 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            Fixed gear / Single speed
          </p>

          <div className="py-20 lg:py-10">
            <h1 className="max-w-[700px] text-[clamp(4rem,8vw,8.5rem)] leading-[0.9] font-semibold tracking-[-0.075em]">
              BUILT
              <br />
              YOUR
              <br />
              WAY.
            </h1>

            <p className="mt-10 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
              A different way to build your bicycle.
              Explore real components, discover new combinations,
              and create something entirely your own.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/builder"
                className="inline-flex min-h-12 items-center justify-center bg-foreground px-7 text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Start from scratch
              </Link>

              <Link
                to="/explore"
                className="border-b border-foreground pb-1 text-sm font-medium transition-colors hover:text-accent"
              >
                Explore builds
              </Link>
            </div>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
            Real brands. Real components. Your build.
          </p>
        </div>

        {/* Hero photography */}
        <div className="relative min-h-[420px] overflow-hidden bg-[#19242b] lg:min-h-full">
          <img
            src="/images/hero-bike.jpg"
            alt="Silver Peugeot bicycle against a dark wall"
            className="absolute inset-0 h-full w-full object-contain"
          />

          <div className="absolute right-6 bottom-6 bg-background px-4 py-3 font-mono text-[10px] uppercase tracking-wider">
            Fixed Studio — 001
          </div>
        </div>
      </section>
    </main>
  );
}
