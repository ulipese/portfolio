import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="w-full h-full min-h-screen max-sm:pt-[2em]">
      <section className="w-full h-full flex flex-row flex-wrap justify-between">
        <section className="w-max-content h-fit-content flex flex-col gap-[1em] max-sm:-mb-[2em]">
          <h1 className="text-4xl font-bold w-[11em] leading-tight">
            Olá, sou o <span className="text-primGreen">Felipe </span>
            <br />
            <span className="text-primGreen">FullStack Developer</span>
          </h1>
          <div className="flex flex-wrap flex-row">
            <Link
              href="https://linkedin.com/in/ulipese"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/linkedin-icon.svg"
                loading="lazy"
                alt="LinkedIn"
                className="w-[3em]"
              />
            </Link>
            <Link
              href="https://github.com/ulipese"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/github-icon.svg"
                loading="lazy"
                alt="GitHub"
                className="w-[3em]"
              />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1hM1872gNGwXk4OAsw3ar8_WlLw9aZAnP/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/cv-icon.svg"
                loading="lazy"
                alt="CV"
                className="w-[3em]"
              />
            </Link>
          </div>
        </section>
        <img
          src="/images/square-langs-image.png"
          loading="lazy"
          alt="Programming Languages"
          className="max-sm:w-[20em] max-sm:h-[20em] w-[28em] h-[28em]"
        />
      </section>
    </main>
  );
};
