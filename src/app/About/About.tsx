import React from "react";
import { useEffect } from "react";
import HoverPopUp from "../../components/HoverPopUp";

const About = () => {
  useEffect(() => {
    document.title = "Seanstlab";
  }, []);

  return (
    <body className="bg-night text-white font-JetBrain">
      <div className="flex flex-col max-w-[600px] min-h-screen mx-auto p-7">
        <div className="flex flex-col mx-auto items-center">
          <img
            className="size-[7rem] rounded-full  m-5 outline-white outline outline-offset-1"
            src="https://avatars.githubusercontent.com/u/61649121?v=4"
          ></img>
          <p className="text-xl font-bold">Nachapat Iamphuang</p>
          <p className="text-base mb-2 text-gray-400">Developer / Filmmaker</p>
        </div>
        <div className="mt-7">
          <h2 className="font-bold text-xl mb-3">About</h2>
          <p className="text-base text-gray-400 font-thin tracking-wide">
            Hey! I'm{" "}
            <span className="font-bold text-justify text-white">Sean</span>, a
            passionate developer, and a machine learning enthusiast. Currently,
            a 1st year Computer Science student, Teaching Assistance and
            Lecturer at <HoverPopUp text="KMITL" link="https://kmitl.ac.th" />.
          </p>
          <p className="text-base text-gray-400 font-thin tracking-wide pt-5">
            I'm researching the topic of{" "}
            <HoverPopUp
              text="Neuroscience"
              link="https://en.wikipedia.org/wiki/Computational_neuroscience"
              embededLink="https://en.wikipedia.org/wiki/Computational_neuroscience"
            />{" "}
            and{" "}
            <HoverPopUp
              text="Medical Technology"
              link="https://www.medtecheurope.org/about-the-industry/what-is-medical-technology"
              embededLink="https://en.wikipedia.org/wiki/Health_technology"
            />{" "}
            integrated with Machine Learning technology. I'm open to
            collaborative projects.
          </p>
          <div className="flex justify-end">
            <a
              className="group hover:underline hover:font-extrabold"
              href="/Resume"
            >
              <span>View Resume</span>
              <span className="material-symbols-outlined text-lg px-2 translate-y-1 group-hover:translate-x-2 transition-all">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
        <div className="mt-7">
          <a className="flex hover:underline " href="/link">
            <h2 className="font-bold text-xl mb-3">My Videos</h2>
            <span className="material-symbols-outlined text-sm text-gray-400 px-2 pt-1">
              open_in_new
            </span>
          </a>

          <div className="flex flex-row justify-evenly overflow-x-scroll md:overflow-hidden">
            <iframe
              height="310"
              className="aspect-[9/16] ..."
              src="https://www.youtube.com/embed/jsiYpLMkaVE"
            ></iframe>
            <iframe
              height="310"
              className="aspect-[9/16] ..."
              src="https://www.youtube.com/embed/MpSwkCrj5yg"
            ></iframe>
            <iframe
              height="310"
              className="aspect-[9/16] ..."
              src="https://www.youtube.com/embed/MpSwkCrj5yg"
            ></iframe>
          </div>
        </div>
        <div className="mt-7">
          <a className="flex hover:underline " href="/experiences">
            <h2 className="font-bold text-xl mb-3">Experiences</h2>
            <span className="material-symbols-outlined text-sm text-gray-400 px-2 pt-1">
              open_in_new
            </span>
          </a>
          <div className="bg-raisinBlack flex flex-col gap-1 bg-theme-secondary p-4 my-5 rounded-2xl hover:scale-105 transition-transform">
            <h3 className="font-bold text-base">Teaching Assistant</h3>
            <div className="flex font-light justify-between text-sm text-gray-400">
              <a
                className="underline"
                href="https://www.science.kmitl.ac.th/department/computer-science"
                target="_blank"
              >
                Department of Computer Science, KMITL
              </a>
              <p className="justify-end">2025 - present</p>
            </div>
            <ul className="text-sm text-gray-400 list-disc pl-4 text-justify">
              <li>
                Volunteered as a lecturer to lead a 5-day lecture for 30 high
                school students, about object-oriented programming (OOP) and
                fundamental Java programming.
              </li>
            </ul>
          </div>

          <div className="bg-raisinBlack flex flex-col gap-1 bg-theme-secondary p-4 my-5 rounded-2xl hover:scale-105 transition-transform">
            <h3 className="font-bold text-base">
              Video Editor and Content Creator
            </h3>
            <div className="flex font-light justify-between text-sm text-gray-400">
              <a
                className="underline"
                href="https://www.youtube.com/@micrubik/shorts"
                target="_blank"
              >
                Micrubik
              </a>
              <p className="justify-end">2024 - present</p>
            </div>
            <ul className="text-sm text-gray-400 list-disc pl-4 text-justify">
              <li>
                Delivered script-written and edited 50+ short-form video
                contents for clients and Micrubik.
              </li>
            </ul>
          </div>

          <div className="mt-7">
            <h2 className="font-bold text-xl mb-3">Skills</h2>
            <div className="flex flex-col m-2">
              <div className="flex flex-wrap justify-start gap-9 text-xs pb-4 px-3">
                <div className=" flex flex-col items-center w-[72px]">
                  <img
                    width={40}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/640px-Typescript.svg.png"
                  ></img>
                  <p className="pt-2">Typescript</p>
                </div>
                <div className=" flex flex-col items-center w-[72px]">
                  <img
                    width={40}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
                  ></img>
                  <p className="pt-2">Javascript</p>
                </div>
                <div className=" flex flex-col items-center w-[72px]">
                  <img
                    width={40}
                    src="https://img.icons8.com/color/512/java-coffee-cup-logo.png"
                  ></img>
                  <p className="pt-2">Java</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto max-h-16 overflow-hidden justify-end ">
                <li className="flex bg-raisinBlack p-1 rounded-lg">
                  <span className="text-white text-sm font-extrabold p-1">
                    Languages
                  </span>
                </li>
              </div>
            </div>
            <hr className="solid my-5"></hr>
          </div>
        </div>
      </div>
    </body>
  );
};

export default About;
