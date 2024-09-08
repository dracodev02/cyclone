"use client";
import { useState } from "react";
import Image from "next/image";
import errorImg from "@/package/@ui-kit/Image/image_not_found.png";

interface ImageProps {
  src: string;
  className?: string;
}

const ImageComp: React.FC<ImageProps> = ({ src, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(errorImg.src);
  };

  return (
    <div className={`rounded overflow-hidden ${className}`}>
      <img
        className="object-cover w-full h-full"
        src={imgSrc}
        alt=""
        onError={handleError}
      />
    </div>
  );
};

export default ImageComp;
