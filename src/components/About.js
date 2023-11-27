const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>Présentation.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`Je suis`} Graphic Designer, Photographe, Videaste, Illustrateur & Web Designer
                  .{" "}
                </h3>
                <p>
                  {/* {`I'm`} a Freelancer Front-end Developer with over 3 years of
                  experience. {`I'm`} from San Francisco. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences. */}
                  Je suis Oumar Samb, également connu sous le nom d'artiste Buur Graphics. Mon monde est façonné par la créativité et l'art visuel. En tant que graphiste, designer, photographe et vidéaste, je transforme des idées en images, des moments en souvenirs, et des histoires en vidéos captivantes. Explorez mon univers et laissez-vous emporter par l'esthétique visuelle.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">5k</span>
                      <div className="media-body">
                      Projets <br />
                      Terminés.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3k</span>
                      <div className="media-body">
                      Clients <br />
                      Satisfaits.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contacter-moi</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>ÉDUCATION &amp; COMPÉTENCES</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2021-2022</span>
                <h6>LICENCE 3</h6>
                <p>Licence 3 en ART Graphique et Numérique à l’Institue des métiers des Arts Grapiques et Numeriques (SUP I’imax)</p>
              </li>
              <li>
                <span>2020-2021</span>
                <h6>LICENCE 2</h6>
                <p>Licence 2 en ART Graphique et Numérique à l’Institue des métiers des Arts Grapiques et Numeriques (SUP I’imax)</p>
              </li>
              <li>
                <span>2019-2020</span>
                <h6>LICENCE 1</h6>
                <p>Licence 1 en ART Graphique et Numérique à l’Institue des métiers des Arts Grapiques et Numeriques (SUP I’imax)</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Mes Compétences</h3>
              <p>
                {/* {`I'm`} a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences. */}
                BUUR GRAPHICS est un designer multidisciplinaire qui se concentre sur la résolution de problèmes et la transformation de problèmes complexes en designs simples, intuitifs et magnifiques.
              </p>
              <div className="skill-lt">
                <h6>Photoshop</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="85%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Illustrator</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Premiere Pro</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "66%" }}>
                    <span data-toggle="tooltip" title="66%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>After effect</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="80%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
               <div className="skill-lt">
                <h6>Cinema 4D</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "50%" }}>
                    <span data-toggle="tooltip" title="50%" />
                  </div>
                </div>
              </div>
              {/* /skill */}

                <div className="skill-lt">
                <h6>Adode dx</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>EXPERIENCES PROFESSIONNELLES.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Graphiste Designer et Videaste</h6>
                  <label>2018 - 2019</label>
                  <div className="rb-time">Temps Plein</div>
                  <p>
                  Graphiste designer et videaste dans l’entreprise de marketing digital INTERAKTIVE.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Chargé de clientel</h6>
                  <label>2018 - 2019</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  Chargé de clientel dans le magasin electronic TOUBA PORTABLE.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default About;
