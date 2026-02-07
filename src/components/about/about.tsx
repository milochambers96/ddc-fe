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

const About = () => {
  return (
    <main className="mt-[3rem]">
      <div className="flex justify-center gap-x-9 items-start">
        <section className="flex flex-col gap-y-16">
          <article>
            <h4 className="h4-bold-header mb-2">Artist Statement</h4>
            <p className="h5-body text-justify">{artistStatement}</p>
          </article>
          <article>
            <h4 className="h4-bold-header mb-2">Bio</h4>
            <p className="h5-body text-justify">{bio}</p>
          </article>
          <article className="text-justify">
            <h4 className="h4-bold-header mb-2">Selected Group Exhibitions</h4>
            <ul className="h5-body space-y-1">
              {groupExhibitions.map((item: GroupExhibit) => (
                <li key={item.id} className="h5-body">
                  {item.year}, '{item.title}' {item.gallery}
                  {item.gallery && ","} {item.location}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h4 className="h4-bold-header mb-2">
              Selected Public Speaking & Interviews
            </h4>
            <ul className="h5-body space-y-1">
              {publicSpeaking.map((item, index) => (
                <li key={index} className="h5-body">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h4 className="h4-bold-header mb-2">
              Selected Awards & Scholarships
            </h4>
            <ul className="h5-body space-y-1">
              {awards.map((item, index) => (
                <li key={index} className="h5-body">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h4 className="h4-bold-header mb-2">Education</h4>
            <ul className="h5-body space-y-1">
              {education.map((item, index) => (
                <li key={index} className="h5-body">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section className="flex-shrink-0">
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
