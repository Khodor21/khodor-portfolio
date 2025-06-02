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

export const data = [
  {
    id: 1,
    title: "Social media design for a Dental Clinic",
    category: "Design",
    company: "Al Najat Dental Clinic, Kuwait",
    description: "",
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
    title: "Social media design for a Mineral Water Company",
    category: "Design",
    company: "Tannourine Water, Lebanon",
    description: "",
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
];
