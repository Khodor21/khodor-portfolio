"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MyInstagramDesigns from "../assets/Instagram Post.jpg";
import DentalInstagramDesign from "../assets/Instagram post1.jpg";
import DietitianInstagramDesign from "../assets/Instagram post2.jpg";

const items = [
  {
    id: 1,
    title: "@khodorD تصــــاميــم لحساب",
    image: MyInstagramDesigns,
    subtitle: "Subtitle 1",
  },
  {
    id: 2,
    title: "@sana_10 تصــــاميــم لحساب",
    image: DentalInstagramDesign,
    subtitle: "Subtitle 2",
  },
  {
    id: 3,
    title: "@sana_10 تصــــاميــم لحساب",
    image: DietitianInstagramDesign,
    subtitle: "Subtitle 3",
  },
];

const Modal = ({ item, onClose }) => (
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
      className="p-4 rounded-md bg-white"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={200}
        className="mb-2 rounded-md"
      />
      <motion.h2 className="text-lg font-bold" id="arabic">
        {item.title}
      </motion.h2>
      <AnimatePresence>
        {item.subtitle && (
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm"
            id="swissra"
          >
            {item.subtitle}
          </motion.h5>
        )}
      </AnimatePresence>
      <motion.button
        className="mt-2 px-4 py-2 bg-blue-500 text-third rounded-md hover:bg-blue-600 focus:outline-none focus:ring "
        onClick={onClose}
      >
        Close
      </motion.button>
    </motion.div>
  </motion.div>
);

const Page = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center items-center">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          className="p-4 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => setSelectedId(item.id)}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={200}
            className="rounded-md mx-auto"
          />
          <h2 className="text-lg font-bold mb-4" id="arabic">
            {item.title}
          </h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
