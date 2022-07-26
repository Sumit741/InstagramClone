import React from "react";
import styles from "./PostCard.module.css";
import { BsThreeDots, BsHeart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsEmojiSmile } from "react-icons/bs";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";

function PostCard({ image, username, likes, comments, caption }) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <img src={image} />
        <div>
          <span>{username}</span>
          <span>United States of America</span>
        </div>
        <BsThreeDots className={styles.dots} />
      </div>
      <div className={styles.media}>
        <img src={image} />
      </div>
      <div className={styles.activity}>
        <div className={styles.likeComment}>
          <FiHeart />
          <FaRegComment />
          <FiSend />
        </div>
        <div>
          <BiBookmark
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <span
        style={{
          fontWeight: 600,
          fontSizeL: "14px",
          paddingLeft: "13px",
        }}
      >
        {likes} likes
      </span>
      <div style={{ marginTop: "8px", padding: "0 13px" }}>
        <span
          style={{
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {username}
        </span>
        <span
          style={{ marginLeft: "10px", fontSize: "14px", fontWeight: "400" }}
        >
          {caption}
        </span>
      </div>
      <div>
        <span
          style={{
            fontWeight: 400,
            fontSize: "14px",
            display: "block",
            color: "rgb(142, 142, 142)",
            paddingLeft: "13px",
            marginTop: "10px",
          }}
        >
          View all {comments} comments
        </span>
      </div>
      <span
        style={{
          fontWeight: 400,
          display: "block",
          fontSize: "10px",
          color: "rgb(142, 142, 142)",
          paddingLeft: "13px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        3 DAYS AGO
      </span>
      <div className={styles.postComment}>
        <BsEmojiSmile
          style={{
            fontSize: "25px",
          }}
        />
        <input type="text" placeholder="Add a comment..." />
        <span>Post</span>
      </div>
    </div>
  );
}

export default PostCard;
