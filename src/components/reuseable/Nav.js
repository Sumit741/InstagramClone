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

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.picture.users);
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
  return (
    <nav className={styles.navbar}>
      <img
        src="instagram.png"
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
      <div className={styles.menus}>
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
        <div className={styles.profile}>
          <img src="pp.png" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
