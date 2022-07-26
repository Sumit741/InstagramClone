import React from "react";
import styles from "./SingleUserCard.module.css";
function SingleUserCard({ image, username }) {
  return (
    <div className={styles.cardContainer}>
      <img src={image} />
      <div>
        <span>{username}</span>
        <span>Active Yesterday</span>
      </div>
    </div>
  );
}

export default SingleUserCard;
