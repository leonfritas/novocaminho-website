export const Services = (props) => {
  return (
    <div id="services" className="text-center py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Serviços</h2>
          <p className="text-gray-600 mt-2">
            Atendimentos especializados com foco na recuperação integral.
          </p>
        </div>

        <div className="services-grid">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="services-card"
              >
                {/* Imagem no topo */}
                <div className="services-card-image">
                          {" "}
                      <img src={d.image} alt="" />{" "}
                </div>
              
                {/* Título */}
                <h3 className="services-card-title">
                  {d.name}
                </h3>

                {/* Texto */}
                <p className="services-card-text">
                  {d.text}
                </p>
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </div>
  );
};
