import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="w-full h-[4em] flex flex-row items-center justify-end py-[1em] px-[2em] max-sm:justify-center">
      <nav className="flex">
        <ul className="flex gap-8 font-[700] text-xl">
          <li>
            <Link to="/" className={pathname == "/" ? "text-primGreen" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={pathname == "/projects" ? "text-primGreen" : ""}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={pathname == "/about" ? "text-primGreen" : ""}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={pathname == "/contact" ? "text-primGreen" : ""}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
