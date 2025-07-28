import React, { ReactNode, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtonProd";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonProd";
import useEmblaCarousel from "embla-carousel-react";
import "./emblaProd.css";
import ProductCard from "../ProductCard";
import Link from "next/link";
// import { BACKEND_URL } from "@/app/layout";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const [productSectionData, setProductSectionData] = useState<any | null>(
    null
  );
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const fetchCategoryMainCategory = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/wp-json/wp/v2/products/`);
      const data = await response.json();
      setProductSectionData(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategoryMainCategory();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla_prod">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {productSectionData?.map((item: any, index: number) => {

            return (
              <div className="embla__slide max-sm:pr-5" key={index}>
                <div className="embla__slide__number  !flex">
                  <Link href={`/product-details/${item?.slug}`}>
                    <ProductCard
                      title={item?.title?.rendered}
                      description={item?.meta?._description}
                      imgPath={item?.meta?.image}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons ml-5 max-sm:ml-0">
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
