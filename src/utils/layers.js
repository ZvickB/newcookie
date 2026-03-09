export const layerLabels = {
  hebName1: "Hebrew Name 1",
  hebName2: "Hebrew Name 2",
  engName1: "English Name 1",
  engName2: "English Name 2",
};

export const layerDefaults = [
  {
    id: "hebName1",
    name: "ברוך",
    x: 0,
    y: 0,
    size: 35,
    language: "hebrew",
    placeholder: "Hebrew name",
    baseClassName:
      "absolute right-[65px] top-[112px] z-[2] font-hebrew text-[#fefbf6]",
    skew: "skew(-16deg,-5deg)",
  },
  {
    id: "hebName2",
    name: "גדליה",
    x: 0,
    y: 0,
    size: 35,
    language: "hebrew",
    placeholder: "Optional",
    baseClassName:
      "absolute left-[81px] top-[100px] font-hebrew text-[#fefbf6]",
    skew: "skew(-16deg,-4deg)",
  },
  {
    id: "engName1",
    name: "Boruch",
    x: 0,
    y: 0,
    size: 60,
    color: "#151513",
    language: "english",
    placeholder: "English name",
    baseClassName:
      "absolute bottom-[68px] left-[56px] px-[50px] font-script font-extrabold",
    skew: "skew(-25deg)",
    textShadow:
      "0 7px 7px rgba(0, 0, 0, 0.3), 7px 7px 10px rgba(246, 245, 245, 0.5), 0 0 20px white, 1px -2px 10px white",
  },
  {
    id: "engName2",
    name: "",
    x: 0,
    y: 0,
    size: 60,
    color: "#23e0e0",
    language: "english",
    placeholder: "Optional",
    baseClassName:
      "absolute bottom-[25px] left-[110px] font-script font-bold opacity-90",
    skew: "skew(-25deg)",
    textShadow:
      "1px -2px 5px rgba(255, 255, 255, 1), 0 0 5px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1)",
  },
];
