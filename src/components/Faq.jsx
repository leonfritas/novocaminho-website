import { useState } from "react";

export const Faq = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Perguntas Frequentes</h2>
          <p className="text-gray-600 mt-2">
            Confira as respostas para as dúvidas mais comuns.
          </p>
        </div>

        {/* Lista de perguntas */}
        <div className="max-w-3xl mx-auto space-y-4">
          {data && data.length > 0 ? (
            data.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
                onClick={() => toggleFaq(i)}
              >
                {/* Pergunta */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 faqbutton">
                    {item.question}
                  </h3>
                  {/* <span className="text-green-600 text-2xl">
                    {openIndex === i ? "−" : "+"}
                  </span> */}
                </div>

                {/* Resposta */}
                {openIndex === i && (
                  <p className="text-gray-600 mt-3">{item.answer}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Nenhuma pergunta encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
};
