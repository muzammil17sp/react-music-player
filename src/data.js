import { v4 as uuidv4 } from "uuid";

const ChillHop = () => {
  return [
    {
      name: "UKULELE",
      cover: "https://www.bensound.com/bensound-img/ukulele.jpg",
      artist: "Benjamin Tissot",
      audio: "/music/ukule.mp3",
      color: ["#81CEC8", "#D22B32"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "BUDDY",
      cover: "https://www.bensound.com/bensound-img/buddy.jpg",
      artist: "Benjamin Tissot",
      audio: "/music/buddy.mp3",
      color: ["#FED45C", "#104553"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "CLEAR DAY",
      cover: "https://www.bensound.com/bensound-img/clearday.jpg",
      artist: "Benjamin Tissot",
      audio: "/music/clear.mp3",
      color: ["#055EB6", "#EEC3B5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "ADVENTURE",
      cover: "https://www.bensound.com/bensound-img/adventure.jpg",
      artist: "Benjamin Tissot",
      audio: "/music/adventure.mp3",
      color: ["#F0E8D2", "#9E6D55"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "EVOLUTION",
      cover: "https://www.bensound.com/bensound-img/evolution.jpg",
      artist: "Benjamin Tissot",
      audio: "/music/evolution.mp3",
      color: ["#476462", "#F5EEF1"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "SWEET",
      cover: "https://www.bensound.com/bensound-img/sweet.jpg",
      artist: "Benjamin Tissot",
      audio: "/music/sweet.mp3",
      color: ["#A62413", "#59401B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "POP DANCE",
      cover: "https://www.bensound.com/bensound-img/popdance.jpg",
      artist: "Benjamin Tissot",
      audio: "/music/popdance.mp3",
      color: ["#FD8BFA", "#F3D25E"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default ChillHop;
