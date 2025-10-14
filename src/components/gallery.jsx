import { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "./image";
import { ImageModal } from "./ImageModal";

export const Gallery = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Galeria</h2>
          
        </motion.div>
        
        <div className="row">
          <motion.div 
            className="portfolio-items"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {props.data
              ? props.data.map((d, i) => (
                  <motion.div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 portfolio-card"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      onClick={() => handleImageClick(i)}
                    />
                    <p>{d.text}</p>
                  </motion.div>
                ))
              : "Loading..."}
          </motion.div>
        </div>
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={props.data}
        currentIndex={selectedImageIndex}
      />
    </div>
  );
};
