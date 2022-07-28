import React, { useState } from "react";
import styles from "./Explore.module.css";
import { useSelector, useDispatch } from "react-redux";
import { PictureActions } from "../redux/Pictures";
import { BsFillHeartFill, BsFillChatFill } from "react-icons/bs";
import ReactLoading from "react-loading";
import PostModalCard from "../reuseable/PostModalCard";

function Explore() {
  const dispatch = useDispatch();
  const [showPost, setShowPost] = useState(false);
  const pictures = useSelector((state) => state.picture.pictures);
  const [loading, setLoading] = useState(true);
  useState(() => {
    fetch("https://api.pexels.com/v1/search?query=gentleman", {
      headers: {
        Authorization:
          "563492ad6f9170000100000186695ff62c8a469c86e8d970da3d2968",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch(PictureActions.setPictures({ pictures: result.photos }));
        setLoading(false);
      });
  }, []);

  const clickHandler = () => {
    setShowPost(true);
  };

  const closeHandler = () => {
    setShowPost(false);
  };
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div className={styles.imageContainer}>
        {loading && (
          <div className={styles.loading}>
            <ReactLoading
              type="spokes"
              color="#36565c"
              height={20}
              width={20}
            />
          </div>
        )}

        {pictures.map((item) => (
          <div key={item.id} className={styles.image} onClick={clickHandler}>
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
      {showPost && <PostModalCard close={closeHandler} />}
    </div>
  );
}

export default Explore;
