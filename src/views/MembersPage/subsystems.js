import { FaGears } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";
import { HiCode } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";

import mechanicalTeam from "data/MechanicalTeam_2025.json";
import electricalTeam from "data/ElectricalTeam_2025.json";
import softwareTeam from "data/SoftwareTeam_2025.json";
import businessTeam from "data/BusinessTeam.json";

import mechImg from "assets/img/mechanical.jpg";
import elecImg from "assets/img/electrical.jpg";
import softImg from "assets/img/software.jpg";
import bizImg from "assets/img/business.jpg";

/**
 * Single source of truth for the four subsystems: used by the team overview
 * cards and by each subsystem's members page.
 */
export const SUBSYSTEMS = [
  {
    key: "mechanical",
    name: "Mechanical",
    icon: FaGears,
    image: mechImg,
    data: mechanicalTeam,
    linked: true,
    summary:
      "Designs and manufactures the vehicle and its components — from frame and hull architecture to actuators and pneumatics — using SolidWorks and ANSYS to keep every part robust, modular and light.",
    description:
      "The Mechanical Subsystem is responsible for the design and manufacturing of the vehicle and its associated components. The team works extensively on vehicle architecture, fluid dynamics, actuator mechanisms and pneumatic systems to ensure optimal performance. From conceptualisation to prototyping, we plan, simulate and rigorously test the structural design of the AUV before manufacturing it using state-of-the-art fabrication techniques.",
    tags: ["SolidWorks", "ANSYS", "CFD", "Waterproofing", "Pneumatics"],
  },
  {
    key: "electrical",
    name: "Electrical",
    icon: GiElectricalResistance,
    image: elecImg,
    data: electricalTeam,
    linked: true,
    summary:
      "Builds the power distribution, monitoring and control electronics — custom PCBs, an STM32 Nucleo for real-time control and the bridge between sensors, actuators and the onboard computer.",
    description:
      "The Electrical Subsystem develops the core electronic framework that powers the AUV, including the power distribution and monitoring systems. The team designs and manages the vehicle's electrical architecture, ensuring reliable power delivery, actuator control and seamless sensor integration. An STM32 Nucleo microcontroller handles real-time control of actuators and data acquisition from onboard sensors, interfacing with an Intel NUC for higher-level processing. The subsystem also designs custom PCBs and serves as the critical link between the mechanical and software subsystems.",
    tags: ["PCB Design", "Power Electronics", "STM32", "Sensor Integration"],
  },
  {
    key: "software",
    name: "Software",
    icon: HiCode,
    image: softImg,
    data: softwareTeam,
    linked: true,
    summary:
      "Writes the perception, navigation and control stack that lets the AUV operate autonomously, validated in Gazebo and UWSim before every real-world dive.",
    description:
      "The Software Subsystem develops the algorithms and control architecture that enable the AUV to operate autonomously. The team leverages modern robotics frameworks and cutting-edge technologies to implement perception, navigation and control systems for the vehicle. Extensive simulations are carried out in environments such as Gazebo and UWSim to validate system behaviour before real-world testing, with the objective of developing robust, scalable and reliable software that coordinates the vehicle's motion.",
    tags: ["ROS 2", "Computer Vision", "SLAM", "Control Systems", "Gazebo"],
  },
  {
    key: "business",
    name: "Business",
    icon: BsGraphUp,
    image: bizImg,
    data: businessTeam,
    linked: false,
    summary:
      "Manages funding, sponsorships and outreach — and keeps the website and social channels alive — so the technical subsystems can focus on building.",
    description:
      "The Business Subsystem manages the team's funding, sponsorships and outreach initiatives. The team oversees financial planning and expenditure management while actively engaging with sponsors and partners to secure resources that support the development of the AUV. It is also responsible for maintaining the team's digital presence through the website and social media platforms, ensuring sustainable funding and strong outreach.",
    tags: ["Sponsorships", "Finance", "Outreach", "Web & Social"],
  },
];

export const getSubsystem = (key) => SUBSYSTEMS.find((s) => s.key === key);
