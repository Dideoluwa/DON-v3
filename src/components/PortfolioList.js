import jobify from "../Assets/projectImages/jobify.png";
import peoplescount from "../Assets/projectImages/peoplescount.png";
import music from "../Assets/projectImages/music.png";
import ticTactToe from "../Assets/projectImages/tictactoe.png";
import schedule from "../Assets/projectImages/schedule.png";
import QRcode from "../Assets/projectImages/QR-code.png";
const Lists = [
  {
    id: 7,
    title: "Today's Mixtape",
    description:
      "I built a simple, cool mixtape application that fetches songs from Spotify. I built both the backend, where the mixtape comes from, and the frontend, where the mixtape is displayed to users.",
    img: music,
    url: "https://mixtape-darasimi.netlify.app/",
  },
  {
    id: 3,
    title: "The Peoples count",
    description:
      "I worked as a frontend developer with a team to build The Peoples Count, alongside a backend developer and other members. The Peoples Count is a web application that was used to monitor the 2023 Lagos state governorship election and provide live updates on the results and incident reports from polling units, wards, and LGAs.",
    img: peoplescount,
    url: "https://thepeoplescount.com/",
  },
  {
    id: 6,
    title: "Schedule app",
    description:
      "This is a fully functional fullstack application for scheduling meetings. I built the frontend with React.js and the backend with node js.",
    img: schedule,
    url: "https://schedule-app-95ef6.web.app/",
  },

  {
    id: 1,
    title: "Jobify",
    description:
      "This is a hackathon project which I worked as the sole Frontend developer on my team.We built this application to enhance collaboration between people remotely and also assist freelancers in getting gigs and also giving out gigs.It is a very user friendly application that anybody can use.",
    img: jobify,
    url: "https://jobifyelite22.pythonanywhere.com/",
  },
  {
    id: 8,
    title: "QR-code generator and scanner",
    description:
      "A simple web application for scanning QR-codes and also generating QR-codes for url's.",
    img: QRcode,
    url: "https://qr-code-generator-dideoluwa.vercel.app/",
  },
  {
    id: 5,
    title: "TicTacToe",
    description:
      "A TicTacToe game created using Javascript.Not bad if you try playing this game with someone.",
    img: ticTactToe,
    url: "https://dtictactoe.netlify.app/",
  },
];

export default Lists;
