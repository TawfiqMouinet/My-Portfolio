"use client";
import Typical from "react-typical";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import { AiFillGithub } from "react-icons/ai";
import "react-circular-progressbar/dist/styles.css";
const bars = [
  {
    name: "React",
    progress: 45,
    img: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
    color: "#00D8FF",
  },
  {
    name: "React Native",
    progress: 60,
    img: "https://img.icons8.com/?size=2x&id=t4YbEbA834uH&format=png",
    color: "#C822FF",
  },
  {
    name: "Next.js",
    progress: 40,
    img: "https://www.svgrepo.com/show/306466/next-dot-js.svg",
    color: "#1D262D",
  },
  {
    name: "Tailwind.css",
    progress: 65,
    img: "https://www.svgrepo.com/show/374118/tailwind.svg",
    color: "#06B6D4",
  },
  {
    name: "JavaScript",
    progress: 50,
    img: "https://www.svgrepo.com/show/349419/javascript.svg",
    color: "#F7DF1E",
  },
  {
    name: "Python",
    progress: 75,
    img: "https://www.svgrepo.com/show/452091/python.svg",
    color: "#FCCF23",
  },
  {
    name: "Git",
    progress: 50,
    img: "https://www.svgrepo.com/show/452210/git.svg",
    color: "#EE513B",
  },
  {
    name: "Supabase",
    progress: 40,
    img: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    color: "#248F5F",
  },
  {
    name: "Firebase",
    progress: 70,
    img: "https://www.svgrepo.com/show/373595/firebase.svg",
    color: "#FCCA3F",
  },
  {
    name: "CSS",
    progress: 40,
    img: "https://www.svgrepo.com/show/452185/css-3.svg",
    color: "#2B7EBB",
  },
  {
    name: "HTML",
    progress: 30,
    img: "https://www.svgrepo.com/show/452228/html-5.svg",
    color: "#E44D26",
  },
];
export default function Home() {
  return (
    <main className="bg-white snap-y snap-mandatory overflow-scroll scroll-smooth h-screen w-screen">
      <header className=" px-2 py-5 mb-12 flex justify-between border sticky z-50 top-0 bg-white">
        <h1 className=" text-2xl font-break pr-10">Developed By Tawfiq</h1>
        <ul className="flex">
          <li className="bg-gradient-to-r to-purple-800 via-indigo-500 text-white px-3 py-2 rounded-md mr-8 transition-all hover:translate-y-1 hover:scale-110 from-pink-500 duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
            <a href="#about">About Me</a>
          </li>
          <li className="bg-gradient-to-r to-purple-800 via-indigo-500 text-white px-3 py-2 rounded-md mr-8 transition-all hover:translate-y-1 hover:scale-110 from-pink-500 duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
            <a href="#projects">Projects</a>
          </li>
          <li className="bg-gradient-to-r to-purple-800 via-indigo-500 text-white px-3 py-2 rounded-md mr-8 transition-all hover:translate-y-1 hover:scale-110 from-pink-500 duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </header>
      <section id="about" className="min-h-screen flex snap-start pt-20">
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col text-center p-10 whitespace-nowrap">
            <h2 className="text-6xl bg font-break pb-2 ">Tawfiq Mouinet</h2>
            <div className="space-x-3 space-y-0">
              <h3 className="text-5xl font-bold">I am a </h3>
              <Typical
                className="text-5xl p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500 font-bold "
                steps={[
                  "Fullstack Developer",
                  1000,
                  "Quick Learner",
                  1000,
                  "Lifelong Learner",
                  1000,
                  "Gamer",
                  1000,
                ]}
                loop={Infinity}
              />
            </div>
            <a
              href="https://github.com/JustAnotherHS"
              className="self-center mt-4 transition-all hover:translate-y-1 hover:scale-150"
              target="_blank"
            >
              <AiFillGithub className="text-5xl" />
            </a>
          </div>
          <div className="bg-white">
            <img src="me.jpg" alt="Me!" className="" />
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="min-h-screen grid grid-cols-2 bg-gradient-to-b from-indigo-500 to-purple-800 snap-start pt-20"
      >
        <img src="Memento2.png" alt="Learning Log" className="h-full" />
        <div className="space-y-5">
          <h3 className="text-center text-4xl font-bold mt-2 text-white">
            Learning Log
          </h3>
          <p className="text-white text-2xl tracking-wide mx-3 leading-loose">
            Learning Log is a web app that allows its users to log the topics
            they are interested in and to make journal entries as they learn
            about each topic. It is a great way to track your learning journey
            for each subject/topic that you are interested in, while keeping
            your entries organized chronologically, alphabetically, or by number
            of entries.
          </p>
        </div>
      </section>
      <section className="min-h-screen grid grid-cols-2 bg-gradient-to-b from-indigo-500 to-purple-800 snap-start pt-20">
        <img src="Aliens.png" alt="Aliens!" className="h-full" />
        <div className="space-y-5">
          <h3 className="text-center text-4xl font-bold mt-2 text-white">
            Alien Invasion
          </h3>
          <p className="text-white text-2xl tracking-wide mx-3 leading-10">
            Alien Invasion is my attempt at recreating the retro game, space
            invaders, minus a couple mechanics! This was my first project ever,
            and it taught me a lot! It served as a very good introduction to
            Object Oriented Programming, since most of its features can be
            designed in a modular fashion. The goal of the game is to destroy
            the alien ships before they reach your own. You have three lives,
            and the enemy ships get faster between each wave, but so do you.
          </p>
        </div>
      </section>
      <section
        id="skills"
        className="min-h-screen bg-gradient-to-b  space-x-3 from-purple-800 to-violet-950 snap-start pt-20"
      >
        <div className="barsgrid mt-10">
          {bars.map((item) => (
            <div className="stat-individual" key={item.name}>
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? item.progress : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      strokeWidth={7}
                      styles={{
                        path: {
                          stroke: item.color,
                          strokeLinecap: "round",
                          transition: "stroke-dashoffset 1s ease 0s",
                        },
                        trail: {
                          strokeLinecap: "round",
                        },
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-10 h-10"
                      />
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
