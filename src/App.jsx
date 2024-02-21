import './App.css';
import { useEffect } from 'react';
import Project from './components/Project';
import Input from './components/Input';
import ScrollReveal from './scrollreveal.min';

function App() {
  const rs = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    // reset: true,
  });

  const userPreferredLang = navigator.language;

  useEffect(() => {
    rs.reveal('.home');
    rs.reveal('.title-content__social', { interval: 150 });
    rs.reveal('.projects');
    rs.reveal('.project', { interval: 150 });
    rs.reveal('.about');
    rs.reveal('.info__image', { interval: 150 });
    rs.reveal('.contact');
    rs.reveal('.input', { interval: 150 });
  }, [rs]); // add animations

  return userPreferredLang === 'pt-BR' ? ( // if portuguese speaker
    <main className="main">
      <section className="home">
        <section className="home__title-content">
          <h1 className="title-content__title">
            Olá, sou o <span className="highlight">Felipe </span>
            <br />
            <span className="highlight-title-role">FullStack Developer</span>
          </h1>
          <div className="title-content__social">
            <a
              href="https://linkedin.com/in/ulipese"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/linkedin-icon.svg"
                loading="lazy"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/ulipese"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/images/github-icon.svg" loading="lazy" alt="GitHub" />
            </a>
            <a
              href="https://drive.google.com/file/d/1hM1872gNGwXk4OAsw3ar8_WlLw9aZAnP/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/images/cv-icon.svg" loading="lazy" alt="CV" />
            </a>
          </div>
        </section>
        <img
          src="/images/square-langs-image.png"
          loading="lazy"
          alt="Programming Languages"
          className="home__square"
        />
        <section className="home__see-projects">
          <a href="#projects" className="see-projects__title">
            <img
              src="/images/scroll-down-icon.svg"
              loading="lazy"
              alt="Scroll down"
              className="see-projects__icon"
            />
            Veja alguns
            <span className="highlight"> projetos!</span>
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
      <section className="about">
        <h1 className="about__title">
          Agora, mais sobre o{' '}
          <span className="highlight">autor dos projetos</span>!
        </h1>
        <div className="about__info">
          <p className="info__description">
            Meu nome é{' '}
            <span className="highlight">Felipe Sousa de Oliveira</span>,
            atualmente moro em São Paulo, tenho{' '}
            <span className="highlight">
              formação técnica em Desenvolvimento de Sistemas
            </span>
            , e 3 anos de experiência em desenvolvimento web FullStack com
            diversos projetos. Minhas linguagens e ferramentas que atuo com
            maior maestria são: <span className="highlight">React</span>,{' '}
            <span className="highlight">Node</span>,{' '}
            <span className="highlight">MongoDB</span>,{' '}
            <span className="highlight">MySQL</span>,{' '}
            <span className="highlight">HTML</span>,{' '}
            <span className="highlight">CSS</span>,{' '}
            <span className="highlight">Sass</span>, um pouco de{' '}
            <span className="highlight">PHP</span> e{' '}
            <span className="highlight">Java</span>, e{' '}
            <span className="highlight">C#</span>. Também estou expandindo meu
            repertório aprendendo
            <span className="highlight"> TypeScript</span>.
          </p>
          <img
            src="/images/me-image.png"
            loading="lazy"
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
  ) : (
    // if other lang speaker
    <main className="main">
      <section className="home">
        <section className="home__title-content">
          <h1 className="title-content__title">
            Hello, I am <span className="highlight">Felipe </span> <br />
            <span className="highlight-title-role">FullStack Developer</span>
          </h1>
          <div className="title-content__social">
            <a
              href="https://linkedin.com/in/ulipese"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/linkedin-icon.svg"
                loading="lazy"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/ulipese"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/images/github-icon.svg" loading="lazy" alt="GitHub" />
            </a>
            <a
              href="https://drive.google.com/file/d/1Ep3MTOhcErx_2LCnsfW_dVitSFzV84gb/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/images/cv-icon.svg" loading="lazy" alt="CV" />
            </a>
          </div>
        </section>
        <img
          src="/images/square-langs-image.png"
          loading="lazy"
          alt="Programming Languages"
          className="home__square"
        />
        <section className="home__see-projects">
          <a href="#projects" className="see-projects__title">
            <img
              src="/images/scroll-down-icon.svg"
              loading="lazy"
              alt="Scroll down"
              className="see-projects__icon"
            />
            See some
            <span className="highlight"> projects!</span>
          </a>
        </section>
      </section>

      <section className="projects" id="projects">
        <h1 className="projects__title">
          Here are my
          <span className="highlight"> best projects</span>!
        </h1>
        <section className="projects__all-projects">
          <Project
            title="DebugApp Keeper"
            src="debugapp-keeper.png"
            github="debugapp-keeper"
            project="https://keeper-debugapp.netlify.app/"
          >
            Web app for notes, made with React, Node and MongoDB!
          </Project>
          <Project
            title="HaltUp"
            src="haltup.png"
            github="haltup"
            project="https://ulipese.github.io/HaltUp"
          >
            Website project for gym users, made with HTML, CSS, and Javascript
          </Project>
          <Project
            title="Teste FaciJuridico"
            src="facilita-juridico.png"
            github="teste_facilitajuridico"
            project=""
          >
            Test that I made for an lawyer enterprise, with React, Node and
            PostgreSQL
          </Project>
          <Project
            title="Moos Clocks"
            src="moos-clocks.png"
            github="moos_clocks"
            project=""
          >
            Ecommerce of clocks, made with Bootstrap, Jquery, PHP, and MySQL!
          </Project>
          <Project
            title="Tip Calculator"
            src="tip-calculator.png"
            github="tip-calculator-app"
            project="https://ulipese.github.io/tip-calculator-app/"
          >
            Web project to exercise my frontend skills with figma, HTML, CSS e
            JS (DOM)!
          </Project>
          <Project
            title="Advice Generator"
            src="advice-generator.png"
            github="advice-generator-app"
            project="https://ulipese.github.io/advice-generator-app/"
          >
            Web project to exercise my frontend skills with figma, HTML, CSS e
            JS (to consume api)!
          </Project>
        </section>
      </section>
      <section className="about">
        <h1 className="about__title">
          Now, more about the{' '}
          <span className="highlight">author of these projects</span>!
        </h1>
        <div className="about__info">
          <p className="info__description">
            My name is{' '}
            <span className="highlight">Felipe Sousa de Oliveira</span>, I live
            in São Paulo, I have{' '}
            <span className="highlight">
              technical degree in Systems Development
            </span>
            , and 3 years of FullStack development with divers projects. My
            programming languages and skills are:{' '}
            <span className="highlight">React</span>,{' '}
            <span className="highlight">Node</span>,{' '}
            <span className="highlight">MongoDB</span>,{' '}
            <span className="highlight">MySQL</span>,{' '}
            <span className="highlight">HTML</span>,{' '}
            <span className="highlight">CSS</span>,{' '}
            <span className="highlight">Sass</span>, a little of{' '}
            <span className="highlight">PHP</span> and{' '}
            <span className="highlight">Java</span>, and{' '}
            <span className="highlight">C#</span>. I am also expanding my
            repertory learning
            <span className="highlight"> TypeScript</span>.
          </p>
          <img
            src="/images/me-image.png"
            loading="lazy"
            alt="Author (Felipe Sousa)"
            className="info__image"
          />
        </div>
      </section>
      <section className="contact">
        <h1 className="contact__title">
          Did you like it? <span className="highlight"> contact!</span>
        </h1>
        <Input email="felipe.sousa4030@gmail.com" />
      </section>
    </main>
  );
}

export default App;
