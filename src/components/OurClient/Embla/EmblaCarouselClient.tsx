import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";
// import { DotButton, useDotButton } from './EmblaCarouselArrowButtonsClient'

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsClient";
import useEmblaCarousel from "embla-carousel-react";

export interface Slides {
  id: number;
  imgPath: string;
}

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla_client max-sm:!max-w-[330px] max-sm:!w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number ">
                <div className="shadow-lg h-[160px] border-t border-gray-100 rounded-md  p-5 flex justify-center items-center overflow-hidden ">
                  <img
                    src={item?.imgPath}
                    alt="Clients"
                    className="w-[150px] object-contain object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls ">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
