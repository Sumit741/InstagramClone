import React from "react";
import { useSelector } from "react-redux";
import styles from "./Posts.module.css";
import { BsFillHeartFill, BsFillChatFill } from "react-icons/bs";

function Posts({ users }) {
  return (
    <div className={styles.postContainer}>
      {users.map((user) => (
        <div key={user.id} className={styles.imgContainer}>
          <img src={user.src.original} />
          <div className={styles.transparentLayer}>
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

export default Posts;
