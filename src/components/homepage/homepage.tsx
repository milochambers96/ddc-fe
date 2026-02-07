import { homepageHeroes } from "../data/homepage/homepage";

const Homepage = () => {
  return (
    <main className="pt-[3rem]">
      <section className="flex justify-center gap-x-[2.25rem] items-start">
        {/* Rocks Remember and Other Stories */}
        <article className="flex flex-col gap-y-[1.5rem] w-[750px]">
          <div className="w-[750px] h-[503px] overflow-hidden self-stretch">
            <img
              src={homepageHeroes[0].image}
              alt={`An image of ${homepageHeroes[0].title} from ${homepageHeroes[0].year}`}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="flex flex-col gap-y-[0.625rem]">
            <h3 className="h3-large-detail">
              {homepageHeroes[0].title}, {homepageHeroes[0].year}
            </h3>
            <h6 className="h6-detail">{homepageHeroes[0].caption}</h6>
          </div>
        </article>

        {/* Deep Wood Woman */}
        <article className="flex flex-col gap-y-[1.5rem] w-[514px]">
          <div className="w-[514px] h-[503px] overflow-hidden self-stretch">
            <img
              src={homepageHeroes[1].image}
              alt={`An image of ${homepageHeroes[1].title} from ${homepageHeroes[1].year}`}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="flex flex-col gap-y-[0.625rem]">
            <h3 className="h3-large-detail">
              {homepageHeroes[1].title}, {homepageHeroes[1].year}
            </h3>
            <h6 className="h6-detail">{homepageHeroes[1].caption}</h6>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Homepage;
