"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Doc({ params }) {
  const id = params.slug;
  const [project, setProject] = useState({});
  useEffect(() => {
    axios
      .get(`https://portfolio-backend2024.vercel.app/api/projects/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
      });
  }, [id]);
  return (
    <div className="text-right mb-10 lg:mx-[300px] md:mx-[200px] mx-10">
      <h1 id="arabic" className="mt-10 text-3xl text-third">
        {project.title}{" "}
      </h1>
      <h5 className="text-md mt-4 text-third/70 changa">{project.overview} </h5>
      {project.images && project.images.length > 0 && (
        <Image
          width={400}
          height={400}
          src={project.images[0].imagesUrl}
          alt="Project image"
          className="mx-auto mt-2"
        />
      )}{" "}
      <div>
        <h1 className="mt-8 text-third text-2xl changa">نظرة عامّة</h1>

        <div className="mt-3 changa text-third/70">
          <ul className="list-none space-y-2 md:space-y-1">
            {project.main &&
              project.main.map((item) => (
                <li key={item._id}>{item.description}</li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h1 className="mt-8 text-third text-2xl changa">
          التقنيات الأساسية المُستخدمة
        </h1>
      </div>
      <div className="mt-3 flex flex-col gap-2 justify-end items-end text-2xl">
        {project?.technologies?.map((technology) => (
          <div key={technology._id} className="flex items-center gap-4">
            <h4 className="text-base changa text-third/70">
              {technology.description}
            </h4>{" "}
            <img
              src={technology.icon}
              alt={technology.description}
              width={28}
              height={28}
              className="m-2 flex justify-center items-center"
            />
          </div>
        ))}
      </div>
      {project.features &&
        project.features.map((feature) => (
          <>
            {" "}
            <h1 className="mt-8 text-third text-2xl changa">{feature.title}</h1>
            <h4 className="text-base changa text-third/70 mt-4">
              {feature.description}
            </h4>
          </>
        ))}
    </div>
  );
}
