import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  starbucks,
  tailwind,
  tesla,
  threejs,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:"project",
    title:"Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cashier",
    company_name: "Diehl Automotive of Robinson",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2021 - December 2022",
    points: [
      "Actively contributed to enhancing the overall dealership experience by providing shuttle services and ensuring customers' transportation needs  were met, contributing to a 10% increase in customer satisfaction surveys",
      "Conducted hardware and software troubleshooting for computer systems and  dealership-specific software, resolving technical issues efficiently.",
    ],
  },
  {
    title: "Cash Office",
    company_name: "Giant Eagle",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2016 - August 2021",
    points: [
      "Managed store wide cash office operations, including handling large sums of money, balancing registers, and performing cash reconciliations with customers and maintained accurate records of sales transactions, ensuring proper documentation and dispersal of funds to the bank.",
      "Successfully trained new employees in store procedures, ensuring a smooth onboarding process and equipping them with the necessary skills to excel in their roles, which increased employee retention by 5%.",
      "Actively sought feedback from customers and employees, leveraging their insights to provide valuable hiring and sales suggestions to management, resulting in improved customer satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pathfinding Visualizer",
    description:
      "Uses pathfinding algorithms like Dijkstra's and A* for the user to draw barriers and find the shortest path to the end node from the chose start node.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Mac-McFarland/Pathfinding-Visualizer.git",
  },
  {
    name: "Chess with NEAT",
    description:
      "Play a game of chess with a chess bot using the NEAT algorithm to grow with you! It's intelligence varies depending on skill level, which you can set yourself!",
    tags: [
      {
        name: "Python with Pygame",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Mac-McFarland/Chess-with-NEAT.git",
  },
  {
    name: "Guitar Recorder",
    description:
      "A recording software which allows you to improve on your guitar skills by listening and comparing the accuracy of notes and chords after you play.",
    tags: [
      {
        name: "Java",
        color: "text-blue-700",
      },
      {
        name: "JavaFX",
        color: "text-green-500",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Mac-McFarland/Guitar-Recorder.git",
  },
  {
    name: "Quick Meal Search",
    description:
      "Searches for meals in an hour time frame with the users items on hand to search the web for recipes to make quickly!",
    tags: [
      {
        name: "React",
        color: "text-cyan-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
      {
        name: "MySql",
        color: "text-violet-500"
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Mac-McFarland/Quick-Meal-Suggestions.git",
  },
];

export { experiences, projects, services, technologies, testimonials };

