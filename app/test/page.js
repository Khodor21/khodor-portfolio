"use client";
import React, { useState } from "react";
import axios from "axios";

const ProjectFeatures = () => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");

  const [main, setMain] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [features, setFeatures] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const title = formData.get("title"); // Assuming title input has name="title"
      const overview = formData.get("view"); // Assuming overview textarea has name="view"
      image.forEach((imgFile) => {
        formData.append("image", imgFile);
      });
      const remainingData = { features, main, technologies };

      const response = await axios.post("http://localhost:3001/api/projects", {
        ...remainingData,
        title,
        overview,
        image,
      });

      console.log(response.data); // Handle successful response
    } catch (error) {
      console.error(error); // Handle errors
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleFeatureChange = (index, event) => {
    const updatedFeatures = [...features];
    updatedFeatures[index][event.target.name] = event.target.value;
    setFeatures(updatedFeatures);
  };

  const handleAddFeature = () => {
    setFeatures([...features, { title: "", description: "" }]);
  };

  const handleRemoveFeature = (index) => {
    const updatedFeatures = [...features];
    updatedFeatures.splice(index, 1);
    setFeatures(updatedFeatures);
  };

  const handleMainChange = (index, event) => {
    const updatedMain = [...main];
    updatedMain[index][event.target.name] = event.target.value;
    setMain(updatedMain);
  };

  const handleAddMain = () => {
    setMain([...main, { description: "" }]);
  };

  const handleRemoveMain = (index) => {
    const updatedMain = [...main];
    updatedMain.splice(index, 1);
    setMain(updatedMain);
  };

  const handleTechnologiesChange = (index, event) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies[index][event.target.name] = event.target.value;
    setTechnologies(updatedTechnologies);
  };

  const handleAddTechnologies = () => {
    setTechnologies([...technologies, { icon: "", description: "" }]);
  };

  const handleRemoveTechnologies = (index) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies.splice(index, 1);
    setTechnologies(updatedTechnologies);
  };

  const handleImageChange = (e) => {
    setImage(Array.from(e.target.files));
  };

  return (
    <div className="container mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {isSubmitting && <p>Submitting...</p>}
        <h2 className="text-xl font-bold">Project Features</h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Arabic Title</label>
          <input
            type="text"
            id="title"
            className="border border-gray/30 rounded px-3 py-2"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="view">Arabic Overview</label>
          <textarea
            id="view"
            className="border border-gray/30 rounded px-3 py-2"
            name="view"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
        </div>
        <label>
          Image:
          <input
            multiple
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        {/* Features, Main, Technologies sections with similar structure */}
        <div className="flex flex-col space-y-2">
          <h3>Features</h3>
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4 items-center">
              <input
                type="text"
                name="title"
                placeholder="Feature Title"
                value={feature.title}
                onChange={(e) => handleFeatureChange(index, e)}
                className="border border-gray/30 rounded px-3 py-2 flex-grow"
              />
              <input
                type="text"
                name="description"
                placeholder="Feature Description"
                value={feature.description}
                onChange={(e) => handleFeatureChange(index, e)}
                className="border border-gray rounded px-3 py-2 flex-grow"
              />
              <button
                type="button"
                onClick={() => handleRemoveFeature(index)}
                className="text-red/50 hover:text-red/70 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddFeature}
            className="text-blue/50 hover:text-blue/70 focus:outline-none"
          >
            Add Feature
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          <h3>Main</h3>
          {main.map((mainSingle, index) => (
            <div key={index} className="flex space-x-4 items-center">
              <input
                type="text"
                name="description"
                placeholder="Main Description"
                value={mainSingle.description}
                onChange={(e) => handleMainChange(index, e)}
                className="border border-gray rounded px-3 py-2 flex-grow"
              />
              <button
                type="button"
                onClick={() => handleRemoveMain(index)}
                className="text-red/50 hover:text-red/70 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMain}
            className="text-blue/50 hover:text-blue/70 focus:outline-none"
          >
            Add Main
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          <h3>Technologies</h3>
          {technologies.map((technologie, index) => (
            <div key={index} className="flex space-x-4 items-center">
              <input
                type="link"
                name="icon"
                placeholder="Icon Link"
                value={technologie.icon}
                onChange={(e) => handleTechnologiesChange(index, e)}
                className="border border-gray/30 rounded px-3 py-2 flex-grow"
              />
              <input
                type="text"
                name="description"
                placeholder="Technologie Description"
                value={technologie.description}
                onChange={(e) => handleTechnologiesChange(index, e)}
                className="border border-gray rounded px-3 py-2 flex-grow"
              />
              <button
                type="button"
                onClick={() => handleRemoveTechnologies(index)}
                className="text-red/50 hover:text-red/70 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTechnologies}
            className="text-blue/50 hover:text-blue/70 focus:outline-none"
          >
            Add Technologies
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue/50 text-white hover:bg-blue/70 font-bold py-2 px-4 rounded"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectFeatures;
