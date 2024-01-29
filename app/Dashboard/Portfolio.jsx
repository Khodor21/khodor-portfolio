"use client";
import React, { useState } from "react";
import axios from "axios";

const PortfolioForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Design"); // Default category is "Design"

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
        "http://localhost:3001/api/portfolio",
        formData
      );

      console.log("Portfolio data submitted successfully!", response.data);
    } catch (error) {
      console.error("Error submitting portfolio data:", error);
    }
  };
  const handleImageChange = (e) => {
    setImage(Array.from(e.target.files)); // Store all selected files
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          multiple
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Design">Design</option>
          <option value="Web">Web</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PortfolioForm;
