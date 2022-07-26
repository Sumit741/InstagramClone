import React from "react";
import styles from "./SuggestionCard.module.css";
import { AiOutlineClose } from "react-icons/ai";

function SuggestionCard() {
  return (
    <div className={styles.suggestionCard}>
      <AiOutlineClose className={styles.closeIcon} />
      <img src="pp.png" />
      <div>
        <span>gahatrajsumit123</span>
        <span>Followed by suman.bhattarai123</span>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default SuggestionCard;
