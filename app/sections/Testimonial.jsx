// "use client";
// import React, { useState, useEffect } from "react";
// import { BiSolidQuoteAltLeft } from "react-icons/bi";
// import Finger from "../assets/images/Finger.svg";
// import TestimonialTitle from "../assets/images/TestimonialTitle.svg";
// import TestimonialTitle1 from "../assets/images/TestimonialTitle1Star.svg";
// import TestimonialTitle2 from "../assets/images/TestimonialTitle2Star.svg";
// import TestimonialTitle3 from "../assets/images/TestimonialTitle3Star.svg";
// import Boss from "../assets/images/boss.png";
// import Boss1 from "../assets/images/boss 1.png";
// import Hijabi from "../assets/images/hijab.png";
// import Hijabi1 from "../assets/images/hijab 1.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const TestimonialCard = ({ text, image, name }) => {
//   return (
//     <div className="bg-main rounded-sm text-third p-4 w-72 h-64 mx-auto text-center shadow-md shadow-main">
//       <Image
//         src={image}
//         layout="/"
//         alt="User"
//         priority
//         className="w-12 mx-auto bg-third p-2 rounded-full "
//       />
//       <p className="text-third/60 text-center text-sm mt-2" id="arabic">
//         {name}
//       </p>
//       <div
//         id="poppins"
//         className="flex justify-center items-center mt-4 mb-2 py-2 px-2 text-third w-fit mx-auto rounded-full"
//       >
//         <BiSolidQuoteAltLeft />{" "}
//       </div>
//       <h3 id="ibmsemi" className="my-2">
//         {text}
//       </h3>
//     </div>
//   );
// };

// const Responsive = () => {
//   const [currentImage, setCurrentImage] = useState(TestimonialTitle);
//   const [message, setMessage] = useState("");
//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(
//         "https://portfolio-backend2024.vercel.app/api/testimonial",
//         {
//           message,
//         }
//       );

//       setMessage("");
//       if (response.status === 200) {
//         toast.success("شكراً لمشاركة رأيك ");
//       } else {
//         toast.error("الرجاء التأكّد من ملأ الرسالة");
//       }
//     } catch (error) {
//       toast.error("الرجاء التأكّد من ملأ الرسالة");
//     }
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImage((prevImage) => {
//         switch (prevImage) {
//           case TestimonialTitle:
//             return TestimonialTitle1;
//           case TestimonialTitle1:
//             return TestimonialTitle2; // Change to the next image
//           case TestimonialTitle2:
//             return TestimonialTitle3; // Change to the next image
//           case TestimonialTitle3:
//             return TestimonialTitle; // Cycle back to the first image
//           default:
//             return TestimonialTitle;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(intervalId); // Clear interval on component unmount
//   }, []);

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1048,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 830,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           infinite: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div
//       id="testimonial"
//       className="flex flex-col justify-center items-center text-center bg-third  "
//     >
//       <ToastContainer />

//       <div>
//         {" "}
//         <div className="">
//           <Image
//             src={currentImage}
//             priority
//             alt="Services Title"
//             className="w-[20rem] md:w-[28rem] mx-4"
//           />
//         </div>
//         <h3
//           className="mb-6 mt-2 text-main text-center mx-6 md:text-lg"
//           id="ibmsemi"
//         >
//           قصص نجاح: إلهام يعكس تأثيرنا الإيجابي{" "}
//         </h3>
//       </div>

//       <div className="w-[85%] ">
//         <Slider {...settings} className="py-8 w-full">
//           <TestimonialCard
//             name="محمد علي - مطور برمجيات"
//             image={Boss}
//             text="خضر مصمم ومطور مبدع! أنا سعيد جدًا بالعمل معه وسيكون دائمًا اختياري الأول في المستقبل"
//           />
//           <TestimonialCard
//             name=" فاطمة عبدالله - مصممة جرافيك"
//             image={Hijabi1}
//             text="تجربة رائعة! أحب كيف جمعت بين الإبداع والكفاءة في تطوير موقعي"
//           />
//           <TestimonialCard
//             name="عبدالرحمن محمود - طبيب أسنان"
//             image={Boss1}
//             text="مبرمج موهوب ومبدع! استمتعت بكل لحظة في التعاون مع خضر. إنه يجعل كل شيء يبدو سهلاً ومذهلاً"
//           />
//           <TestimonialCard
//             name="ليلى مسدد -  صاحبة مشروع"
//             image={Hijabi}
//             text="لا يوجد أفضل! تفهم تمامًا احتياجات العميل وتقدم حلاً فعّالاً ومتميزاً. شكراً لك"
//           />
//         </Slider>
//       </div>
//       <div className="mb-4 mt-10 flex flex-col gap-2" id="ibmsemi">
//         <label htmlFor="name" className="text-white text-xl">
//           إذا تحــــب تحـــط رأيــــك
//         </label>
//         <div className="flex flex-row-reverse gap-2">
//           {" "}
//           <input
//             value={message} // Add this line
//             onChange={(e) => setMessage(e.target.value)}
//             type="text"
//             id="name"
//             name="name"
//             placeholder=" اسمك هنا مع الرسالة"
//             className="w-[75vw] text-right p-2 mt-2 border border-third rounded-md shadow-[#0e0e0e] shadow-lg  placeholder:text-third/50 placeholder:text-right"
//           />
//           <Image
//             src={Finger}
//             alt="Finger"
//             priority
//             layout="/"
//             className="w-[48px]  finger"
//           />{" "}
//         </div>
//         <button
//           id="ibmbold"
//           onClick={handleSubmit}
//           className="bg-white text-second p-2 rounded-md mt-4 w-[50%] mx-auto"
//         >
//           أرســل رأيــــك
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Responsive;
import React from "react";

const Testimonial = () => {
  return <div>Testimonial</div>;
};

export default Testimonial;
