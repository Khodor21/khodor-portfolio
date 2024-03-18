"use client";
import React, { useState } from "react";
import axios from "axios";

const ProjectPostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      image.forEach((imgFile) => {
        formData.append("images", imgFile);
      });
      const response = await axios.post(
        "https://portfolio-backend2024.vercel.app/api/projects",
        formData
      );

      console.log("Project data submitted successfully!", response.data);
    } catch (error) {
      console.error("Error submitting project data:", error);
    }
  };
  const handleImageChange = (e) => {
    setImage(Array.from(e.target.files));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2"
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

      <br />
      <button type="submit" className="m-2 bg-slate-500 text-white">
        Submit
      </button>
    </form>
  );
};

export default ProjectPostForm;
