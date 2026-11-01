
import { useEffect, useRef, useState } from "react";
import type {
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
} from "react";
import { Link } from "react-router-dom";

const pages = ["Introduction", "Explore", "Build"];

const SWIPE_THRESHOLD = 55;
const WHEEL_THRESHOLD = 45;
const SWIPE_COOLDOWN = 850;

export default function HomePage() {
  const [activePage, setActivePage] = useState(0);

  const pointerStart = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const wheelDistance = useRef(0);
  const lastSwipeTime = useRef(0);

  const changePage = (direction: number) => {
    setActivePage((previous) =>
      Math.max(
        0,
        Math.min(previous + direction, pages.length - 1)
      )
    );
  };

  const nextPage = () => changePage(1);
  const previousPage = () => changePage(-1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextPage();
      }

      if (event.key === "ArrowLeft") {
        previousPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Trackpad navigation
  const handleWheel = (
    event: ReactWheelEvent<HTMLDivElement>
  ) => {
    const now = Date.now();

    if (now - lastSwipeTime.current < SWIPE_COOLDOWN) {
      return;
    }

    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
      wheelDistance.current = 0;
      return;
    }

    wheelDistance.current += event.deltaX;

    if (Math.abs(wheelDistance.current) < WHEEL_THRESHOLD) {
      return;
    }

    changePage(wheelDistance.current > 0 ? 1 : -1);

    wheelDistance.current = 0;
    lastSwipeTime.current = now;
  };

  // Mouse drag and touch navigation
  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    if (
      event.target instanceof Element &&
      event.target.closest("a, button, input, textarea")
    ) {
      return;
    }

    pointerStart.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const handlePointerUp = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (!pointerStart.current) return;

    const differenceX =
      pointerStart.current.x - event.clientX;

    const differenceY =
      pointerStart.current.y - event.clientY;

    if (
      Math.abs(differenceX) > SWIPE_THRESHOLD &&
      Math.abs(differenceX) > Math.abs(differenceY)
    ) {
      changePage(differenceX > 0 ? 1 : -1);
    }

    pointerStart.current = null;
  };

  return (
    <main className="flex h-svh flex-col overflow-hidden bg-[#181818] px-4 py-3 text-[#171717] md:px-8">
      {/* HEADER */}
      <header className="mx-auto flex w-full max-w-[1500px] shrink-0 items-center justify-between py-3 text-[#F2F0E9]">
        <Link
          to="/"
          className="group relative inline-flex flex-col py-2"
        >
          <span className="text-lg font-black tracking-[-0.06em] transition-transform duration-300 group-hover:-translate-y-0.5">
            FIXED/STUDIO®
          </span>

          <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#B7CC49] transition-transform duration-300 group-hover:scale-x-100" />
        </Link>

        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          <Link
            to="/explore"
            className="transition-colors hover:text-[#B7CC49]"
          >
            Explore
          </Link>

          <Link
            to="/builder"
            className="transition-colors hover:text-[#B7CC49]"
          >
            Build
          </Link>
        </nav>
      </header>

      {/* HORIZONTAL SLIDER */}
      <div
        className="mx-auto min-h-0 w-full max-w-[1500px] flex-1 touch-pan-y select-none overflow-hidden"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{
            transform: `translateX(-${activePage * 100}%)`,
          }}
        >
          {/* PAGE 01 — HOME */}
          <section className="flex h-full min-w-full flex-col overflow-hidden bg-[#E9E7DF] p-5 md:p-8 lg:p-10">
            <div className="flex min-h-0 flex-1 flex-col gap-6 lg:flex-row lg:gap-10">
              

{/* INTERACTIVE IMAGE */}
<div className="group relative min-h-0 flex-1 overflow-hidden bg-[#252525]">
  {/* BIKE IMAGE */}
  <img
    src="/images/hero-bike.jpg"
    alt="Fixed gear bicycle"
    draggable={false}
    className="
      h-full
      w-full
      object-cover
      object-center
      transition-transform
      duration-700
      ease-out
      group-hover:scale-105
    "
  />

  {/* REVEAL PANEL */}
  <div
    className="
      absolute
      inset-0
      flex
      translate-y-full
      flex-col
      items-center
      justify-center
      bg-[#171717]
      p-8
      text-center
      transition-transform
      duration-700
      ease-[cubic-bezier(0.76,0,0.24,1)]
      group-hover:translate-y-0
    "
  >
    <h2 className="text-[clamp(2rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.07em] text-[#E9E7DF]">
      MORE THAN
      <br />
      A BIKE.
    </h2>

    <p className="mt-5 text-sm text-[#B7CC49]">
      Built by you. Made to move.
    </p>
  </div>
</div>



              {/* CONTENT */}
              <div className="flex w-full shrink-0 flex-col justify-center lg:w-[38%]">
                <h1 className="text-[clamp(3rem,5.5vw,6.5rem)] font-black leading-[0.9] tracking-[-0.085em]">
                  BUILT
                  <br />
                  DIFFERENT.
                </h1>

                
              <Link
                to="/builder"
                className="
                  group
                  relative
                  mt-10
                  inline-flex
                  w-fit
                  overflow-hidden
                  bg-[#B7CC49]
                  px-8
                  py-5
                  font-mono
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-[#171717]
                  active:translate-y-0
                  active:scale-[0.97]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#171717]
                "
              >
                <span className="relative block overflow-hidden">
                  <span
                    className="
                      block
                      text-[#171717]
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:-translate-y-full
                    "
                  >
                    Start building
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      translate-y-full
                      text-[#B7CC49]
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:translate-y-0
                    "
                  >
                    Start building
                  </span>
                </span>
              </Link>

              </div>
            </div>
          </section>

          {/* PAGE 02 — EXPLORE */}
          <section className="flex h-full min-w-full flex-col justify-center overflow-hidden bg-[#D8D5CB] p-5 md:p-8 lg:p-10">
            <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.85] tracking-[-0.085em]">
              EXPLORE
              <br />
              BUILDS.
            </h2>

            <Link
              to="/explore"
              className="mt-10 w-fit border-b border-[#171717] pb-2 font-mono text-xs font-medium uppercase tracking-wider transition-opacity hover:opacity-50"
            >
              Explore
            </Link>
          </section>

          {/* PAGE 03 — BUILD */}
          <section className="flex h-full min-w-full flex-col justify-center overflow-hidden bg-[#B7CC49] p-5 md:p-8 lg:p-10">
            <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.85] tracking-[-0.085em]">
              MAKE IT
              <br />
              YOURS.
            </h2>

            <Link
              to="/builder"
              className="mt-10 w-fit border-b border-[#171717] pb-2 font-mono text-xs font-medium uppercase tracking-wider transition-opacity hover:opacity-50"
            >
              Start building
            </Link>
          </section>
        </div>
      </div>

      {/* MINIMAL SLIDE INDICATORS */}
      <footer className="flex shrink-0 items-center justify-center gap-3 py-4">
        {pages.map((page, index) => (
          <button
            key={page}
            type="button"
            onClick={() => setActivePage(index)}
            aria-label={`Go to ${page}`}
            aria-current={
              activePage === index ? "step" : undefined
            }
            className={`h-[2px] transition-all duration-300 ${
              activePage === index
                ? "w-10 bg-[#E9E7DF]"
                : "w-5 bg-[#666666]"
            }`}
          />
        ))}
      </footer>
    </main>
  );
}
