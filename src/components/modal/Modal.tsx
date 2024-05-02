import { Dispatch, SetStateAction } from 'react';
import './Modal.css';

type Props = {
  title: string;
  opening_crawl: string;
  release_date: string;
  director: string;
  setModal: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({
  title,
  opening_crawl,
  release_date,
  director,
  setModal,
}: Props) => {
  return (
    <div className="modal__overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{opening_crawl}</p>
        <p>{release_date}</p>
        <p>{director}</p>
        <button className="btn" onClick={() => setModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
