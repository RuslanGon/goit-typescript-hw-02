import React from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  url: string;
  description: string;
  urlModal: string;
  openModal: (url: string, description: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, description, urlModal, openModal }) => {
  return (
    <div>
      <img className={css.gallery_image} src={url} alt={description} onClick={() => openModal(urlModal, description)} />
    </div>
  );
};

export default ImageCard;
