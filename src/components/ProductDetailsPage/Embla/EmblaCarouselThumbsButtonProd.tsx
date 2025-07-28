import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  imgPath: string;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, imgPath, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide max-w-[80px] w-full !h-[80px] ".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <img
        onClick={onClick}
        src={imgPath}
        className="embla-thumbs__slide__number max-w-[80px] w-full !h-[80px]"
      />
    </div>
  );
};
