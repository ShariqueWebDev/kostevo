export const capitalizeFirstLetter = (words: string) => {
    let splitstr = words?.split("-");
    return splitstr
      ?.map((word: any) => {
        word = word.toLowerCase();
        word = word?.charAt(0)?.toUpperCase() + word?.slice(1);
        return word;
      })
      .join(" ");
  }