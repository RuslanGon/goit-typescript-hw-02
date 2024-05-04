import React from "react";
import Modal from 'react-modal';
import css from './ImageModal.module.css';

interface ImageModalProps {
  onClose: () => void;
  isOpen: boolean;
  urlModal: string;
  description: string;
}

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    backgroundColor: 'transparent'
  },
};

Modal.setAppElement('#root');
Modal.defaultStyles.overlay!.backgroundColor = 'rgba(0, 0, 0, 0.871)';

const ImageModal: React.FC<ImageModalProps> = ({ onClose, isOpen, urlModal, description }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <img className={css.modal_image} src={urlModal} alt={description} />
    </Modal>
  );
}

export default ImageModal;
