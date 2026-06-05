import { useState, useEffect } from "react";
import { WorkPhoto } from "../components/data/works/worksInterfaces";

function useSculpturePhotos(
  sculptures: { image: string; caption: string }[]
): WorkPhoto[] {
  const [photos, setPhotos] = useState<WorkPhoto[]>([]);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      sculptures.map(
        (s) =>
          new Promise<WorkPhoto>((resolve) => {
            const img = new Image();
            img.onload = () =>
              resolve({
                src: s.image,
                alt: s.caption,
                width: img.naturalWidth,
                height: img.naturalHeight,
              });
            img.onerror = () =>
              resolve({
                src: s.image,
                alt: s.caption,
                width: 800,
                height: 600,
              });
            img.src = s.image;
          })
      )
    ).then((loaded) => {
      if (!cancelled) setPhotos(loaded);
    });

    return () => {
      cancelled = true;
    };
  }, [sculptures]);

  return photos;
}

export default useSculpturePhotos;
