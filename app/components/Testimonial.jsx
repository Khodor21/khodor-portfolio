"use client";
import React, { Component } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import TestimonialTitle from "../assets/TestimonialTitle.svg";
import Boss from "../assets/boss.png";
import Hijabi from "../assets/hijab.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TestimonialCard = ({ text, image }) => {
  return (
    <div className="bg-main rounded-sm text-third p-4 w-72 h-52 text-center">
      <Image
        src={image}
        layout="/"
        alt="User"
        priority
        className="w-12 mx-auto bg-third p-2 rounded-full "
      />
      <p
        id="poppins"
        className="flex justify-center items-center mt-4 mb-2 py-2 px-2 text-third w-fit mx-auto rounded-full"
      >
        <BiSolidQuoteAltLeft />{" "}
      </p>
      <h3 id="ibmsemi" className="my-2">
        {text}
      </h3>
    </div>
  );
};

export default class Responsive extends Component {
  render() {
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
              src={TestimonialTitle}
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

        <div className="w-[75%] ">
          <Slider {...settings} className="py-8 w-full">
            <TestimonialCard
              image={Boss}
              text="توفيق هو مصمم ومطور مدهش! أنا سعيد جدًا بالعمل معه وسيكون دائمًا اختياري الأول في المستقبل."
            />
            <TestimonialCard
              image={Boss}
              text="خبرة رائعة! أحب كيف يجمع توفيق بين الإبداع والكفاءة في تطوير البرمجيات. لقد قدم لنا حلاً فعالاً وجميلاً."
            />
            <TestimonialCard
              image={Boss}
              text="مهندس موهوب ومبدع! استمتعت بكل لحظة في التعاون مع توفيق. إنه يجعل كل شيء يبدو سهلاً ومذهلاً."
            />
            <TestimonialCard
              image={Hijabi}
              text="لا يوجد أفضل من توفيق! إنه يفهم تمامًا احتياجات العميل ويقدم حلاً فعّالاً ومتميزاً. شكراً لك!"
            />
          </Slider>
        </div>
      </div>
    );
  }
}
