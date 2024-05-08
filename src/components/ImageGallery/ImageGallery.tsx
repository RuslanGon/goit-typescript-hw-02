
import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"
import { Photo } from '../../types'
import { FC, LegacyRef } from "react";

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
  lastImageRef: LegacyRef<HTMLLIElement> | null;
}
const ImageGallery:FC<ImageGalleryProps> = ({ photos, openModal,lastImageRef }) => {
     return (
        <ul className={css.gallery_list} >
            {photos.map((photo, index) => {
                const isLastImage:boolean = index === photos.length - 1;
                return (
          <li className={css.gallery_item} key={photo.id} ref={isLastImage ? lastImageRef : null}>
          <ImageCard photo={photo} openModal={openModal} />
          </li>
        );
            })}

        </ul>

    )

}

export default ImageGallery