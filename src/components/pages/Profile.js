import React from "react";
import styles from "./Profile.module.css";
import { IoIosSettings } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdGridOn, MdOutlinePersonPin } from "react-icons/md";
import { BsTriangleFill, BsGrid3X3, BsBookmark } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHead}>
        <img src="/pp.png" />
        <div className={styles.profileHeadRight}>
          <div className={styles.div1}>
            <span>gahatrajsumit123</span>
            <button>Edit profile</button>
            <IoIosSettings
              style={{
                fontSize: "30px",
                color: "rgb(38, 38, 38)",
              }}
            />
          </div>
          <div className={styles.div2}>
            <div>
              <span>2</span>
              <span>posts</span>
            </div>
            <div>
              <span>77</span>
              <span>followers</span>
            </div>
            <div>
              <span>61</span>
              <span>following</span>
            </div>
          </div>
          <span className={styles.username}>Ghr Xumit</span>
        </div>
      </div>
      <div className={styles.profileFoot}>
        <div className={`${styles.navs} profileLinks`}>
          <NavLink to="/profile/posts">
            <BsGrid3X3 className={styles.logo} /> POSTS
          </NavLink>
          <NavLink to="/profile/saved">
            <BsBookmark className={styles.logo} />
            SAVED
          </NavLink>
          <NavLink to="/profile/tagged">
            <MdOutlinePersonPin
              className={styles.logo}
              style={{
                fontSize: "15px",
              }}
            />
            TAGGED
          </NavLink>
        </div>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
