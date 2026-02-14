import {
  artistStatement,
  bio,
  groupExhibitions,
  GroupExhibit,
  publicSpeaking,
  awards,
  education,
  aboutPic,
} from "../data/about/about";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="md:mt-[3rem] mt-[4rem]">
      <div className="flex  flex-col md:flex-row justify-center gap-x-9 items-start  max-w-[81.25rem] mx-auto">
        {/* Mobile: Image [first]*/}
        <section className="md:hidden w-full mb-12">
          <img
            src={aboutPic}
            alt="Picture of Denise de Cordova behind a sculpture of a bird"
            className="w-full h-auto object-cover"
          />
        </section>

        {/*About Content */}
        <section className="flex flex-col gap-y-4 md:gap-y-16">
          <article>
            <h4 className="p4-bold-header md:d4-bold-header mb-2">
              Artist Statement
            </h4>
            <p className="p5-body md:d5-body text-justify">{artistStatement}</p>
          </article>
          <article>
            <h4 className="p4-bold-header md:d4-bold-header mb-2">Bio</h4>
            <p className="p5-body md:d5-body text-justify">{bio}</p>
          </article>
          <article className="md:text-justify">
            <h4 className="p4-bold-header md:d4-bold-header mb-2">
              Selected Group Exhibitions
            </h4>
            <ul className="space-y-1">
              {groupExhibitions.map((item: GroupExhibit) => (
                <li key={item.id} className="p5-body md:d5-body">
                  {item.year}, <span className="italic">'{item.title}'</span>,{" "}
                  {item.gallery}
                  {item.gallery && ","} {item.location}
                </li>
              ))}
            </ul>
          </article>
          <article className="md:text-justify">
            <h4 className="p4-bold-header md:d4-bold-header mb-2">
              Selected Public Speaking & Interviews
            </h4>
            <ul className="space-y-1">
              {publicSpeaking.map((item, index) => (
                <li key={index} className="p5-body md:d5-body">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="md:text-justify">
            <h4 className="p4-bold-header md:d4-bold-header mb-2">
              Selected Awards & Scholarships
            </h4>
            <ul className="space-y-1">
              {awards.map((item, index) => (
                <li key={index} className="p5-body md:d5-body">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h4 className="p4-bold-header md:d4-bold-header mb-2">Education</h4>
            <ul className="space-y-1">
              {education.map((item, index) => (
                <li key={index} className="p5-body md:d5-body">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h4 className="p4-bold-header md:d4-bold-header">
              Full CV can be found{" "}
              <a href="" className="text-ddc-highlight underline">
                here
              </a>
              .{" "}
            </h4>
          </article>
          <article>
            <h4 className="p4-bold-header md:d4-bold-header">
              For all enquiries, please contact me using the form{" "}
              <Link to="/contact" className="text-ddc-highlight underline">
                here
              </Link>
              .
            </h4>
          </article>
        </section>
        {/* Desktop: Image [after content on right]*/}
        <section className="hidden md:block flex-shrink-0">
          <img
            src={aboutPic}
            alt="Picture of Denise de Cordova behind a sculpture of a bird"
            className="w-[40rem] h-auto object-cover"
          />
        </section>
      </div>
    </main>
  );
};

export default About;
