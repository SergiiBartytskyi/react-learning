import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, imageData }) {
  if (!imageData) return null;
  const { largeImageURL, likes, user, downloads, tags } = imageData;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img src={largeImageURL} alt={tags} className={css.image} />
        <div className={css.details}>
          <p>
            <strong>Author: </strong>
            {user}
          </p>
          <p>
            <strong>Likes: </strong>
            {likes}
          </p>
          <p>
            <strong>Downloads: </strong>
            {downloads}
          </p>
        </div>
      </div>
    </Modal>
  );
}
