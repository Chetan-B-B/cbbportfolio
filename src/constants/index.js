import depMbl from "../../public/assets/work/dep-mbl.png"
import depTab from "../../public/assets/work/dep-tab.png"
import iacTab from "../../public/assets/work/iac-tab.png"
import iacMbl from "../../public/assets/work/iac-mbl.png"
import forkifyTab from "../../public/assets/work/forkify-tab.png"
import forkifyMbl from "../../public/assets/work/forkify-mbl.png"
import realestateMbl from "../../public/assets/work/realestate-mbl.png"
import realestateTab from "../../public/assets/work/realestate-tab.png"


export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const projects = [
  {
    id:1,
    name: "Digital Enablement Platform",
    img1: depMbl,
    img2: depTab,
    tags: ["Python","Flask","MonogDB"],
  },
  {
    id:2,
    name: "IaC Controller",
    img1: iacTab,
    img2: iacMbl,
    tags: [ "AWS", "Terraform", "Docker"],
  },
  {
    id:3,
    name: "Forkify APP",
    img1: forkifyTab,
    img2: forkifyMbl,
    tags: ["Javascript","MVC", "RESTAPI's"],
  },
  {
    id:4,
    name: "Future Estate",
    img1: realestateMbl,
    img2: realestateTab,
    tags: ["React","Tailwindcss"],
  },
]

export const experiences = [
  { role: "Software Development Engg 1. ", company: "Astuto.ai", duration: "July 2025 → Now" },
  { role: "Associate Software Engg. ", company: "Altimetrik", duration: "December 2022 → July 2025" },
  { role: "Project Intern", company: "Altimetrik", duration: "March 2022 → December 2022" },
];

export const certificates = [
  {
    name: "Ultimate AWS Certified CloudPractitioner CLF-C02 ", platform: "Udemy", link:"https://www.udemy.com/certificate/UC-2960e137-8a92-4b1a-adf8-bef53d0cfd14/"
  },
  {
    name: "Terraform for the Absolute Beginners with Lab", platform: "Udemy",
    link: "https://www.udemy.com/certificate/UC-27ff33ff-b1ec-4501-807d-f9a7111f41ae/"
  },
  {
    name: "MongoDB - The Complete Developer's Guide 2023", platform: "Udemy",link:"https://www.udemy.com/certificate/UC-9f940708-5f82-47ca-86e3-ebc2dd26d07f/"
  },
  {
    name: "Docker & Kubernetes: The Practical Guide |2023 Edition", platform: "Udemy",link:"https://www.udemy.com/certificate/UC-186eab40-670e-4c63-8ed5-5fc7c630fbdd/"
  },
  {
    name: "Online feature Selection using Pearson Correlation Technique", platform: "IEEE Publications",link:"https://ieeexplore.ieee.org/document/10054267"
  },
]