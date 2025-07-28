import React, { ReactNode, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtonCat";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonCat";
import useEmblaCarousel from "embla-carousel-react";
import "./emblaCat.css";
import CategoriesCard from "../CategoriesCard";
import Link from "next/link";
// import { BACKEND_URL } from "@/app/layout";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const [CategorySectionData, setCategorySectionData] = useState<any | null>(
    null
  );

  const fetchCategoryMainCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getAllMainCat`
      );
      const data = await response.json();
      setCategorySectionData(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategoryMainCategory();
  }, []);

  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  // item?.subcategories?`/sub-category-products/${item?.slug}`:`/products/${item?.slug}`
  return (
    <section className="embla_cat">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {CategorySectionData?.map((item: any, index: number) => {
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number !flex gap-5 ">
                  <Link
                    href={`${
                      item?.subcategories
                        ? `/sub-category-products/${item?.slug}`
                        : `/products/${item?.slug}`
                    }`}
                  >
                    <CategoriesCard
                      title={item?.name}
                      description={item?.description}
                      imgUrl={item?.image}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_:any, index:number) => (
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
