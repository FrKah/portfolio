import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { useTranslation } from "react-i18next";

const links = [
  { to: "/", label: "navbar.home" },
  { to: "/projects", label: "navbar.projects" },
  { to: "/contact", label: "navbar.contact" },
];

// daisyUI theme names, see index.css
type Theme = "mylight" | "my_dark";
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const systemTheme = (): Theme => (darkQuery.matches ? "my_dark" : "mylight");

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(systemTheme);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // follow the browser if its light/dark preference changes
  useEffect(() => {
    const onChange = () => setTheme(systemTheme());
    darkQuery.addEventListener("change", onChange);
    return () => darkQuery.removeEventListener("change", onChange);
  }, []);

  // close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="navbar relative bg-base-200 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Frédéric Kah
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "active font-bold" : "")}
              >
                {t(label)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {/* Language Selector */}
        <div className="mr-4">
          <select
            className="select border-base-300 select-sm"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
        <label className="toggle text-base-content">
          {/* checked = light (sun), unchecked = dark (moon) */}
          <input
            type="checkbox"
            aria-label={t("navbar.lightMode")}
            checked={theme === "mylight"}
            onChange={(e) => setTheme(e.target.checked ? "mylight" : "my_dark")}
          />

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>
        </label>
      </div>

      {/* Mobile Menu */}
      <button
        type="button"
        className="btn btn-ghost btn-square lg:hidden"
        aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {menuOpen && (
        <ul
          id="mobile-menu"
          className="menu lg:hidden absolute left-0 right-0 top-full z-50 w-full p-2 text-lg bg-base-200 border-t border-base-300 shadow-md"
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 ${isActive ? "active font-bold" : ""}`
                }
              >
                {t(label)}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
