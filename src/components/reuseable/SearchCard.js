import React from "react";
import styles from "./SearchCard.module.css";
import { VscTriangleUp } from "react-icons/vsc";
import { BsTriangleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function SearchCard() {
  const showSearch = useSelector((state) => state.search.showSearchLabel);
  const showNotFound = useSelector((state) => state.search.showNotFound);
  const searchResults = useSelector((state) => state.search.searchResult);
  console.log(searchResults);
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
          <div className={styles.spans}>
            {showSearch && <span>No Searches</span>}
            {showNotFound && <span>No Matched Results</span>}
          </div>
          {searchResults.length > 0 && (
            <div className={styles.resultSection}>
              {searchResults.map((user) => (
                <div key={user.id} className={styles.indSearch}>
                  <img src={user.src.original} />
                  <div>
                    <span>{user.photographer.split(" ").join("_")}</span>
                    <span>{user.photographer}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
