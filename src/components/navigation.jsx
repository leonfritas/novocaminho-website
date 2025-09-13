
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header ">
          <a className="navbar-brand page-scroll linklogo" href="#page-top">
            <img              
              src="img/logo.png"  
              alt="logo"              
            />
          </a>{" "}
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" 
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in">
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" 
                className="page-scroll"     
                data-toggle="collapse"
                data-target=".navbar-collapse.in">
                Serviços
              </a>
            </li>
            <li>
              <a href="#treatment" 
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in">
                Tratamentos
              </a>
            </li>            
            <li>
              <a href="#portfolio" 
                className="page-scroll"     
                data-toggle="collapse"
                data-target=".navbar-collapse.in">
                Galeria
              </a>
            </li>
            <li>
              <a href="#faq" 
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" 
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
