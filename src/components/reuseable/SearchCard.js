import React from "react";
import styles from "./SearchCard.module.css";
import { VscTriangleUp } from "react-icons/vsc";
import { BsTriangleFill } from "react-icons/bs";

function SearchCard() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        zIndex: 6,
      }}
    >
      <div className={styles.searchContainer}>
        <div
          style={{
            position: "relative",
            width: "100%",
            background: "blue",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BsTriangleFill className={styles.pointer} />
        </div>
        <div
          style={{
            height: "7%",
          }}
        >
          <span>Search Results</span>
        </div>
        <div className={styles.searchResult}>
          <span>No Searches</span>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
