import { useParams } from "react-router-dom";
import { exhibitionsData } from "../../data/exhibitions/exhibitions";
import ImageMosaic from "./ImageMosaic";

const ExhibitionItemShell = () => {
  const { id } = useParams();
  const exhIdNum = Number(id);

  const exhItem =
    exhibitionsData.find((exhibition) => exhibition.id === exhIdNum) ?? null;

  return (
    <section className="mt-[4rem] md:mt-[6rem] max-w-[81.25rem] mx-auto space-y-10">
      {/* Exh Info */}
      <div className="text-justify space-y-6">
        <h1 className="p1-exh md:d1-exh">{exhItem?.title}</h1>
        <h3 className="p3-large-detail md:d3-large-detail">{exhItem?.bio}</h3>
      </div>

      {/* Exh Images */}
      <div className="w-full">
        <ImageMosaic
          photos={exhItem?.exhibitionPhotos ?? []}
          layout={exhItem?.mosaicLayout}
        />
      </div>
    </section>
  );
};

export default ExhibitionItemShell;
