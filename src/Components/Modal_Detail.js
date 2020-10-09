import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./css/Modal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "40%",
  },
};

const Modal_Detail = (props) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "rgb(26, 2, 92)";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="modal">
      <button onClick={openModal} className="open_modal btn_km">
        Know More
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p onClick={closeModal} className="close">
          &#x2573;{" "}
        </p>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.name}</h2>
        <div>
          <h4>{props.detail}</h4>
        </div>
        <br />
        <img style={{ margin: "auto" }} src={props.src} />
        <h4>
          <a href={props.full} target="_blank" className="article">
            Full Article
          </a>
        </h4>
      </Modal>
    </div>
  );
};

export default Modal_Detail;
