"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaDownload, FaRegCopy } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const htmlcode = `<!DOCTYPE html>
<html lang="en">
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

    body {
      background-color: rgb(233, 233, 233);
      font-family: "Montserrat", sans-serif;
    }

    .netflix {
      width: 100vh;
      display: block;
      margin: auto;
    }
    .netflix1 {
      width: 100px;
    }
    .netflixFlex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50px;
      margin-top: 30px;
      background-color: rgb(19, 19, 19);
    }
    .exercice1,
    .exercice3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgb(248, 247, 247);
      margin: auto;
      width: 400px;
      height: 50vh;
      margin-top: 30px;
      border-radius: 6px;
    }

    .exerciceh1 {
      font-size: 24px;
      font-weight: 600;
      color: #333;
      width: 57%;
      text-align: left;
    }

    .button1 {
      width: 100%;
      background-color: #ee5684;
      color: white;
      padding: 8px 10px;
      border-radius: 12px;
      border: none;
      font-size: 16px;
      font-weight: 600;
    }
    .buttonN {
      background-color: rgb(179, 0, 0);
      color: rgb(245, 245, 245);
      border: none;
      padding: 4px 8px;
      border-radius: 2px;
    }
    .button1:hover {
      margin-top: 200px;
      cursor: pointer;
      background-color: #b63c61;
    }

    input {
      display: block;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-top: 2px;
      margin-bottom: 10px;
      width: 100%;
      height: 30px;
      padding: 6px;
      color: #ee5684;
    }

    input:focus {
      outline: none;
      border-color: #ee5684;
    }
    input::placeholder {
      color: #b9b9b9;
      font-size: 12px;
      padding: 6px;
    }

    label {
      font-size: 14px;
      font-weight: 500;
      color: #222222;
    }
    .p2 {
      text-align: center;
    }
    .button2 {
      width: 100%;
      background-color: #ee5684;
      color: white;
      padding: 8px 10px;
      border-radius: 12px;
      border: none;
      font-size: 16px;
      font-weight: 600;
    }
  </style>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Friday Exercices</title>
  </head>
  <body>
    <section>
      <h3 style="text-align: center; font-size: medium; margin-top: 20px">
        Exercice 1: Fix this login form
      </h3>
      <div class="exercice1">
        <h1 class="exerciceh1">Login Form</h1>
        <form action="">
          <label for="">Email</label>
          <input type="email" />
          <label for="">Password</label>
          <input type="password" />
          <button class="button1">Click Me!</button>
        </form>
      </div>
    </section>
    <section>
      <h3 style="text-align: center; font-size: medium; margin-top: 20px">
        Exercice 2: Fix this Signup form
      </h3>
      <div class="exercice3">
        <h1 class="exerciceh3">Signup Form</h1>
        <form action="">
          <label for="">Name</label>
          <input type="email" />
          <label for="">Birth Day</label>
          <input type="password" />
          <button type="submit" class="button3">Click Me!</button>
        </form>
      </div>
    </section>
    <section>
      <h3 style="text-align: center; font-size: medium; margin-top: 20px">
        Exercice 3: Style Is not working on the button
      </h3>
      <div class="exercice2">
        <p class="p2">Click this button</p>
        <button class="Button2">Click Me!</button>
      </div>
    </section>
    <section>
      <h3 style="text-align: center; font-size: medium; margin-top: 20px">
        Exercice 4: Make the flex same as the one in the image
      </h3>
      <img src="Flex-Netflix.jpg" class="netflix" alt="" />
      <div class="netflixFlex">
        <img class="netflix1" src="netflixLogo.png" alt="" />
        <select name="" id="">
          <option value="">English</option>
          <option value="">العربية</option>
        </select>
        <button class="buttonN">Signup</button>
      </div>
    </section>
  </body>
</html>
`;

const Page = () => {
  const [copied, setCopied] = useState(false);

  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/Logo%20Course.png?alt=media&token=4811b6ee-a2f0-4c00-9ff0-a468b9b33dd6",
      filename: "Logo Course.png",
      label: "Download Logo",
      downloadSrc:
        "https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/Logo%20Course.png?alt=media&token=4811b6ee-a2f0-4c00-9ff0-a468b9b33dd6",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/Banner%20Course.jpg?alt=media&token=29d4ac48-251c-4ab9-a3c0-4a1918e3d531",
      filename: "Banner Course.jpg",
      label: "Download Banner",
      downloadSrc:
        "https://firebasestorage.googleapis.com/v0/b/cloud-image-21153.appspot.com/o/Banner%20Course.jpg?alt=media&token=29d4ac48-251c-4ab9-a3c0-4a1918e3d531",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/alfnn-10.appspot.com/o/netflixLogo.png?alt=media&token=d74f7c7c-95b8-4195-a84b-5cf3aa31c2af",
      filename: "netflixLogo.png",
      label: "Download Netflix Logo",
      downloadSrc:
        "https://firebasestorage.googleapis.com/v0/b/alfnn-10.appspot.com/o/netflixLogo.png?alt=media&token=d74f7c7c-95b8-4195-a84b-5cf3aa31c2af",
    },
  ];

  const handleDownload = (src, filename) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(htmlcode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col items-center gap-10 p-10 min-h-screen bg-gray-100">
      {/* Images */}
      {images.map((image, index) => (
        <div key={index} className="text-center">
          <Image
            src={image.src}
            alt={image.filename}
            width={400}
            height={250}
            className="shadow-lg mb-4 rounded-lg"
          />
          <button
            onClick={() => handleDownload(image.downloadSrc, image.filename)}
            className="bg-[#da0f0f] hover:bg-[#b30b0b] text-white px-6 py-2 rounded transition-all"
          >
            <FaDownload className="inline mr-2" />
            {image.label}
          </button>
        </div>
      ))}

      {/* Code Block with Copy Button */}
      <div className="w-full max-w-5xl relative">
        <button
          onClick={handleCopy}
          className="absolute right-4 top-4 bg-gray-700 hover:bg-gray-600 text-white text-sm px-3 py-1 rounded flex items-center gap-1 z-10"
        >
          <FaRegCopy />
          {copied ? "Copied!" : "Copy Code"}
        </button>
        <SyntaxHighlighter
          language="html"
          style={oneDark}
          wrapLongLines
          customStyle={{
            borderRadius: "0.5rem",
            paddingTop: "3rem",
            paddingBottom: "2rem",
          }}
        >
          {htmlcode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Page;
