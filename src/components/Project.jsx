function Project(props) {
  return (
    <section className="project">
      <h1 className="project__title">{props.title}</h1>
      <img
        src={`/images/projects-images/${props.src}`}
        alt="Project"
        className="project__image"
      />
      <div className="project__about">
        <div className="about__more">
          <a
            href={`https://github.com/ulipese/${props.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/github-project-icon.svg"
              alt="Project github"
              className="more__icon"
              id="github"
            />
          </a>
          <a href={`${props.project}`} target="_blank" rel="noreferrer noopener">
            <img
              src="/images/open-icon.svg"
              alt="See Project"
              className="more__icon"
            />
          </a>
        </div>
        <p className="about__description">{props.children}</p>
      </div>
    </section>
  );
}

export default Project;
