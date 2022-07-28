import React from "react";
import styles from "./PostModalCard.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDots, BsHeart } from "react-icons/bs";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { BsChat, BsEmojiSmile } from "react-icons/bs";

function PostModalCard({ close }) {
  const closeHandler = () => {
    close();
  };
  return (
    <div className={styles.postModalContainer}>
      <AiOutlineClose className={styles.closeIcon} onClick={closeHandler} />

      {/*Header */}
      <div className={styles.containerModal}>
        <div className={styles.div1}>
          <img src={"/pp.png"} />
        </div>
        <div className={styles.div2}>
          <div className={styles.header}>
            <img src={"/pp.png"} />
            <div className={styles.headerdiv1}>
              <div>
                <span>gahatrajSumit</span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "rgb(38, 38, 38)",
                  }}
                >
                  {" "}
                  .{" "}
                </span>
                <span>Follow</span>
              </div>
              <span>United States</span>
            </div>
            <BsThreeDots className={styles.dots} />
          </div>

          {/*Comment Section */}
          <div className={styles.commentSection}>
            <div className={styles.postCaption}>
              <img src="/pp.png" />
              <div>
                <span>gahatrajsumit123</span>
                <span>
                  Nice place to have fun Nice place to have fun Nice place to
                  have fun
                </span>
              </div>
            </div>

            <div className={styles.comments}>
              <img src="/pp.png" />
              <div>
                <span>gahatrajsumit123</span>
                <span>Nice place to have fun</span>
              </div>
            </div>
          </div>

          {/*Footer Section */}
          <div className={styles.foot}>
            <div className={styles.likecomshare}>
              <div>
                <FiHeart className={styles.icon} />
                <FaRegComment className={styles.icon} />
                <FiSend className={styles.icon} />
                <BiBookmark className={styles.icon} />
              </div>
              <span>14,000 likes</span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "400",
                  color: "rgb(142, 142, 142",
                }}
              >
                3 DAYS AGO
              </span>
            </div>
            <div className={styles.writingContainer}>
              <BsEmojiSmile
                style={{
                  fontSize: "25px",
                }}
              />
              <input type="text" placeholder="Add a comment..." />
              <span>Post</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModalCard;
