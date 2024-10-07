function Project({ title, children, src, github, project }) {
  if (title.length > 23) {
    title = title.substring(0, 20) + "...";
  }
  if (children.length > 80) {
    children = children.substring(0, 77) + "...";
  }

  return (
    <div className="flex flex-col w-full max-w-[25em] gap-[1em]">
      <h1 className="text-3xl font-bold text-primGreen -mb-[.2em]">
        {title}
      </h1>
      <img
        src={`/images/projects-images/${src}`}
        loading="lazy"
        alt="Project"
        className="w-full brightness-[0.5]"
      />
      <div className="flex flex-row w-full -mt-[.5em]">
        <div className="flex flex-row w-[10em] items-center gap-[.8em]">
          <a
            href={`https://github.com/ulipese/${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/github-project-icon.svg"
              loading="lazy"
              alt="Project github"
              className="w-[2.5em]"
              id="github"
            />
          </a>
          {project ? (
            <a
              href={`${project}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/images/open-icon.svg"
                loading="lazy"
                alt="See Project"
                className="w-[2em]"
              />
            </a>
          ) : (
            <img
              src="/images/open-icon-no-project.svg"
              loading="lazy"
              alt="See Project"
              className="w-[2em]"
            />
          )}
        </div>
        <p className="w-full pr-[.5em] font-semibold text-[#303030] text-right text-[1em]">{children}</p>
      </div>
    </div>
  );
}

export default Project;
