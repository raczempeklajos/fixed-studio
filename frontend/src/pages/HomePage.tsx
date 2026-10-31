
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.3em]">
          Fixed Studio / Bicycle Configurator
        </p>

        <h1 className="max-w-4xl text-6xl font-semibold tracking-tight md:text-8xl">
          BUILD YOUR OWN RIDE.
        </h1>

        <p className="mt-8 max-w-lg text-lg text-neutral-600">
          Design your own fixed gear or single-speed bicycle
          using real components from real brands.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/builder"
            className="bg-black px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            START FROM SCRATCH
          </Link>

          <Link
            to="/explore"
            className="border border-black px-7 py-4 text-sm font-medium transition-colors hover:bg-black hover:text-white"
          >
            EXPLORE BUILDS
          </Link>
        </div>
      </div>
    </main>
  );
}
