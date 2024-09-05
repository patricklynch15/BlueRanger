import React from "react";

interface props {
  photos: string[];
}

const BackGroundImage = () => {
  {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }

    let j = 5;
    while (j > 0) {
      j--;
      console.log(j);
    }
  }

  return <div>BackGroundImage</div>;
};

export default BackGroundImage;
