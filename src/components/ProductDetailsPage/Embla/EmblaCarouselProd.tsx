import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButtonProd";
import { Image } from "antd";

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla_prod flex gap-2 max-sm:flex-col-reverse">
      <div className="embla-thumbs  max-sm:!w-full">
        <div className="embla-thumbs__viewport " ref={emblaThumbsRef}>
          <div className="embla-thumbs__container max-sm:!flex-row   ">
            {slides?.map((item, index) => (
              <Thumb
                key={index}
                imgPath={item}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="embla__viewport  w-full " ref={emblaMainRef}>
        <div className="embla__container h-full">
          {slides?.map((item, index) => (
            <div className="embla__slide_prod" key={index}>
              <div className="embla__slide__number_prod !bg-white  ">
                <Image src={item} alt="Products" width={"100%"} height={"100%"} className="!mt-0 !w-full object-cover object-center !h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
