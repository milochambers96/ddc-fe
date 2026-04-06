import { useParams } from "react-router-dom";
import {
  exhibitionsData,
  Exhibition,
} from "../../data/exhibitions/exhibitions";

const ExhibitionItemShell = () => {
  const { id } = useParams();
  const exhIdNum = Number(id);

  const exhItem =
    exhibitionsData.find((exhibition) => exhibition.id === exhIdNum) ?? null;

  return (
    <section className="flex justify-center mt-[4rem] md:mt-[6rem]">
      {/* Exh Info */}
      <div className="w-full max-w-[81.25rem] lg:max-w-[81.50rem] text-justify space-y-6">
        <h1 className="p1-title md:d1-title">{exhItem?.title}</h1>
        <h2 className="p3-large-detail md:d3-large-detail">{exhItem?.bio}</h2>
      </div>

      {/*  Exh Images*/}
    </section>
  );
};

export default ExhibitionItemShell;
