import React from "react";
import styles from "./Nav.module.css";
import { BsSearch } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { VscDiffAdded } from "react-icons/vsc";
import { IoCompassOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddFileActions } from "../redux/AddFileModal";
import { SearchActions } from "../redux/Search";
import { BsTriangleFill, BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { TiArrowSync } from "react-icons/ti";
import { ProfileActions } from "../redux/Profile";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.picture.users);
  const showCard = useSelector((state) => state.profile.showCard);
  const addFileHandler = () => {
    dispatch(AddFileActions.setStatus());
  };

  const clickHandler = () => {
    dispatch(SearchActions.showCard());
  };

  const changeHandler = (e) => {
    if (e.target.value === "") {
      dispatch(SearchActions.showSearch());
      dispatch(SearchActions.setSearchResult({ results: [] }));
    } else {
      dispatch(SearchActions.hideSearch());
      const result = users.filter((user) =>
        user.photographer.toLowerCase().includes(e.target.value.toLowerCase())
      );

      if (result.length > 0) {
        dispatch(SearchActions.setSearchResult({ results: result }));
        dispatch(SearchActions.hideFound());
      } else {
        dispatch(SearchActions.showFound());
        dispatch(SearchActions.setSearchResult({ results: [] }));
      }
    }
  };

  const profileHandler = () => {
    dispatch(ProfileActions.toggleCard());
  };

  const closeMenu = () => {
    dispatch(ProfileActions.hideCard());
  };
  return (
    <nav className={styles.navbar}>
      <img
        src="/instagram.png"
        className={styles.instalogo}
        onClick={() => {
          navigate("/");
        }}
      />
      <div className={styles.searchSection}>
        <BsSearch className={styles.searchIcon} />
        <input
          type="search"
          placeholder="Search"
          onClick={clickHandler}
          onChange={changeHandler}
        />
      </div>
      <div className={`${styles.menus} navbar`}>
        <div>
          <NavLink to="/">
            <MdHomeFilled className={styles.menuIcons} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/messages">
            {" "}
            <RiMessengerLine className={styles.menuIcons} />
          </NavLink>
        </div>
        <div>
          <VscDiffAdded className={styles.menuIcons} onClick={addFileHandler} />
        </div>
        <div>
          <NavLink to="/explore">
            <IoCompassOutline className={styles.menuIcons} />
          </NavLink>
        </div>
        <div>
          <AiOutlineHeart className={styles.menuIcons} />
        </div>
        <div className={styles.profile} onClick={profileHandler}>
          <img src="/pp.png" />
          {showCard && (
            <div className={styles.menuCard}>
              <div>
                <BsTriangleFill className={styles.pointedIcon} />
              </div>
              <div className={styles.options}>
                <Link to="/profile/posts">
                  <CgProfile /> <span>Profile</span>
                </Link>
                <Link to="/profile/saved">
                  <BsBookmark /> <span>Saved</span>
                </Link>
                <Link to="/settings/edit">
                  <AiOutlineSetting /> <span>Settings</span>
                </Link>
                <Link to="/settings">
                  <TiArrowSync /> <span>Switch accounts</span>
                </Link>
                <Link
                  to="/"
                  style={{
                    borderTop: "1px solid rgb(221, 219, 219)",
                    fontSize: "14px",
                  }}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
