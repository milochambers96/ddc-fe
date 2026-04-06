import {
  ColumnsPhotoAlbum,
  MasonryPhotoAlbum,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/columns.css";
import "react-photo-album/masonry.css";
import "react-photo-album/rows.css";
import { ExhibitionPhoto } from "../../data/exhibitions/exhibitions";

interface ImageMosaicProps {
  photos: ExhibitionPhoto[];
  layout?: "columns" | "rows" | "masonry";
  rowHeight?: number;
}

const ImageMosaic = ({
  photos,
  layout = "columns",
  rowHeight = 600,
}: ImageMosaicProps) => {
  if (photos.length === 0) return null;

  return (
    <article>
      {layout === "rows" && (
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={rowHeight}
          spacing={32}
        />
      )}
      {layout === "masonry" && (
        <MasonryPhotoAlbum photos={photos} columns={2} spacing={32} />
      )}
      {layout === "columns" && (
        <ColumnsPhotoAlbum photos={photos} columns={2} spacing={32} />
      )}
    </article>
  );
};

export default ImageMosaic;
