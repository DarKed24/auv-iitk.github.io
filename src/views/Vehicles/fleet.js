import atalData from "./AtalPage/data";
import anahitaData from "./AnahitaPage/data";
import varunData from "./VarunPage/data";
import tarangData from "./TarangPage/data";

import atalHero from "assets/img/atal/atal2026.jpeg";
import atalPoster from "assets/img/atal.png";
import anahitaPoster from "assets/img/anahita/anahita-underwater.png";
import anahitaHero from "assets/img/anahita/anahita-underwater2.png";
import varunPoster from "assets/img/varun/varun-underwater.jpg";
import tarangPoster from "assets/img/tarang/Tarang.png";

/**
 * Registry of every vehicle page. `listed` controls whether the vehicle
 * appears in "other vehicles" cross-links (Tarang is kept reachable by URL
 * but is not promoted in navigation).
 */
export const FLEET = [
  {
    key: "atal",
    path: "/vehicles/atal",
    listed: true,
    data: atalData,
    meta: {
      key: "atal",
      name: "Atal",
      kicker: "3rd Generation · RoboSub 2026",
      hero: atalHero,
      poster: atalPoster,
      imgDir: "atal",
      sketchfab: "b5b6cf667d7a463b87abfa6c48be65ba",
      report: "",
      highlights: [
        { label: "Weight", value: "60 kg" },
        { label: "Thrusters", value: "8 × T200" },
        { label: "DOF", value: "6" },
        { label: "Endurance", value: "8 h" },
      ],
    },
  },
  {
    key: "anahita",
    path: "/vehicles/anahita",
    listed: true,
    data: anahitaData,
    meta: {
      key: "anahita",
      name: "Anahita",
      kicker: "2nd Generation · RoboSub 2019",
      hero: anahitaHero,
      poster: anahitaPoster,
      imgDir: "anahita",
      sketchfab: "21c78ab51dda4c7a9445b4fb0b877e22",
      report: "https://drive.google.com/file/d/1AN2uvKzoERqeampDUTVilUPUmSCickFL/view?usp=sharing",
      highlights: [
        { label: "Weight", value: "32 kg" },
        { label: "Thrusters", value: "8 × T200" },
        { label: "DOF", value: "6" },
        { label: "Endurance", value: "4 h" },
      ],
    },
  },
  {
    key: "varun",
    path: "/vehicles/varun",
    listed: true,
    data: varunData,
    meta: {
      key: "varun",
      name: "Varun",
      kicker: "1st Generation · NIOT-SAVe 2016",
      hero: varunPoster,
      poster: varunPoster,
      imgDir: "varun/VARUN-AUV",
      sketchfab: "6e1274e10d9e4b6a922a5ed0baf9445f",
      report:
        "https://drive.google.com/file/d/0B952Pi5TJ8RGcWJRUWF5YllsM2M/view?resourcekey=0-YEob3LFfYmo5QhRv_96zdA",
      highlights: [
        { label: "Mass", value: "27.5 kg" },
        { label: "Thrusters", value: "6 × BTD-150" },
        { label: "DOF", value: "5" },
        { label: "Endurance", value: "4 h" },
      ],
    },
  },
  {
    key: "tarang",
    path: "/vehicles/tarang",
    listed: false,
    data: tarangData,
    meta: {
      key: "tarang",
      name: "Tarang",
      kicker: "Carbon-fibre prototype · RoboSub 2021",
      hero: tarangPoster,
      poster: tarangPoster,
      imgDir: "tarang",
      sketchfab: "de442321b07d49c09620569fa592889f",
      report: "https://drive.google.com/file/d/16TP7bU2MGEFecJbKzfMHkA8Lb3V4XeNi/view?usp=sharing",
      highlights: [
        { label: "Weight", value: "22 kg" },
        { label: "Thrusters", value: "6 × T200" },
        { label: "DOF", value: "6" },
        { label: "Endurance", value: "4 h" },
      ],
    },
  },
];

export const getVehicle = (key) => FLEET.find((v) => v.key === key);
