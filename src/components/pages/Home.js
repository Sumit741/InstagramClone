import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Follow from "../reuseable/Follow";
import Nav from "../reuseable/Nav";
import PostCard from "../reuseable/PostCard";
import Story from "../reuseable/Story";
import SuggestionCard from "../reuseable/SuggestionCard";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";

function Home() {
  const users = useSelector((state) => state.picture.users);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.posts}>
          {/*STORY SECTIOn */}
          <div className={styles.storySection}>
            {users.map((user) => (
              <div className={styles.storyComp} key={user.id}>
                <Story picture={user.src.original} name={user.photographer} />
              </div>
            ))}
          </div>

          {/*POST SECTION */}
          <div className={styles.postSection}>
            <PostCard
              image="pp.png"
              username="Sumit_Gahatraj"
              likes="2500"
              comments="1200"
              caption={`Peace ‎😃`}
            />
            <div className={styles.suggestionBox}>
              <div className={styles.div1}>
                <span>Suggestions For You</span>
                <span>See All</span>
              </div>
              <div className={styles.div2}>
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
              </div>
            </div>
            <div>
              {users.map((user) => (
                <div key={user.id}>
                  <PostCard
                    image={user.src.original}
                    username={user.photographer.split(" ").join("_")}
                    likes={user.height}
                    comments={user.width}
                    caption={user.alt}
                  />
                </div>
              ))}
            </div>
            {/* <PostCard />
            <PostCard />
            <PostCard /> */}
          </div>
        </div>
        <div className={styles.footers}>
          <div className={styles.firstComp}>
            <img src="pp.png" />
            <div>
              <span>gahatrajsumit123</span>
              <span>Ghr Xumit</span>
            </div>
            <span className={styles.accountSwitch}>Switch</span>
          </div>
          <div className={styles.suggestions}>
            <div>
              <span>Suggestions For You</span>
              <span>See All</span>
            </div>
          </div>
          <div className={styles.followersContainer}>
            {[...users].splice(0, 5).map((user) => (
              <div key={user.id}>
                <Follow
                  image={user.src.original}
                  username={user.photographer.split(" ").join("_")}
                />
              </div>
            ))}
          </div>
          <div className={styles.usefulLinks}>
            <Link to="/about">About . </Link>
            <Link to="/about">Help . </Link>
            <Link to="/about">Press . </Link>
            <Link to="/about">API . </Link>
            <Link to="/about">Jobs . </Link>
            <Link to="/about">Privacy . </Link>
            <Link to="/about">Terms . </Link>
            <Link to="/about">Locations . </Link>
            <Link to="/about">Language</Link>
          </div>
          <span
            style={{
              display: "block",
              marginTop: "20px",
              fontSize: "12px",
              fontWeight: "400",
              color: "rgb(199, 199, 199)",
            }}
          >
            &copy; 2022 INSTAGRAM FROM META
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
