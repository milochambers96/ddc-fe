import useSculpturePhotos from "../../hooks/useSculpturePhotos";
import WorksMosaic from "./WorksMosaic";
import { sculptureData } from "../data/works/sculptures/scultpures";
const birdscapes = sculptureData[0];
const darkBella = sculptureData[1];

const Works = () => {
  const birdscapePhotos = useSculpturePhotos(birdscapes);
  const darkBellaPhotos = useSculpturePhotos(darkBella);

  return (
    <main className="mt-[3rem] md:mt-[6.56rem] px-4 md:px-0">
      <div className="space-y-8">
        <div className="max-w-[81.25rem] mx-auto">
          <WorksMosaic photos={birdscapePhotos} />
        </div>
        <div className="max-w-[81.25rem] mx-auto">
          <WorksMosaic photos={darkBellaPhotos} />
        </div>
      </div>
    </main>
  );
};

export default Works;
