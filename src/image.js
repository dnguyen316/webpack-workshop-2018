const makeImage = (url, height = 400) => {
  const image = document.createElement("img");

  image.src = url;
  image.height = height;
  return image;
};

export default makeImage;
