import { homepageHeroes } from "../data/homepage/homepage";

const Homepage = () => {
  return (
    <main className="min-h-screen mt-[3rem]">
      <section className="flex justify-center gap-x-9 items-start">
        {/* Rocks Remember and Other Stories */}
        <article className="flex flex-col gap-y-6 w-[750px]">
          <div className="h-[503px] overflow-hidden">
            <img
              src={homepageHeroes[0].image}
              alt={`An image of ${homepageHeroes[0].title} from ${homepageHeroes[0].year}`}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="flex flex-col gap-y-2.5">
            <h3 className="h3-large-detail">
              {homepageHeroes[0].title}, {homepageHeroes[0].year}
            </h3>
            <h6 className="h6-detail">{homepageHeroes[0].caption}</h6>
          </div>
        </article>

        {/* Deep Wood Woman */}
        <article className="flex flex-col gap-y-6 w-[514px]">
          <div className="h-[503px] overflow-hidden">
            <img
              src={homepageHeroes[1].image}
              alt={`An image of ${homepageHeroes[1].title} from ${homepageHeroes[1].year}`}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="flex flex-col gap-y-2.5">
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
