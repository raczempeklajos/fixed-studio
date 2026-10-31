
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "HOME", path: "/" },
  { label: "EXPLORE", path: "/explore" },
  { label: "BUILD", path: "/builder" },
];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-[#f8f8f6]">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-6">
        <NavLink
          to="/"
          className="text-lg font-bold tracking-[-0.05em]"
        >
          FIXED STUDIO
        </NavLink>

        <div className="flex items-center gap-6">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `text-xs font-medium tracking-wider transition-colors ${
                  isActive
                    ? "text-black"
                    : "text-neutral-500 hover:text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
