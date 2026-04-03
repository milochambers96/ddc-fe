import { Exhibition } from "../data/exhibitions/exhibitions";

interface ExhibitionsMobileFeedProps {
  exhibitions: Exhibition[];
}

const ExhibitionsMobileFeed = ({ exhibitions }: ExhibitionsMobileFeedProps) => {
  return (
    <div className="flex flex-col gap-y-10">
      {exhibitions.map((exhibition) => (
        <div key={exhibition.id} className="space-y-3">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={exhibition.image}
              alt={exhibition.title}
              className={`w-full h-full object-cover ${
                exhibition.imageFocus ?? "object-center"
              }`}
            />
          </div>
          <div className="space-y-[0.5rem]">
            <h3 className="p3-large-detail">{exhibition.title}</h3>
            <p className="p6-detail">
              {exhibition.gallery}, {exhibition.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExhibitionsMobileFeed;
