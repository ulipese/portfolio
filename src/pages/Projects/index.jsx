import Project from "../../components/Project";

export const Projects = () => {
  return (
    <main className="w-full h-full pt-[1em] max-sm:pt-[2em]">
      <section className="w-full h-full">
        <h1 className="text-4xl font-bold w-full leading-tight mb-[1em]">
          Aqui estão os meus
          <span className="text-primGreen"> melhores projetos</span>
        </h1>
        <section className="flex flex-row flex-wrap w-full h-full gap-[2em] justify-between py-[1em]">
          <Project
            title="DebugApp Keeper"
            src="debugapp-keeper.png"
            github="debugapp-keeper"
            project="https://keeper-debugapp.netlify.app/"
          >
            Projeto web para anotações, feito com React, Node e MongoDB!
          </Project>
          <Project
            title="HaltUp"
            src="haltup.png"
            github="haltup"
            project="https://ulipese.github.io/HaltUp"
          >
            Projeto web para academia, feito com HTML, CSS e Javascript!
          </Project>
          <Project
            title="Teste FaciJuridico"
            src="facilita-juridico.png"
            github="teste_facilitajuridico"
            project=""
          >
            Teste que fiz para uma empresa, feito com React, Node e PostgreSQL!
          </Project>
          <Project
            title="Moos Clocks"
            src="moos-clocks.png"
            github="moos_clocks"
            project=""
          >
            Ecommerce de relógios, feito com Bootstrap, Jquery, PHP e MySQL!
          </Project>
          <Project
            title="Tip Calculator"
            src="tip-calculator.png"
            github="tip-calculator-app"
            project="https://ulipese.github.io/tip-calculator-app/"
          >
            Projeto web para treinar minhas frontend skills com figma, HTML, CSS
            e JS (DOM)!
          </Project>
          <Project
            title="Advice Generator"
            src="advice-generator.png"
            github="advice-generator-app"
            project="https://ulipese.github.io/advice-generator-app/"
          >
            Projeto web para treinar minhas frontend skills com figma, HTML, CSS
            e JS (para consumir a api)!
          </Project>
        </section>
      </section>
    </main>
  );
};
