import React from "react";
import styles from "./Story.module.css";
function Story({ picture, name }) {
  return (
    <div className={styles.story}>
      <div>
        <img src={picture} />
      </div>
      <span>{name.split(" ").join("_")}</span>
    </div>
  );
}

export default Story;
