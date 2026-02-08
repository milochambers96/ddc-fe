import { homepageHeroes } from "../data/homepage/homepage";

const Homepage = () => {
  return (
    <main className="mt-[3rem] px-4">
      <section className="flex flex-col md:flex-row justify-center gap-6 md:gap-x-9 items-start max-w-[81.25rem] mx-auto">
        {/* Rocks Remember and Other Stories */}
        <article className="flex flex-col gap-y-6 w-full md:w-[750px]">
          <div className="w-full h-auto md:h-[503px]">
            <img
              src={homepageHeroes[0].image}
              alt={`An image of ${homepageHeroes[0].title} from ${homepageHeroes[0].year}`}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="h3-large-detail">
              {homepageHeroes[0].title}, {homepageHeroes[0].year}
            </h3>
            <h6 className="h6-detail">{homepageHeroes[0].caption}</h6>
          </div>
        </article>

        {/* Deep Wood Woman */}
        <article className="flex flex-col gap-y-6 w-full md:w-[514px]">
          <div className="w-full h-auto md:h-[503px]">
            <img
              src={homepageHeroes[1].image}
              alt={`An image of ${homepageHeroes[1].title} from ${homepageHeroes[1].year}`}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="flex flex-col gap-y-2">
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
