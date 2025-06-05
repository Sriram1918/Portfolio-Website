import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Sriram — a curious mind wired for code, caffeine, and
              late-night ideas that somehow turn into working prototypes by
              morning.
              <br />
              <br />
              I don’t just study software. I chase patterns, poke at systems,
              and build things that teach me something new — even if they crash
              a few times first. Fast forward to today, and the journey’s been
              chaotic, caffeinated, and kind of beautiful. I'm focused on
              creating real-world tech that blends logic and intuition — from AI
              trainers that critique your posture to vision systems that read
              the road. I'm also learning to thrive in teams, bounce off ideas,
              and build smarter, together.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>JavaScript</li>
              <li>Machine Learning</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Matlab</li>
              <li>Deep Learning</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload Resume
            </button>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
