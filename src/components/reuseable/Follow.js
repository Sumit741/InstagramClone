import React from "react";
import styles from "./Follow.module.css";

function Follow({ image, username }) {
  return (
    <div className={styles.followContainer}>
      <img src={image} />
      <div className={styles.follower}>
        <span>{username}</span>
        <span>Follows you</span>
      </div>
      <span className={styles.followBtn}>Follow</span>
    </div>
  );
}

export default Follow;
