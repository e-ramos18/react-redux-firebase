import React from "react";
import Btn from "./Btn";
import Modal from "react-bootstrap/Modal";

const DeleteUserModal = ({ handleClose, show, deleteUser, userId }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Header>
          <p>&nbsp;</p>
          <p>Confirm User Deletion</p>
          <Btn label="X" className="btn-m-close" onClickHandler={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <div className="m-body">
            <img
              src="/assets/img1.png"
              className="question"
              alt="question mark"
            />
            <p>Are you sure?</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Btn
            label="Ok"
            className="btn_three"
            onClickHandler={() => deleteUser(userId)}
          />
          <Btn
            label="Cancel"
            className="btn_three"
            onClickHandler={handleClose}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUserModal;
