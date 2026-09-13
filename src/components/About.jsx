export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about-container container grid">
        <div className="about-container-img">
          <a href="#" target="_blank" rel="noreferrer" title="Click to view the PhD publication" className="phd-link">
            <img
              src="/img/pngwing.com (15).png"
              alt="PhD visual asset (cover)."
              className="about-container-imgAlt"
            />
          </a>
        </div>

        <div className="about-container-data">
          <p className="about-container-data-description">
            Développeur web et mobile passionné, spécialisé dans la création d’applications modernes. J’aime concevoir des solutions efficaces, sécurisées et adaptées aux besoins réels, tout en continuant à développer mes compétences.
          </p>

          <div className="about-buttons">
            <a download href="/assets/cv Herimandranto Fandresena.pdf" className="button button-flex">
              Telecharger mon CV <i className="fas fa-download button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
