"use client";
import React, { Component } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import TestimonialTitle from "../assets/TestimonialTitle.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TestimonialCard = ({ text }) => {
  return (
    <div className="bg-main rounded-sm text-third p-4 w-72 h-48">
      <h3 id="ibmsemi" className="my-2 mx-4">
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
    };

    return (
      <div className="text-center bg-third ">
        <div className="flex justify-end">
          <Image
            src={TestimonialTitle}
            priority
            alt="Services Title"
            className="w-[20rem] md:w-[28rem] mx-4"
          />
        </div>

        <h3
          className="mb-6 mt-2 text-third text-right mx-6 md:text-lg"
          id="ibmsemi"
        >
          قصص نجاح: إلهام يعكس تأثيرنا الإيجابي{" "}
        </h3>
        <p
          id="poppins"
          className="flex justify-center items-center py-6 text-white text-3xl"
        >
          <BiSolidQuoteAltLeft />{" "}
        </p>
        <Slider
          {...settings}
          className="py-8 mx-auto w-[85%] flex justify-center items-center gap-8"
        >
          <TestimonialCard text="توفيق هو مصمم ومطور مدهش! أنا سعيد جدًا بالعمل معه وسيكون دائمًا اختياري الأول في المستقبل." />
          <TestimonialCard text="خبرة رائعة! أحب كيف يجمع توفيق بين الإبداع والكفاءة في تطوير البرمجيات. لقد قدم لنا حلاً فعالاً وجميلاً." />
          <TestimonialCard text="مهندس موهوب ومبدع! استمتعت بكل لحظة في التعاون مع توفيق. إنه يجعل كل شيء يبدو سهلاً ومذهلاً." />
          <TestimonialCard text="لا يوجد أفضل من توفيق! إنه يفهم تمامًا احتياجات العميل ويقدم حلاً فعّالاً ومتميزاً. شكراً لك!" />
        </Slider>
      </div>
    );
  }
}
