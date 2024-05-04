import Modal from "react-modal";
import css from "./ImageModal.module.css";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const ImageModal = ({ closeModal, modalIsOpen, modalImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {modalImage.length > 0 && (
        <div className={css.modalContainer}>
          <div className={css.imgContainer}>
            <img
              className={css.modalImg}
              src={modalImage[0].urls.regular}
              alt={modalImage[0].slug}
            />
          </div>
          <div className={css.descContainer}>
            <p className={css.imgDesc}>{modalImage[0].alt_description}</p>
            <p className={css.imgLikes}>👍: {modalImage[0].likes}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};
export default ImageModal;