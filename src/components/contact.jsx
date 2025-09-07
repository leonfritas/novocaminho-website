import { useState } from "react";
import emailjs from "emailjs-com";

const CURRENT_YEAR = new Date().getFullYear();

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            
            <div className="section-title">

              <h2>Entre em contato</h2>
              <p>
                Preencha o formulário abaixo para nos enviar uma mensagem. 
                Entraremos em contato o mais breve possível para oferecer apoio e orientação.
              </p>
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Nome"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="E-mail"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Mensagem
                  "
                  required
                  onChange={handleChange}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Enviar Mensagem
              </button>
            </form>
            <div className="section-title">
              <h2>Nosso Endereço</h2>
            </div>
            
            <div className="row row-contact">
              
              <div className="map-container" style={{ marginTop: "40px" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8451632777533!2d-60.02512212425709!3d-3.1355752968398867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057efa7909a3%3A0x8c6fc6669ad1e587!2sConj.%20Tocantins%2C%202229%20-%20Centro%2C%20Manaus%20-%20AM%2C%2069050-110!5e0!3m2!1spt-BR!2sbr!4v1756860015699!5m2!1spt-BR!2sbr" 
                  width="600" 
                  height="450" 
                  style={{border:0, borderRadius: "20px"}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className="col-md-3 col-md-offset-1 contact-info">
                <div className="contact-item">
                  <h3>Informações </h3>
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Endereço
                    </span>
                    {props.data ? "Rua Marcílio Dias nº 2229 Conjunto Tocantins - Centro" : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Telefone
                    </span>{" "}
                    {props.data ? "(92) 98409-2632" : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> E-mail
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.whatsapp : "/"}>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <h3          
            className="footer-company"
          >          
            <a href="https://www.instagram.com/noodlesoftware/" target="_blank" rel="noopener noreferrer">
            &copy; {CURRENT_YEAR} Desenvolvido por Noodle Software Solutions.
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
