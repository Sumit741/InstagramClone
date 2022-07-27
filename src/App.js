import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/Home";
import Nav from "./components/reuseable/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessagePage from "./components/pages/MessagePage";
import AddFIle from "./components/pages/AddFIle";
import { useSelector, useDispatch } from "react-redux";
import store from "./components/redux/Store";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Explore from "./components/pages/Explore";
import { PictureActions } from "./components/redux/Pictures";
import SearchCard from "./components/reuseable/SearchCard";
import { SearchActions } from "./components/redux/Search";
import Profile from "./components/pages/Profile";
import Post from "./components/pages/Post";
import Saved from "./components/pages/Saved";
import Tagged from "./components/pages/Tagged";

function App() {
  const dispatch = useDispatch();
  const showSearchCard = useSelector((state) => state.search.showCard);
  const clickHandler = () => {
    dispatch(SearchActions.hideCard());
  };
  useEffect(() => {
    fetch("https://api.pexels.com/v1/search?query=face", {
      headers: {
        Authorization:
          "563492ad6f9170000100000186695ff62c8a469c86e8d970da3d2968",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        dispatch(PictureActions.setUsers({ users: result.photos }));
      });
    Aos.init();
  }, []);

  const status = useSelector((state) => state.addfile.status);
  return (
    <BrowserRouter>
      <Nav />
      <div
        onClick={clickHandler}
        style={{
          width: "100%",
        }}
      >
        {showSearchCard && <SearchCard />}

        {status && <AddFIle />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<MessagePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="posts" element={<Post />} />
            <Route path="saved" element={<Saved />} />
            <Route path="tagged" element={<Tagged />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
