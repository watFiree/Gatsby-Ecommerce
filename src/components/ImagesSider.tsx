import React, { useState } from "react";

const ImagesSlider: React.FC<{ productName: string; images: string[] }> = ({
  productName,
  images,
}) => {
  const [position, setPosition] = useState(0);
  return (
    <div className="w-100 h-100 flex items-center justify-evenly">
      {position > 0 ? (
        <button onClick={() => setPosition(position - 1)}>left</button>
      ) : null}
      <img
        className="w-4/5"
        src={images[position]}
        alt={productName + "-image-" + position}
      />
      {position < images.length - 1 ? (
        <button onClick={() => setPosition(position + 1)}>right</button>
      ) : null}
    </div>
  );
};

export default ImagesSlider;
