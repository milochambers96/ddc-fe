import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";

import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { Exhibition } from "../data/exhibitions/exhibitions";

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

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    flushSync(() => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    });

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="space-y-6 xl:space-y-14">
      {/* Carousel container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-x-4 md:gap-x-10">
          {exhibitions.map((exhibition) => (
            <div
              key={exhibition.id}
              className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-1rem)] min-w-0 space-y-8"
            >
              <Link to={`/exhibitions/${exhibition.id}`} className="group">
                <div className="space-y-3">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className={`w-full h-full object-cover ${
                        exhibition.imageFocus ?? "object-center"
                      }`}
                    />
                  </div>
                  <div className="space-y-[0.63rem]">
                    <h3 className="d3-large-detail min-h-[72px] group-hover:text-ddc-highlight transition-colors">
                      {exhibition.title}
                    </h3>
                    <p className="d6-detail group-hover:text-ddc-highlight transition-colors">
                      {exhibition.gallery}, {exhibition.location}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows - below carousel */}
      <div className="hidden md:flex items-center justify-between gap-4">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-ddc-text disabled:opacity-30 hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <HiChevronLeft size={24} className="text-ddc-text" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-ddc-text disabled:opacity-30 hover:bg-ddc-highlight hover:text-ddc-accent transition-colors"
          aria-label="Next slide"
        >
          <HiChevronRight size={24} className="text-ddc-text" />
        </button>
      </div>
    </div>
  );
};

export default ExhibitionsCarousel;
