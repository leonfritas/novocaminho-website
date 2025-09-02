import React from "react";

export const Treatment = (props) => {
  return (
    <div id="treatment">
      <div className="container">
        <div className="section-title text-center">
          <h2>Tratamentos</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6">
                  <div className="treatment-card">
                    <div className="treatment-image">
                      <img src={d.img} alt={d.name} />
                    </div>
                    <div className="treatment-content">
                      <h3>{d.name}</h3>
                      <p>"{d.text}"</p>
                      {d.description && (
                        <div className="treatment-description">
                          {d.description}
                        </div>
                      )}
                      {d.price && (
                        <div className="treatment-price">
                          {d.price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            : "Carregando..."}
        </div>
      </div>
    </div>
  );
};