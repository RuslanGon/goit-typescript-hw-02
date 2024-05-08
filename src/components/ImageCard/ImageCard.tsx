import css from "./ImageCard.module.css"
import { Photo } from '../../types'
import { FC} from "react";

interface ImageCardProps {
  photo: Photo;
  openModal: (photo: Photo) => void;

}

const ImageCard:FC<ImageCardProps> = ({ photo,openModal}) => {
  
  return (
      <div>
          <img className={css.gallery_image} src={photo.urls.small} alt={photo.alt_description} onClick={()=>openModal(photo)}/>
      </div>
  


  )
}

export default ImageCard