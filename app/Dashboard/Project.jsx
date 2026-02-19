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
        "https://portfolio-backend2024.vercel.app/api/projects",
        formData,
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
    <>
      <div className="lg:mx-20 md:mx-16 mx-10 mt-10 border-t">
        <h3
          id="ibmbold"
          className="text-right text-third text-3xl md:text-4xl mt-4"
        >
          نشــــــــــــر تفاصــــيل مشــــروع
        </h3>
      </div>
      <form
        className="flex flex-col gap-4 mt-6 lg:mx-20 md:mx-16 mx-10"
        onSubmit={handleSubmit}
      >
        <label className="text-right arabic text-third flex flex-col gap-2">
          العنوان
          <input
            className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="text-right arabic text-third">
          نظــرة سريعة
          <input
            className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right"
            type="text"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
        </label>

        {/* Features Section */}
        <h2 className="text-right arabic text-third">المميـــــزات</h2>
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-2 mb-4">
            <label className="text-right arabic text-third">
              الميزة {index + 1}
            </label>
            <div className="flex justify-end gap-2" id="arabic">
              <input
                type="text"
                placeholder="الوصف"
                value={feature.description}
                name="description"
                onChange={(e) => handleFeatureChange(e, index)}
                className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right placeholder:ibmsemi"
              />
              <input
                className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right placeholder:ibmsemi"
                type="text"
                placeholder="العنوان"
                value={feature.title}
                name="title"
                onChange={(e) => handleFeatureChange(e, index)}
              />
              {features.length > 1 && (
                <button
                  className="text-[#b33232] ibmsemi"
                  onClick={() => handleRemoveFeature(index)}
                >
                  إزالــة
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          onClick={handleAddFeature}
          className="bg-second rounded text-main arabic mx-1"
        >
          إضــــافة ميــزة
        </button>
        {/* Technologies Section */}
        <h2 className="text-right arabic text-third">التقنيــــات</h2>
        {technologies.map((technologie, index) => (
          <div key={index} className="flex flex-col gap-2 mb-4">
            <label className="text-right arabic text-third">
              القنية {index + 1}
            </label>
            <div className="flex justify-end gap-2" id="arabic">
              <input
                className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right placeholder:ibmsemi"
                type="text"
                placeholder="الوصف"
                value={technologie.description}
                name="description"
                onChange={(e) => handleTechnologieChange(e, index)}
              />
              <input
                className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right placeholder:ibmsemi"
                type="text"
                placeholder="رابط الأيقونة"
                value={technologie.icon}
                name="icon"
                onChange={(e) => handleTechnologieChange(e, index)}
              />
              {technologies.length > 1 && (
                <button
                  className="text-[#b33232] ibmsemi"
                  onClick={() => handleRemoveTechnologie(index)}
                >
                  إزالــة
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          onClick={handleAddTechnologie}
          className="bg-second rounded text-main arabic mx-1"
        >
          إضــــافة تقنــــية
        </button>

        {/* Main Section */}
        <h2 className="text-right arabic text-third">الفقرات الأساسية</h2>
        {main.map((mainn, index) => (
          <div key={index} className="flex flex-col gap-2 mb-4" id="arabic">
            <label className="text-right arabic text-third">
              الفقرة {index + 1}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="الوصف"
                value={mainn.description}
                name="description"
                onChange={(e) => handleMainChange(e, index)}
                className="w-full p-2 mt-2 border border-third rounded-sm shadow-xl  placeholder:text-third/50 placeholder:text-right placeholder:ibmsemi"
              />
              {main.length > 1 && (
                <button
                  className="text-[#b33232] ibmsemi"
                  onClick={() => handleRemoveMain(index)}
                >
                  إزالــة
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          onClick={handleAddMain}
          className="bg-second rounded text-main arabic mx-1"
        >
          إضــــافة الفقــرات
        </button>

        <label className="text-right arabic text-third">
          إضــــافة الصورة
          <input
            multiple
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-third text-main rounded shadow-2xl shadow-third w-full p-2 mt-2"
          />
        </label>
        <button className="bg-second rounded text-main" type="submit">
          <p className="m-2">Submit</p>
        </button>
      </form>
    </>
  );
};

export default Project;
