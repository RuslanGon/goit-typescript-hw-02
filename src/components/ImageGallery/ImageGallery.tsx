import React, { RefObject } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (url: string, description: string) => void;
  lastImageRef: RefObject<HTMLLIElement>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal, lastImageRef }) => {
  return (
    <ul className={css.gallery_list}>
      {photos.map((photo, index) => {
        const isLastImage = index === photos.length - 1;
        return (
          <li className={css.gallery_item} key={photo.id} ref={isLastImage ? lastImageRef : null}>
            <ImageCard url={photo.urls.small} description={photo.alt_description} urlModal={photo.urls.regular} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
