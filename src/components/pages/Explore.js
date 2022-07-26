import React, { useState } from "react";
import styles from "./Explore.module.css";
import { useSelector, useDispatch } from "react-redux";
import { PictureActions } from "../redux/Pictures";
import { BsFillHeartFill, BsFillChatFill } from "react-icons/bs";

function Explore() {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.picture.pictures);
  console.log(pictures);
  useState(() => {
    fetch("https://api.pexels.com/v1/search?query=gentleman", {
      headers: {
        Authorization:
          "563492ad6f9170000100000186695ff62c8a469c86e8d970da3d2968",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        dispatch(PictureActions.setPictures({ pictures: result.photos }));
      });
  }, []);

  return (
    <div className={styles.imageContainer}>
      {pictures.map((item) => (
        <div key={item.id} className={styles.image}>
          <img src={item.src.original} />
          <div className={styles.layer}>
            <div>
              <BsFillHeartFill
                style={{
                  marginTop: "5px",
                }}
              />
              <span>100k</span>
            </div>
            <div>
              <BsFillChatFill
                style={{
                  marginTop: "2px",
                }}
              />
              <span>450</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Explore;
