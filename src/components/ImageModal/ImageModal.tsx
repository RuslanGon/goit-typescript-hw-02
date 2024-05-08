import  "./ImageModal.module.css"
import Modal from 'react-modal'
import css from './ImageModal.module.css'
import { FC } from "react";
import { Photo } from '../../types';

interface ImageModalProps{
  onClose:() => void;
  photo: Photo; 
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border:'none',
        backgroundColor:'transparent'
    },
};

Modal.setAppElement('#root');
Modal.defaultStyles.overlay = Modal.defaultStyles.overlay || {};
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.871)';
const ImageModal: FC<ImageModalProps>  = ({onClose, photo}) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={customStyles}  
    >
        <img className={css.modal_image} src={photo.urls.regular} alt={photo.alt_description} />
    </Modal>
  )
}

export default ImageModal