import TannourineBanner from "../assets/images/Tannourine Cover.mp4";
import Water1 from "../assets/images/Water 1.jpg";
import Water2 from "../assets/images/Water 2.jpg";
import Water3 from "../assets/images/Water 3.jpg";
import Water4 from "../assets/images/Water 4.jpg";
import Water5 from "../assets/images/Water 5.jpg";
import Water6 from "../assets/images/Water 6.jpg";

import BannerDental from "../assets/images/Al Najat.mp4";
import ImageOne from "../assets/images/Dental-One.jpg";
import ImageTwo from "../assets/images/Dental-Two.jpg";
import ImageThree from "../assets/images/Dental-Three.jpg";
import alnajatDetails1 from "../assets/images/Al Najat Colors.jpg";
import alnajatDetails2 from "../assets/images/Al Najat Highlights.jpg";

import Hospital1 from "../assets/images/Hospital Design - 1.jpg";
import Hospital2 from "../assets/images/Hospital Design - 2.jpg";
import Hospital3 from "../assets/images/Hospital Design - 3.jpg";
import Hospital4 from "../assets/images/Hospital Design - 5.jpg";
import Hospital5 from "../assets/images/Hospital Design - 4.jpg";

export const data = [
  {
    id: 1,
    title: "Social media designs for a Dental Clinic",
    category: "Design",
    company: "Al Najat Dental Clinic, Kuwait",
    description:
      "Al Najat Dental Clinic needed a fresh visual identity to better represent their modern dental practice on social media. Our mission was to enhance clarity, professionalism, and patient trust through design.",

    imageCover: ImageThree,
    isVideo: true,
    images: [ImageOne, ImageTwo, ImageThree],
    details: [alnajatDetails1, alnajatDetails2, ImageOne, ImageTwo, ImageThree],
    overview: {
      text: "Al Najat Dental Clinic needed a fresh visual identity to better represent their modern dental practice on social media. Our mission was to enhance clarity, professionalism, and patient trust through design.",
      preview: {
        before: "",
        after: BannerDental,
      },
    },
    solution:
      "We evaluated the clinic's existing online presence and identified that the brand lacked consistency and visual appeal. Our designer proposed a clean, calm, and health-focused design system centered on cool tones, soft gradients, and clean typography to resonate with patients and reflect professionalism.",
    results: {
      designs: [ImageOne, ImageTwo, ImageThree],
      colors: ["#E1F5F8", "#0A3D62", "#FFFFFF"],
      font: "Poppins, sans-serif",
      goals: [
        "Establish a clean, professional identity",
        "Increase patient engagement on social media",
        "Build visual trust through cohesive branding",
      ],
    },
  },
  {
    id: 2,
    title: "Social media designs for a Mineral Water Company",
    category: "Design",
    company: "Tannourine Water, Lebanon",
    description:
      "Tannourine, a renowned Lebanese mineral water brand, aimed to modernize its social media visuals. The goal was to reflect purity, vitality, and the essence of natural springs through design.",
    imageCover: Water1,
    isVideo: true,
    images: [Water1, Water2, Water3, Water4, Water5, Water6],
    details: [Water1, Water2, Water3, Water4, Water5, Water6],
    overview: {
      text: "Tannourine, a renowned Lebanese mineral water brand, aimed to modernize its social media visuals. The goal was to reflect purity, vitality, and the essence of natural springs through design.",
      preview: {
        before: "",
        after: TannourineBanner,
      },
    },
    solution:
      "The challenge was to infuse the brand's natural heritage with a contemporary twist. The designer crafted visuals that emphasize the crystal clarity of Tannourine water using bold contrasts, nature-inspired elements, and dynamic layouts ideal for social media formats.",
    results: {
      designs: [Water1, Water2, Water3, Water4, Water5, Water6],
      colors: ["#D4F1F9", "#0F75BC", "#FFFFFF"],
      font: "Montserrat, sans-serif",
      goals: [
        "Highlight product purity and origin",
        "Drive brand recognition across social platforms",
        "Enhance visual appeal to match premium quality",
      ],
    },
  },
  {
    id: 3,
    title: "Social media designs for a Hospital",
    category: "Design",
    company: "Bughshan Hospital, Jeddah",
    description:
      "Bughshan Hospital aimed to enhance its social media presence to better connect with patients and showcase its medical services. The goal was to create a visual identity that reflects care, professionalism, and trust.",
    imageCover: Hospital5,
    isVideo: true,
    images: [Hospital5, Hospital2, Hospital3, Hospital1, Hospital4],
    details: [Hospital5, Hospital2, Hospital3, Hospital1, Hospital4],
    overview: {
      text: "Bughshan Hospital aimed to enhance its social media presence to better connect with patients and showcase its medical services. The goal was to create a visual identity that reflects care, professionalism, and trust.",
      preview: {
        before: "",
        after: TannourineBanner,
      },
    },
    solution:
      "The challenge was to infuse the brand's natural heritage with a contemporary twist. The designer crafted visuals that emphasize the crystal clarity of Tannourine water using bold contrasts, nature-inspired elements, and dynamic layouts ideal for social media formats.",
    results: {
      designs: [Hospital5, Hospital2, Hospital3, Hospital1, Hospital4],
      colors: ["#D4F1F9", "#0F75BC", "#FFFFFF"],
      font: "Montserrat, sans-serif",
      goals: [
        "Highlight product purity and origin",
        "Drive brand recognition across social platforms",
        "Enhance visual appeal to match premium quality",
      ],
    },
  },
];
