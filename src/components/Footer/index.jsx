import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full h-[3em] font-bold flex flex-row justify-center items-center relative bg-primGreen">
      <p>Todos os direitos reservados &copy;</p>
      <Link
        to="https://github.com/ulipese"
        target="blank"
        rel="noopener noreferrer"
        className="absolute right-[1em]"
      >
        <Github />
      </Link>
    </footer>
  );
};
