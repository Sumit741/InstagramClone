import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MessagePage.module.css";
import { BsChevronDown } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import SingleUserCard from "../reuseable/SingleUserCard";
import { TbSend } from "react-icons/tb";
import { useSelector } from "react-redux";

function MessagePage() {
  const users = useSelector((state) => state.picture.users);
  return (
    <div className={styles.messageContainer}>
      <div className={styles.friends}>
        <div className={styles.head}>
          <div>
            <span>
              gahatrajsumit123 <BsChevronDown />
            </span>
            <BiEdit className={styles.edit} />
          </div>
        </div>
        <div className={styles.friendslist}>
          {users.map((user) => (
            <div>
              <SingleUserCard
                image={user.src.original}
                username={user.photographer.split(" ").join("_")}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.message}>
        <div>
          <TbSend />
        </div>
        <h6>Your Messages</h6>
        <span>Send private photos and messages to a friend or group.</span>
        <button>Send Message</button>
      </div>
    </div>
  );
}

export default MessagePage;
