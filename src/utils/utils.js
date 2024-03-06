const parseImage = (image) => {
  const imageCopy = image.slice().split(`-`);
  const resultImage =
    imageCopy.length > 1
      ? imageCopy[0] + `-small-` + imageCopy[1]
      : imageCopy[0] + `-small`;
  return resultImage;
};

export {parseImage};
