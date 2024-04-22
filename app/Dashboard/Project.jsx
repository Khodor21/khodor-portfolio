"use client";
import React, { useState } from "react";
import axios from "axios";

const Project = () => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [image, setImage] = useState(null);
  const [main, setMain] = useState([{ description: "" }]);
  const [features, setFeatures] = useState([{ title: "", description: "" }]);
  const [technologies, setTechnologies] = useState([
    { icon: "", description: "" },
  ]);

  // Feature Functions
  const handleFeatureChange = (event, index) => {
    const updatedFeatures = [...features]; // Create a copy of the features array
    updatedFeatures[index] = {
      ...updatedFeatures[index],
      [event.target.name]: event.target.value,
    };
    setFeatures(updatedFeatures); // Update the state with the modified array
  };

  const handleAddFeature = () => {
    setFeatures([...features, { title: "", description: "" }]);
  };

  const handleRemoveFeature = (index) => {
    if (features.length > 1) {
      const updatedFeatures = [...features];
      updatedFeatures.splice(index, 1);
      setFeatures(updatedFeatures);
    }
  };

  //Main Functions

  const handleMainChange = (event, index) => {
    const updatedMain = [...main];
    updatedMain[index] = {
      ...updatedMain[index],
      [event.target.name]: event.target.value,
    };
    setMain(updatedMain);
  };

  const handleAddMain = () => {
    setMain([...main, { description: "" }]);
  };

  const handleRemoveMain = (index) => {
    if (main.length > 1) {
      const updatedMain = [...main];
      updatedMain.splice(index, 1);
      setMain(updatedMain);
    }
  };

  // Technologies Functions

  const handleTechnologieChange = (event, index) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies[index] = {
      ...updatedTechnologies[index],
      [event.target.name]: event.target.value,
    };
    setTechnologies(updatedTechnologies);
  };

  const handleAddTechnologie = () => {
    setTechnologies([...technologies, { icon: "", description: "" }]);
  };

  const handleRemoveTechnologie = (index) => {
    if (technologies.length > 1) {
      const updatedTechnologies = [...technologies];
      updatedTechnologies.splice(index, 1);
      setTechnologies(updatedTechnologies);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("overview", overview);
    const featuresJson = features.length > 0 ? JSON.stringify(features) : null;
    formData.append("features", featuresJson);
    const technologiesJson =
      technologies.length > 0 ? JSON.stringify(technologies) : null;
    formData.append("technologies", technologiesJson);
    const mainJson = main.length > 0 ? JSON.stringify(main) : null;
    formData.append("main", mainJson);
    image?.forEach((imgFile) => {
      formData.append("images", imgFile);
    });

    try {
      const response = await axios.post(
        "http://localhost:3001/api/projects",
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="text-second justify-start gap-4">
        Title:
        <input
          className="border-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="text-second justify-start gap-4">
        Overview:
        <input
          className="border-2"
          type="text"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />
      </label>

      {/* Features Section */}
      <h2>Features</h2>
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col gap-2 mb-4">
          <label>Feature {index + 1}:</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Title"
              value={feature.title}
              name="title"
              onChange={(e) => handleFeatureChange(e, index)} // Pass the index
            />
            <input
              type="text"
              placeholder="Description"
              value={feature.description}
              name="description"
              onChange={(e) => handleFeatureChange(e, index)} // Pass the index
            />
            {features.length > 1 && (
              <button onClick={() => handleRemoveFeature(index)}>Remove</button>
            )}
          </div>
        </div>
      ))}
      <button
        onClick={handleAddFeature}
        className="bg-second rounded text-main"
      >
        Add Feature
      </button>
      {/* Technologies Section */}
      <h2>Technologies</h2>
      {technologies.map((technologie, index) => (
        <div key={index} className="flex flex-col gap-2 mb-4">
          <label>Technologies {index + 1}:</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Icon Url"
              value={technologie.icon}
              name="icon"
              onChange={(e) => handleTechnologieChange(e, index)}
            />
            <input
              type="text"
              placeholder="Description"
              value={technologie.description}
              name="description"
              onChange={(e) => handleTechnologieChange(e, index)}
            />
            {technologies.length > 1 && (
              <button onClick={() => handleRemoveTechnologie(index)}>
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
      <button
        onClick={handleAddTechnologie}
        className="bg-second rounded text-main"
      >
        Add Technology
      </button>

      {/* Main Section */}
      <h2>Main Sections</h2>
      {main.map((mainn, index) => (
        <div key={index} className="flex flex-col gap-2 mb-4">
          <label>Main Sections {index + 1}:</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Description"
              value={mainn.description}
              name="description"
              onChange={(e) => handleMainChange(e, index)}
            />
            {main.length > 1 && (
              <button onClick={() => handleRemoveMain(index)}>Remove</button>
            )}
          </div>
        </div>
      ))}
      <button onClick={handleAddMain} className="bg-second rounded text-main">
        Add Main Section
      </button>

      <label>
        Image:
        <input
          multiple
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <button className="bg-second rounded text-main" type="submit">
        <p className="m-2">Submit</p>
      </button>
    </form>
  );
};

export default Project;
