import { Link, useLocation } from "react-router-dom";

interface NavItem {
  text: string;
  path: string;
}

const Navbar = () => {
  const homeTitle: NavItem = { text: "Denise de Cordova", path: "/" };
  const navbarItems: NavItem[] = [
    { text: "Works", path: "/works" },
    { text: "Exhibitions", path: "/exhibitions" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-center">
      <nav className="flex justify-between items-center w-full max-w-[81.25rem] px-8 py-6">
        <div>
          <Link to={homeTitle.path}>
            <h1 className="h1-title">{homeTitle.text}</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-x-[3rem]">
            {navbarItems.map((item) => (
              <li key={item.text}>
                <Link to={item.path}>
                  <h2 className="h2-menu hover:text-ddc-highlight transition-colors">
                    {item.text}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
