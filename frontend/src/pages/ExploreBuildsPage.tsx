
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  bikeBuilds,
  type BikeCategory,
} from "../data/bikes";

type FilterCategory = "All" | BikeCategory;

const filters: FilterCategory[] = [
  "All",
  "Urban",
  "Track",
  "Creative",
];

export default function ExploreBuildsPage() {
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("All");

  const filteredBuilds = bikeBuilds.filter(
    (bike) =>
      activeFilter === "All" ||
      bike.category === activeFilter
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            The collection / 001
          </p>

          <h1 className="mt-8 text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] font-semibold tracking-[-0.075em]">
            EXPLORE
            <br />
            BUILDS.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
            Different approaches to the same idea.
            Discover a starting point, then make it yours.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-16 flex flex-wrap gap-3 border-b border-neutral-300 pb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors ${
                activeFilter === filter
                  ? "bg-foreground text-white"
                  : "border border-neutral-300 text-neutral-600 hover:border-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bicycle collection */}
        <div className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {filteredBuilds.map((bike, index) => (
            <article key={bike.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <img
                  src={bike.image}
                  alt={`${bike.name} bicycle build`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute top-5 left-5 bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-wider">
                  {bike.category}
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-neutral-500">
                    BUILD {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                    {bike.name}
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
                    {bike.description}
                  </p>
                </div>
              </div>

              <Link
                to="/builder"
                className="mt-6 inline-block border-b border-foreground pb-1 text-sm font-medium hover:text-accent"
              >
                Customize this build
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
