export const About = () => {
  return (
    <main className="w-full h-full min-h-screen flex flex-col pt-[1em]">
      <section className="w-full h-full">
        <h1 className="text-4xl font-bold w-full leading-tight mb-[1em]">
          Agora, mais sobre o
          <span className="text-primGreen font-bold"> criador</span>
        </h1>
        <div className="flex flex-row flex-wrap-reverse items-center justify-around w-full h-full py-[1em] mb-[2em] gap-[2em]">
          <p className="text-semibold w-[25em] font-semibold text-lg">
            Meu nome é
            <span className="text-primGreen font-bold">
              {" "}
              Felipe Sousa de Oliveira
            </span>
            , atualmente moro em São Paulo, estou cursando bacharelado em{" "}
            <span className="text-primGreen font-bold">
              Engenharia de Software
            </span>{" "}
            na <span className="text-primGreen font-bold">FIAP</span>, e tenho
            formação técnica em
            <span className="text-primGreen font-bold">
              {" "}
              Desenvolvimento de Sistemas
            </span>
            , além de 2 anos de experiência em desenvolvimento web FullStack com
            diversos projetos. Minhas linguagens e ferramentas que atuo com
            maior maestria são:{" "}
            <span className="text-primGreen font-bold"> React</span>,
            <span className="text-primGreen font-bold"> Next</span>,
            <span className="text-primGreen font-bold"> TypeScript</span>,
            <span className="text-primGreen font-bold"> Node</span>,
            <span className="text-primGreen font-bold"> MongoDB</span>,
            <span className="text-primGreen font-bold"> MySQL</span>,
            <span className="text-primGreen font-bold"> HTML</span>,
            <span className="text-primGreen font-bold"> CSS</span>,
            <span className="text-primGreen font-bold"> Tailwind</span>, e
            <span className="text-primGreen font-bold">
              {" "}
              Java (Spring Boot)
            </span>
            .
          </p>
          <img
            src="/images/me-image.png"
            loading="lazy"
            alt="Author (Felipe Sousa)"
            className="w-[20em] h-[20em] object-cover rounded-lg bg-primGreen"
          />
        </div>
      </section>
    </main>
  );
};
