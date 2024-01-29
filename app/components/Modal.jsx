import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#381668",
        padding: "0",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#381668",
        padding: "0",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    ></div>
  );
}

const Modal = ({ project, onClose }) => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="p-4 rounded-md bg-white max-w-md w-[90%]"
          >
            <Slider {...settings}>
              {project.images &&
                project.images.map((image, index) => (
                  <div key={index} className="mb-2 rounded-md ">
                    <Image
                      src={image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                ))}
            </Slider>
            <h2 className="text-lg font-bold mb-2" id="arabic">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-sm mb-4" id="swissra">
                {project.subtitle}
              </p>
            )}
            <button
              className="p-2 w-full custom-button rounded-md"
              onClick={onClose}
              id="arabic"
            >
              إغـــلاق
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
