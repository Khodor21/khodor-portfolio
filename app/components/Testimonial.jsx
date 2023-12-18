"use client";
import React, { useState, useEffect } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import TestimonialTitle from "../assets/TestimonialTitle.svg";
import TestimonialTitle1 from "../assets/TestimonialTitle1Star.svg";
import TestimonialTitle2 from "../assets/TestimonialTitle2Star.svg";
import TestimonialTitle3 from "../assets/TestimonialTitle3Star.svg";
import Boss from "../assets/boss.png";
import Hijabi from "../assets/hijab.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TestimonialCard = ({ text, image, name }) => {
  return (
    <div className="bg-main rounded-sm text-third p-4 w-72 h-64 mx-auto text-center">
      <Image
        src={image}
        layout="/"
        alt="User"
        priority
        className="w-12 mx-auto bg-third p-2 rounded-full "
      />
      <p className="text-third/60 text-center text-sm mt-2" id="arabic">
        {name}
      </p>
      <div
        id="poppins"
        className="flex justify-center items-center mt-4 mb-2 py-2 px-2 text-third w-fit mx-auto rounded-full"
      >
        <BiSolidQuoteAltLeft />{" "}
      </div>
      <h3 id="ibmsemi" className="my-2">
        {text}
      </h3>
    </div>
  );
};

const Responsive = () => {
  const [currentImage, setCurrentImage] = useState(TestimonialTitle);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        switch (prevImage) {
          case TestimonialTitle:
            return TestimonialTitle1;
          case TestimonialTitle1:
            return TestimonialTitle2; // Change to the next image
          case TestimonialTitle2:
            return TestimonialTitle3; // Change to the next image
          case TestimonialTitle3:
            return TestimonialTitle; // Cycle back to the first image
          default:
            return TestimonialTitle;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1048,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center text-center bg-third  ">
      <div>
        {" "}
        <div className="">
          <Image
            src={currentImage}
            priority
            alt="Services Title"
            className="w-[20rem] md:w-[28rem] mx-4"
          />
        </div>
        <h3
          className="mb-6 mt-2 text-main text-center mx-6 md:text-lg"
          id="ibmsemi"
        >
          قصص نجاح: إلهام يعكس تأثيرنا الإيجابي{" "}
        </h3>
      </div>

      <div className="w-[85%] ">
        <Slider {...settings} className="py-8 w-full">
          <TestimonialCard
            name="خضر حسن-مبرمج صوتيات"
            image={Boss}
            text="توفيق هو مصمم ومطور مدهش! أنا سعيد جدًا بالعمل معه وسيكون دائمًا اختياري الأول في المستقبل."
          />
          <TestimonialCard
            name="خضر حسن-مبرمج صوتيات"
            image={Boss}
            text="خبرة رائعة! أحب كيف يجمع توفيق بين الإبداع والكفاءة في تطوير البرمجيات. لقد قدم لنا حلاً فعالاً وجميلاً."
          />
          <TestimonialCard
            name="خضر حسن-مبرمج صوتيات"
            image={Boss}
            text="مهندس موهوب ومبدع! استمتعت بكل لحظة في التعاون مع توفيق. إنه يجعل كل شيء يبدو سهلاً ومذهلاً."
          />
          <TestimonialCard
            name="خضر حسن-مبرمج صوتيات"
            image={Hijabi}
            text="لا يوجد أفضل من توفيق! إنه يفهم تمامًا احتياجات العميل ويقدم حلاً فعّالاً ومتميزاً. شكراً لك!"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Responsive;
