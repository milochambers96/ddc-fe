import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface NavItem {
  text: string;
  path: string;
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const homeTitle: NavItem = { text: "Denise de Cordova", path: "/" };
  const navbarItems: NavItem[] = [
    { text: "Works", path: "/works" },
    { text: "Exhibitions", path: "/exhibitions" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="flex justify-center sticky bg-ddc-background top-0 z-50">
      <nav className="flex justify-between items-center w-full max-w-[81.25rem] lg:max-w-[81.50rem] mt-[6rem]">
        {/* Logo/Title */}
        <div>
          <Link to={homeTitle.path}>
            <h1 className="md:d1-title p1-title">{homeTitle.text}</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-x-[3rem]">
            {navbarItems.map((item) => (
              <li key={item.text}>
                <Link to={item.path}>
                  <h2 className="d2-menu hover:text-ddc-highlight transition-colors">
                    {item.text}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Burger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleBurger}
            className="focus:outline-none"
            aria-label="toggle menu"
          >
            {isActive ? (
              <HiX size={32} className="text-ddc-text" />
            ) : (
              <HiMenu size={32} className="text-ddc-text" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            md:hidden
            absolute
            top-full
            left-0
            right-0
            bg-ddc-background/90
            transform
            transition-all
            duration-300
            ease-in-out
            ${
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <ul className="flex flex-col py-4 space-y-4">
            {navbarItems.map((item) => (
              <li key={item.text}>
                <Link
                  to={item.path}
                  className="p2-menu hover:text-ddc-highlight transition-colors block"
                  onClick={toggleBurger}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
