import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Mon Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              Tous
            </li>
            <li
              className={`c-pointer ${activeBtn("logo")}`}
              onClick={handleFilterKeyChange("logo")}
              data-filter=".logo"
            >
              Logo
            </li>
            <li
              className={`c-pointer ${activeBtn("webdesign")}`}
              onClick={handleFilterKeyChange("webdesign")}
              data-filter=".webdesign"
            >
              web Design
            </li>
            <li
              className={`c-pointer ${activeBtn("chartegraphic")}`}
              onClick={handleFilterKeyChange("chartegraphic")}
              data-filter=".chartegraphic"
            >
              Charte Graphique
            </li>
            <li
              className={`c-pointer ${activeBtn("objetcom")}`}
              onClick={handleFilterKeyChange("objetcom")}
              data-filter=".objetcom"
            >
              OBJET COM
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0001.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0001.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item webdesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">BNM</h5>
                <span>Web Design</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/web_design/maquette-pre2.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/web_design/maquette-pre2.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

          <div className="grid-item webdesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">BNM</h5>
                <span>Web Design</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/web_design/maquette-pre1.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/web_design/maquette-pre1.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item logo">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">skales</h5>
                <span>Logo</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/logo/skales/skales_logo.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/logo/skales/skales_logo.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item webdesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">BNM</h5>
                <span>Web Design</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/web_design/maquette-pre.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/web_design/maquette-pre.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}


            {/* grid item */}
            <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Save the childrens</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/flyer_save_the_childrens/flyers_2.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/flyer_save_the_childrens/flyers_2.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

            {/* grid item */}
            <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Save the childrens</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/flyer_save_the_childrens/flyers_1.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/flyer_save_the_childrens/flyers_1.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Save the childrens</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/flyer_save_the_childrens/Floating A4 Paper Mockup.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/flyer_save_the_childrens/Floating A4 Paper Mockup.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Save the childrens</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/flyer_save_the_childrens/FLYERS_p2_SCI_corrigé_page-0001.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/flyer_save_the_childrens/FLYERS_p2_SCI_corrigé_page-0001.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Save the childrens</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/flyer_save_the_childrens/FLYERS_p2_SCI_corrigé_page-0002.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/flyer_save_the_childrens/FLYERS_p2_SCI_corrigé_page-0002.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}


           {/* grid item */}
           <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">RAABIATOUL ADAWI</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/FLYERS_RAABIATOUL_ADAWI/affiche hajj2.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/FLYERS_RAABIATOUL_ADAWI/affiche hajj2.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

            {/* grid item */}
            <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">RAABIATOUL ADAWI</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/FLYERS_RAABIATOUL_ADAWI/flyersvrabiatoul adawi-1.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/FLYERS_RAABIATOUL_ADAWI/flyersvrabiatoul adawi-1.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

            {/* grid item */}
            <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">BLACK FRIDAY</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/SYSTEM_PROAFFICHE/BLACK FRIDAY SURFACE LAPTOP 3 256.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/SYSTEM_PROAFFICHE/BLACK FRIDAY SURFACE LAPTOP 3 256.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}


          {/* grid item */}
          <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">BLACK FRIDAY</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/SYSTEM_PROAFFICHE/PROMO RENTRE PACK gold.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/SYSTEM_PROAFFICHE/PROMO RENTRE PACK gold.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}


            {/* grid item */}
            <div className="grid-item objetcom">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">BLACK FRIDAY</h5>
                <span>Objet Com</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/objet_com/SYSTEM_PROAFFICHE/PROMO RENTRE PACK CLASSIC.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/objet_com/SYSTEM_PROAFFICHE/PROMO RENTRE PACK CLASSIC.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

          {/* grid item */}
          <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0002.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0002.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item logo">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Hors Normes</h5>
                <span>Logo</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/logo/hors_normes/logoN.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/logo/hors_normes/logoB.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

          <div className="grid-item logo">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Pama</h5>
                <span>Logo</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/logo/logo_pama/pama1.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/logo/logo_pama/pama2.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

          {/* grid item */}
          <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0003.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0003.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0004.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0004.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

          {/* grid item */}
          <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0005.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0005.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0006.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0006.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0007.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0007.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}


           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0008.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0008.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}


           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0009.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0009.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0010.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0010.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0011.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0011.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0012.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0012.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0013.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0013.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0014.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0014.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

           {/* grid item */}
           <div className="grid-item chartegraphic">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">YORUS</h5>
                <span>Charte Graphique </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0015.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/charte_graphique/YORUS/2CHARTE GRAPHIQUE-YORUS__page-0015.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

          <div className="grid-item logo">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">RABIATOUL ADAWI</h5>
                <span>Logo</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/logo/RABIATOUL_ADAWI/logo_concept_RABIATOUL-ADAWI_FP-02.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/logo/RABIATOUL_ADAWI/logo_concept_RABIATOUL-ADAWI_FP-01-01.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

          <div className="grid-item logo">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Maisha Fashion</h5>
                <span>Logo</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/logo/maisha_fashion/FINAL LOGO CONCEPTION-12.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/logo/maisha_fashion/LOGOMAICHA.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

          <div className="grid-item logo">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Ommagar</h5>
                <span>Logo</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/logo/LOGO_OGS/logo2.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/logo/LOGO_OGS/logo1.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}


          <div className="grid-item logo">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">DAMEL ELEGANCE</h5>
                <span>Logo</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/logo/LOGO_DAMEL_ELEGANCE/DAMEL LOGO_LOGO3.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/logo/LOGO_DAMEL_ELEGANCE/ DAMEL LOGO_LOGO3port.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

        </div>
      </div>
    </section>
  );
};
export default Portfolio;
