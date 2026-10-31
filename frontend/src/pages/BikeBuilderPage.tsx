
import { Link, useSearchParams } from "react-router-dom";
import { bikeBuilds } from "../data/bikes";

export default function BikeBuilderPage() {
  const [searchParams] = useSearchParams();
  const buildId = searchParams.get("build");

  const selectedBuild = bikeBuilds.find(
    (bike) => bike.id === buildId
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
            Start with a frame or customize an existing build.
            Every detail is yours to decide.
          </p>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_360px]">
          {/* Bicycle preview */}
          <div className="flex min-h-[480px] items-center justify-center bg-neutral-200 p-8">
            {selectedBuild ? (
              <img
                src={selectedBuild.image}
                alt={`${selectedBuild.name} bicycle`}
                className="max-h-[560px] w-full object-contain"
              />
            ) : (
              <div className="text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  New build
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Your canvas is ready.
                </h2>

                <p className="mt-4 text-sm text-neutral-600">
                  Choose a frame to begin your build.
                </p>
              </div>
            )}
          </div>

          {/* Build details */}
          <aside className="flex flex-col justify-between gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Current setup
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                {selectedBuild?.name ?? "Untitled Build"}
              </h2>

              <p className="mt-4 leading-relaxed text-neutral-600">
                {selectedBuild?.description ??
                  "A new bicycle build, created entirely by you."}
              </p>

              <div className="mt-8 border-t border-neutral-300 pt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  Category
                </p>

                <p className="mt-2 font-medium">
                  {selectedBuild?.category ?? "Custom"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                disabled
                className="w-full bg-foreground px-6 py-4 text-sm font-medium text-white opacity-50"
              >
                Configure components — Coming soon
              </button>

              <Link
                to="/explore"
                className="block text-center text-sm font-medium underline underline-offset-4"
              >
                Explore other builds
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
