import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiMongodb,
  SiGooglecalendar,
} from "react-icons/si";

  export const projects = [
    {
      id: "project-1",
      title: "LetsCode",
      github: "https://github.com/Sagarshivalingappaathani/letsCode-Coding-Platform",
      link: "https://lets-code-pink.vercel.app/",
      demo: "https://www.youtube.com/watch?v=Ax2vHEGnrkU",
      image: "/project/letscode.png",
      content:
       "This platform is designed to resemble popular coding websites such as LeetCode and GeeksforGeeks.Its primary purpose is to assist users in competitive coding. Users can solve coding problems and track their progress, including the number of problems they've solved in each topic.Additionally, they can participate in coding contests.",
        stack: [
        {
          id: "icon-1",
          icon: SiJavascript,
          name: "Javascript",
          
        },
        {
          id: "icon-2",
          icon: SiTailwindcss,
          name: "TailwindCSS"
        },
        {
          id: "icon-3",
          icon: SiNextdotjs,
          name: "Next.js"
        },
        {
          id: "icon-4",
          icon: SiFirebase,
          name: "Firebase"
        },
      ],
    },
    {
      id: "project-2",
      title: "TweetVerse",
      github: "https://github.com/Sagarshivalingappaathani/TweetVerse-Social-Media-App",
      link: "",
      demo : "https://github.com/Sagarshivalingappaathani/TweetVerse-Social-Media-App",
      image: "/project/tweetverse.png",
      content:
        "This website is a social media platform that resembles Twitter. Users can register, log in securely, and engage with various features including posting content (text, images, or videos) and exploring trending topics via hashtags just like the twitter.users can follow each other, and follower/following counts are displayed on user profiles.",
         stack: [
        {
          id: "icon-1",
          icon: SiNextdotjs,
          name: "Next.js"
        },
        {
          id: "icon-2",
          icon: SiTailwindcss,
          name: "TailwindCSS"
        },
        {
          id: "icon-3",
          icon: SiMysql,
          name: "MySql"
        },
        {
          id: "icon-4",
          icon: SiExpress,
          name: "Express.js"
        },
      ],
    },
    {
      id: "project-3",
      title: "Club Events Manegement System",
      github: "https://github.com/Sagarshivalingappaathani/Club-Event-Management-System",
      link: "",
      demo : "https://github.com/Sagarshivalingappaathani/Club-Event-Management-System",
      image: "/project/cems.png",
      content:
        "The Club Event Management System is a comprehensive web application built to streamline event organization within clubs or organizations. Powered by Mycalendar.js library. Users can explore upcoming events, register for participation, and provide feedback for concluded Events.",
        stack: [
        {
          id: "icon-1",
          icon: SiNextdotjs,
          name: "Next.Js"
        },
        {
          id: "icon-2",
          icon: SiTailwindcss,
          name: "TailwindCSS"
        },
        {
          id: "icon-3",
          icon: SiNodedotjs,
          name: "Express.Js"
        },
        {
          id: "icon-4",
          icon: SiGooglecalendar,
          name: "MyCalender.js"
        },
      ],
    },
    {
      id: "project-4",
      title: "DishDispatch",
      github: "https://github.com/Sagarshivalingappaathani/DishDispatch-MERN-foodDelivary",
      link: "",
      demo : "https://www.youtube.com/watch?v=ZC13FF_0dok",
      image: "/project/dishdispatch.png",
      content:
        "This platform aims to simplify the process of ordering and delivering food. Customers can browse dishes from menu, place their orders And Admin of DishDispatch can efficiently manage food orders. This project leverages modern web technologies to create a seamless food delivery experience for both customers and owners.",
        stack: [
        {
          id: "icon-1",
          icon: SiMongodb,
          name: "MongoDB"
        },
        {
          id: "icon-2",
          icon: SiTailwindcss,
          name: "TailwindCSS"
        },
        {
          id: "icon-3",
          icon: SiNodedotjs,
          name: "Node.Js"
        },
        {
          id: "icon-4",
          icon: SiExpress,
          name: "Express.js"
        },
        {
          id: "icon-5",
          icon: SiHtml5,
          name: "HTML5"
        },
      ],
    },
    {
      id: "project-5",
      title: "File System Simulation",
      github: "https://github.com/Sagarshivalingappaathani/File-System-Simulation-Operating-System",
      link: "",
      demo : "",
      image: "/image/os.png",
      content:
        "This Python application provides a graphical user interface (GUI) for various file system operations like lising all files in Current directory, Create, Rename, Delate, Move, Copy, Encryption( Utilizes decryption libraries like cryptography to decrypt the file content ), Decryption, Searching, Restoreing From Trash using Tkinter",
        stack: [
        {
          id: "icon-1",
          icon: SiPython,
          name: "Python"
        },
      ],
    },
    {
      id: "project-6",
      title: "Library Management system",
      github: "https://github.com/Sagarshivalingappaathani/Library-Management-system",
      link: "",
      demo : "https://www.youtube.com/watch?v=EUeQX5Y4O4A",
      image: "/project/lms.png",
      content:"This is a Java-based Library Management System application designed to help manage books and user records in a library. It allows administrators and users to perform various tasks such as viewing available books, searching for books, borrowing books, returning books, and more.",
      stack: [
        {
          id: "icon-1",
          icon: SiJavascript,
          name: "Java"
        },
        {
          id: "icon-2",
          icon: SiMysql,
          name: "MySQL"
        },
      ],
    },
    {
      id: "project-7",
      title: "Mini Stackoverflow",
      github: "https://github.com/Sagarshivalingappaathani/Nullclass-Internship",
      link: "",
      demo : "",
      image: "/project/stack.png",
      content:
        "The Stack Overflow Clone is a full-featured web application designed to replicate the core functionalities of the popular Q&A platform, Stack Overflow. This project aims to provide a platform where users can ask questions, provide answers. The clone is built with MERN stack.",
       stack: [
        {
          id: "icon-1",
          icon: SiMongodb,
          name: "MongoDB"
        },
        {
          id: "icon-2",
          icon: SiExpress,
          name: "Express.js"
        },
        {
          id: "icon-3",
          icon: SiReact,
          name: "React"
        },
        {
          id: "icon-4",
          icon: SiNodedotjs,
          name: "Node.Js"
        },
      ],
    },
    {
      id: "project-8",
      title: "AksharaRatna",
      github: "https://github.com/Sagarshivalingappaathani/AksharaRatna-Next.js",
      link: "https://akshararatna.vercel.app/",
      demo : "",
      image: "/project/aksha.png",
      content:"The AksharaRatna Website is a simple, elegant front-end web application designed to showcase an author's books. The website provides a dedicated platform for authors to display detailed information about their published works, including book titles, cover images, descriptions and feedback from readers",
       stack: [
        {
          id: "icon-1",
          icon: SiNextdotjs,
          name: "Next.Js"
        },
        {
          id: "icon-2",
          icon: SiTailwindcss,
          name: "TailwindCSS"
        },
      ],
    }
  ];
  
  