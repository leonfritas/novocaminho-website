import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageModal.css';

export const ImageModal = ({ isOpen, onClose, images, currentIndex }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex || 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div className="custom-dot" />
    )
  };

  function NextArrow({ onClick }) {
    return (
      <div className="slick-next-custom" onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div className="slick-prev-custom" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  }

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
          
          <div className="modal-slider-container">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="modal-slide">
                  <div className="modal-image-container">
                    <img 
                      src={image.largeImage} 
                      alt={image.title}
                      className="modal-image"
                    />
                  </div>
                  <div className="modal-text">
                    {/* <h3>{image.title}</h3> */}
                    <p>{image.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
