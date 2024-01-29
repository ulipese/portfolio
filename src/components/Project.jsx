function Project(props) {
  let { title, children } = props;

  if (title.length > 23) {
    title = title.substring(0, 20) + "...";
  }
  if (children.length > 80) {
    children = children.substring(0, 77) + "...";
  }

  return (
    <section className="project">
      <h1 className="project__title">{title}</h1>
      <img
        src={`/images/projects-images/${props.src}`}
        loading="lazy"
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
              loading="lazy"
              alt="Project github"
              className="more__icon"
              id="github"
            />
          </a>
          {props.project ? (
            <a
              href={`${props.project}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/images/open-icon.svg"
                loading="lazy"
                alt="See Project"
                className="more__icon"
              />
            </a>
          ) : (
            <img
              src="/images/open-icon-no-project.svg"
              loading="lazy"
              alt="See Project"
              className="more__icon no-project"
            />
          )}
        </div>
        <p className="about__description">{children}</p>
      </div>
    </section>
  );
}

export default Project;
