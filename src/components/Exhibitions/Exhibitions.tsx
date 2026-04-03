import { exhibitionsData } from "../data/exhibitions/exhibitions";
import ExhibitionsMobileFeed from "./ExhibitionMobileFeed";
import ExhibitionsCarousel from "./ExhibitionCarousel";

const Exhibitions = () => {
  return (
    <main className="mt-[3rem] md:mt-[6.56rem] px-4 md:px-0">
      <div className="max-w-[81.25rem] mx-auto">
        <div className="md:hidden">
          <ExhibitionsMobileFeed exhibitions={exhibitionsData} />
        </div>
        <div className="hidden md:block">
          <ExhibitionsCarousel exhibitions={exhibitionsData} />
        </div>
      </div>
    </main>
  );
};

export default Exhibitions;
