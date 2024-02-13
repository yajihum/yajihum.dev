export const getOgpImageUrl = (title: string) => {
  const url = `https://res.cloudinary.com/dpgixnkg1/image/upload/l_text:noto-snans.ttf_70_bold:${title},co_rgb:fff,w_1000,c_fit,y_-70/v1707824334/ogp-image.png`;
  return url;
};
