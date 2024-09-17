import {
  Substance_Painter,
  maya,
  ZBrush,
  adobe_after_effects,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Adobe After Effects",
    icon: adobe_after_effects,
  },
  {
    title: "Substance Painter",
    icon: Substance_Painter,
  },
  {
    title: "Autodesk Maya",
    icon: maya,
  },
  {
    title: "ZBrush",
    icon: ZBrush,
  },
];

const technologies = [
  {
    name: "maya",
    icon: maya,
  },
  {
    name: "Substance Painter",
    icon: Substance_Painter,
  },
  {
    name: "After Effects",
    icon: adobe_after_effects,
  },
  {
    name: "ZBrush",
    icon: ZBrush,
  },
  
];

const experiences = [
  {
    title: "Kizazi Moto: Generation Fire",
    company_name: "CG Generalist",
    icon: adobe_after_effects,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "This action-packed animated sci-fi anthology presents ten futuristic visions from Africa imagining brave new worlds of advanced technology, aliens, spirits, and monsters.",
      "...",
      "...",
    ],
  },
  {
    title: "Project 2",
    company_name: "Character Modelling",
    icon: Substance_Painter,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - June 2023",
    points: [
      "High poly character modelling and rigging",
      "...",
      "...",
    ],
  },
  {
    title: "3D Character Animation",
    company_name: "3D Animation",
    icon: maya,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
      "3D Modelling, Texturing and Animating",
      "...",
      "...",
    ],
  },
  {
    title: "Architectural Visualization",
    company_name: "3D Model",
    icon: ZBrush,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "High poly architectural modelling, texturing, rendering",
      "...",
      "...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Marcus (3d_meru) transformed our project with stunning 3D visuals, exceeding all expectations and bringing our vision to life.",
    name: "Sara Lee",
    designation: "Creative Director",
    company: "Infinity Media",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The CGI work by Marcus (3d_meru) was nothing short of spectacular, adding a professional and dynamic edge to our marketing campaign.",
    name: "Chris Brown",
    designation: "Marketing Manager",
    company: "Visionary Studios",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Marcus (3d_meru) delivered exceptional 3D designs for our video game, combining creativity and technical precision in every detail.",
    name: "Lisa Wang",
    designation: "Game Developer",
    company: "Pixel Perfect Studios",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dude in a MK tee ",
    description:
      "(Zbrush Practice)...",
    tags: [
      {
        name: "zbrush",
        color: "blue-text-gradient",
      },
      {
        name: "substancepainter",
        color: "green-text-gradient",
      },
      {
        name: "3dmodelling",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.behance.net/gallery/161840343/Dude-in-a-MK-tee-(Zbrush-Practice)",
  },
  {
    name: "Sun Queen ",
    description:
      "(Zbrush Practice)",
    tags: [
      {
        name: "maya",
        color: "blue-text-gradient",
      },
      {
        name: "zbrush",
        color: "green-text-gradient",
      },
      {
        name: "texturing",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.behance.net/gallery/161839967/Sun-Queen-(Zbrush-Practice)",
  },
  {
    name: "Mushroom-Dude",
    description:
      "Pablo Munoz - Zbrush tutorial",
    tags: [
      {
        name: "tutorial",
        color: "blue-text-gradient",
      },
      {
        name: "rendering",
        color: "green-text-gradient",
      },
      {
        name: "rigging",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.behance.net/gallery/161837253/Mushroom-Dude-(Pablo-Munoz-Zbrush-tut)",
  },
];

export { services, technologies, experiences, testimonials, projects };
