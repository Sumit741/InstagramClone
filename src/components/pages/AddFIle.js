import React from "react";
import styles from "./AddFile.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { AddFileActions } from "../redux/AddFileModal";

function AddFIle() {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(AddFileActions.setStatus());
  };
  return (
    <div className={styles.modal}>
      <AiOutlineClose className={styles.closeIcon} onClick={closeHandler} />
      <div className={styles.fileContainer} data-aos="zoom-in">
        <div>
          <span>Create new post</span>
        </div>
        <div>
          <img src="add.png" />
          <span>Drag photos and videos here</span>
          <button>Select from computer</button>
        </div>
      </div>
    </div>
  );
}

export default AddFIle;
