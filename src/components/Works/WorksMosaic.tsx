import { MasonryPhotoAlbum, ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { WorkPhoto } from "../data/works/worksInterfaces";

interface WorksMosaicProps {
  photos: WorkPhoto[];
  columns?: number;
  spacing?: number;
}

const WorksMosaic = ({
  photos,
  columns = 4,
  spacing = 24,
}: WorksMosaicProps) => {
  if (photos.length === 0) return null;

  return (
    <article>
      <ColumnsPhotoAlbum photos={photos} columns={columns} spacing={spacing} />
    </article>
  );
};

export default WorksMosaic;
