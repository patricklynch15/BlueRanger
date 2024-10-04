import bgImages from "../assets/BackgroundImageList";

const RotateBackground = () => {
  let idx = 0;
  let img = "";
  idx = (idx + 1) % bgImages.length;
  setInterval(() => {
    img = bgImages[idx];
  }, 5000);
};

export default RotateBackground;
