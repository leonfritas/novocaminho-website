import { Image } from "./image";

export const Treatment = (props) => {
  return (
    <div id="treatment">
      <div className="container">
        <div className="section-title text-center">
          <h2>Nossos Tratamentos</h2>
          <p className="section-subtitle">Cuidados especializados para seu bem-estar</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-lg-4 col-md-4 col-sm-12">
                  <div className="treatment-card">
                    <div className="treatment-image-wrapper">
                      <div className="treatment-image">
                        <Image
                          title={d.name}
                          largeImage={d.img}
                          smallImage={d.img}
                        />
                      </div>
                      <div className="treatment-overlay">
                        <button className="treatment-button">Saiba mais</button>
                      </div>
                    </div>
                    <div className="treatment-content">
                      <h3>{d.name}</h3>
                      <p className="treatment-quote">"{d.text}"</p>
                      {d.description && (
                        <div className="treatment-description">
                          {d.description}
                        </div>
                      )}
                      {d.price && (
                        <div className="treatment-price">
                          <span className="price-tag">{d.price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            : <div className="loading-spinner">Carregando...</div>}
        </div>
      </div>
    </div>
  );
};