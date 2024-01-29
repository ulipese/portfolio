import "./App.css";
import Project from "./components/Project";
import Input from "./components/Input";

function App() {
  return (
    <main className="main">
      <section className="home">
        <section className="home__title-content">
          <h1 className="title-content__title">
            Olá, sou o <span className="highlight">Felipe </span> <br />
            <span className="highlight-title-role">FullStack Developer</span>
          </h1>
          <div className="title-content__social">
            <a
              href="https://linkedin.com/in/ulipese"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/ulipese"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/images/github-icon.svg" alt="GitHub" />
            </a>
            <a
              href="https://drive.google.com/file/d/1Ep3MTOhcErx_2LCnsfW_dVitSFzV84gb/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/images/cv-icon.svg" alt="CV" />
            </a>
          </div>
        </section>
        <img
          src="/images/square-langs-image.png"
          alt="Programming Languages"
          className="home__square"
        />
        <section className="home__see-projects">
          <a href="#projects" className="see-projects__title">
            <img
              src="/images/scroll-down-icon.svg"
              alt="Scroll down"
              className="see-projects__icon"
            />
            Veja alguns<span className="highlight"> projetos!</span>
          </a>
        </section>
      </section>

      <section className="projects" id="projects">
        <h1 className="projects__title">
          Aqui estão os meus
          <span className="highlight"> melhores projetos</span>!
        </h1>
        <section className="projects__all-projects">
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
            title="DebugApp Keeper"
            src="debugapp-keeper.png"
            github="debugapp-keeper"
            project="https://keeper-debugapp.netlify.app/"
          >
            Projeto web para anotações, feito com React, Node e MongoDB!
          </Project>
        </section>
      </section>
      <section className="about">
        <h1 className="about__title">
          Agora, mais sobre o{" "}
          <span className="highlight">autor dos projetos</span>!
        </h1>
        <div className="about__info">
          <p className="info__description">
            Meu nome é{" "}
            <span className="highlight">Felipe Sousa de Oliveira</span>,
            atualmente moro em São Paulo, tenho{" "}
            <span className="highlight">
              formação técnica em Desenvolvimento de Sistemas
            </span>
            , e 3 anos de experiência em desenvolvimento web FullStack com
            diversos projetos. Minhas linguagens e ferramentas que atuo com
            maior maestria são: <span className="highlight">React</span>,{" "}
            <span className="highlight">Node</span>,{" "}
            <span className="highlight">MongoDB</span>,{" "}
            <span className="highlight">MySQL</span>,{" "}
            <span className="highlight">HTML</span>,{" "}
            <span className="highlight">CSS</span>,{" "}
            <span className="highlight">Sass</span>, um pouco de{" "}
            <span className="highlight">PHP</span> e{" "}
            <span className="highlight">Java</span>, e{" "}
            <span className="highlight">C#</span>. Também estou expandindo meu
            repertório aprendendo
            <span className="highlight"> TypeScript</span>.
          </p>
          <img
            src="/images/me-image.png"
            alt="Author (Felipe Sousa)"
            className="info__image"
          />
        </div>
      </section>
      <section className="contact">
        <h1 className="contact__title">
          Gostou? Entre em <span className="highlight"> contato!</span>
        </h1>
        <Input email="felipe.sousa4030@gmail.com" />
      </section>
    </main>
  );
}

export default App;
