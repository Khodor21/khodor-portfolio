"use client";
import React, { useState } from "react";
import axios from "axios";

const PortfolioForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Design");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      image.forEach((imgFile) => {
        formData.append("images", imgFile);
      });
      const response = await axios.post(
        "https://portfolio-backend2024.vercel.app/api/portfolio",
        formData,
      );

      console.log("Portfolio data submitted successfully!", response.data);
    } catch (error) {
      console.error("Error submitting portfolio data:", error);
    }
  };
  const handleImageChange = (e) => {
    setImage(Array.from(e.target.files));
  };
  return (
    <>
      <div className="lg:mx-20 md:mx-16 mx-10 border-t">
        <h3
          id="ibmbold"
          className="text-right text-third text-3xl md:text-4xl mt-4"
        >
          نشــــــــــــر تصميــــم
        </h3>
      </div>
      <form
        className="flex flex-col justify-end lg:mx-20 md:mx-16 mx-10 "
        onSubmit={handleSubmit}
      >
        <label className="text-right arabic text-third">
          <h3> العنوان</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right"
          />
        </label>
        <br />
        <label className="text-right arabic text-third">
          <h3 className="mb-2">الصور</h3>
          <input
            multiple
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-third text-main rounded shadow-2xl shadow-third w-full p-2 mt-2"
          />
        </label>
        <br />
        <label className="text-right arabic text-third">
          <h3> نوع المنشور</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl "
          >
            <option value="Design" className="text-right">
              تصميــــم
            </option>
            <option value="Web" className="text-right">
              برمــــــجة
            </option>
          </select>
        </label>
        <br />
        <button
          type="submit"
          className="custom-button py-2 px-4 rounded-md tracking-wide arabic"
        >
          إرســــــال
        </button>
      </form>
    </>
  );
};

export default PortfolioForm;
