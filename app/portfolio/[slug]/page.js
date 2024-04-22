"use client";
import { useState, useEffect } from "react";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaNpm } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import axios from "axios";
import Image from "next/image";

export default function Doc({ params }) {
  const id = params.slug;
  const [project, setProject] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projects/${id}`)
      .then((response) => {
        setProject(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
      });
  }, [id]);
  return (
    <div className="text-right mb-10 lg:mx-[300px] md:mx-[200px] mx-10">
      {/* title */}
      <h1 id="arabic" className="mt-10 text-3xl text-third">
        مركز ألمـــاس لطبّ الأسنان
      </h1>
      <h5 className="text-md mt-4 text-third/70 changa">
        استمتع بتجربة حجز موعد سريعة وبسيطة عبر موقع مركز ألماس الإلكتروني. تعرف
        على فريق أطبائنا الخبراء وخدماتنا الشاملة، كل ذلك وأنت في راحة منزلك
      </h5>
      {/* imageUrl */}
      {project.images && project.images.length > 0 && (
        <Image
          width={400}
          height={400}
          src={project.images[0].imagesUrl}
          alt="Project image"
          className="mx-auto mt-2"
        />
      )}{" "}
      {/*Overview*/}
      <div>
        <h1 className="mt-8 text-third text-2xl changa">نظرة عامّة</h1>
        <div className="list-none space-y-2 md:space-y-1 mt-3 changa text-third/70">
          <li>يعمل على جميع الشاشات بشكل جذَاب من جميع أنحاء العالم</li>
          <li>يستهدف جميع الفئات العمرية، لا يحتوي على أي محتوى +18 -</li>
          <li>سُرعة في الاستجابة، لا داعي للانتظار لتحميل صفحات الموقع -</li>
        </div>
      </div>
      <div className="flex flex-col gap-2 changa space-y-2 md:space-y-1 text-third/70">
        <p> {project.featureOne}</p>
        <p> {project.featureTwo}</p>
        <p> {project.featureThree}</p>
      </div>
      {/* Technologies */}
      <div>
        <h1 className="mt-8 text-third text-2xl changa">
          التقنيات الأساسية المُستخدمة
        </h1>
        <div className="mt-3 flex flex-col justify-end items-end text-2xl gap-6 ">
          <div className="flex items-center gap-4">
            <h4 className="text-base changa text-third/70">
              إطار عمل متطور لبناء مواقع ويب تفاعلية وسريعة التحميل، يمنحك تجربة
              مستخدم سلسة على جميع الأجهزة
            </h4>{" "}
            <div className="bg-third text-main rounded-full h-fit w-fit">
              <SiNextdotjs className="m-2" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {" "}
            <h4 className="text-base changa text-third/70">
              أداة قوية لتصميم واجهات مستخدم جذابة وسهلة الاستخدام، توفر لك
              تحكمًا دقيقًا في مظهر موقعك.
            </h4>{" "}
            <div className="bg-third text-main rounded-full h-fit w-fit">
              <FaNpm className="m-2" />
            </div>
          </div>
          <div className="bg-third text-main rounded-full w-fit">
            <FaNodeJs className="m-2" />
          </div>
          <div className="bg-third text-main rounded-full w-fit">
            <TbBrandFramerMotion className="m-2" />
          </div>
        </div>
      </div>
      {/*Button*/}
      <h1 className="mt-8 text-third text-2xl changa">
        {" "}
        حجز ابتسامة من نقرة واحدة فقط
      </h1>
      <div>
        <h4 className="text-base changa text-third/70">
          يوفر الموقع طريقة حجز موعد سلسة وسهلة وسريعة{" "}
        </h4>
      </div>
      {/*Blog*/}
      <h1 className="mt-8 text-third text-2xl changa">
        {" "}
        بوابة المعرفة الطبية: مقالات توعوية لابتسامة صحية
      </h1>
      <div>
        <h4 className="text-base changa text-third/70">
          نهدف من خلال هذا القسم إلى تقديم مقالات توعوية موثوقة حول مواضيع
          متنوعة تتعلق بصحة الفم والأسنان، ونحرص على عرض المعلومات بأسلوب سهل
          وبسيط يفيد جميع أفراد العائلة
        </h4>
      </div>
      {/*Map*/}
      <h1 className="mt-8 text-third text-2xl changa">
        {" "}
        ابتسامتك على بعد خطوات: رحلة سهلة إلى عيادتنا
      </h1>
      <div>
        <h4 className="text-base changa text-third/70">
          نوفر لك خريطة تفاعلية تُسهل عليك الوصول إلى عيادتنا بسهولة وسرعة، مع
          إمكانية تحديد موقعك الحالي ورسم مسار رحلتك بدقة.
        </h4>
      </div>
      {/*Fourth Section*/}
      <h1 className="mt-8 text-third text-2xl changa">
        تواصل معنا بسهولة واحصل على ابتسامتك المثالية
      </h1>
      <div>
        <h4 className="text-base changa text-third/70">
          نوفر لك العديد من قنوات التواصل المتنوعة، مثل: الفيسبوك، البريد
          الإلكتروني: و الحسابات الاجتماعيّة
        </h4>
      </div>
    </div>
  );
}
