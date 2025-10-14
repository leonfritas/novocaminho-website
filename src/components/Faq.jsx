import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import "./Faq.css";

export const Faq = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <div id="faq" className="faq-section">
      <div className="container">
        {/* Título */}
        <motion.div 
          className="faq-title-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="faq-icon">
            <FaQuestionCircle />
          </div>
          <h2>Perguntas Frequentes</h2>
          <p>
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e tratamentos.
          </p>
        </motion.div>

        {/* Lista de perguntas */}
        <motion.div 
          className="faq-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data && data.length > 0 ? (
            data.map((item, i) => (
              <motion.div
                key={i}
                className={`faq-item ${openIndex === i ? 'faq-item-open' : ''}`}
                variants={itemVariants}
                onClick={() => toggleFaq(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Pergunta */}
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <motion.div
                    className="faq-icon-wrapper"
                    variants={iconVariants}
                    animate={openIndex === i ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === i ? <FaMinus /> : <FaPlus />}
                  </motion.div>
                </div>

                {/* Resposta */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="faq-answer-content">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="faq-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>Nenhuma pergunta encontrada.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
