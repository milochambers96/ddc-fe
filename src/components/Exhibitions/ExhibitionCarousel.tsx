import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { Exhibition } from "../data/exhibitions/exhibitions";

// interface Exhibition {
//   id: string;
//   title: string;
//   location: string;
//   year: string;
//   image: string;
// }

interface ExhibitionsCarouselProps {
  exhibitions: Exhibition[];
}

const ExhibitionsCarousel = ({ exhibitions }: ExhibitionsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-x-4 md:gap-x-10">
          {exhibitions.map((exhibition) => (
            <div
              key={exhibition.id}
              className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-1rem)] min-w-0 space-y-8"
            >
              <div className="space-y-3">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Info */}
                <div className="space-y-[0.63rem]">
                  <h3 className="p3-large-detail md:d3-large-detail">
                    {exhibition.title}
                  </h3>
                  <p className="p6-detail md:d6-detail">
                    {exhibition.gallery}, {exhibition.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows - only show on desktop when scrollable */}
      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <HiChevronLeft size={24} className="text-ddc-text" />
        </button>
      )}

      {canScrollNext && (
        <button
          onClick={scrollNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-ddc-highlight hover:text-ddc-accent transition-colors"
          aria-label="Next slide"
        >
          <HiChevronRight size={24} className="text-ddc-text" />
        </button>
      )}
    </div>
  );
};

export default ExhibitionsCarousel;
