import React, { useState } from "react";
import { useSelector } from "react-redux";
import PostModalCard from "../reuseable/PostModalCard";
import Posts from "../reuseable/Posts";

function Post() {
  const users = useSelector((state) => state.picture.users);
  const [showModal, setShowModal] = useState(false);
  const showCardModal = () => {
    setShowModal(true);
  };

  const closeHandler = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Posts users={[...users].splice(10, 14)} showCardModal={showCardModal} />
      <div
        style={{
          position: "fixed",
          left: "0",
          zIndex: 6,
        }}
      >
        {showModal && <PostModalCard close={closeHandler} />}
      </div>
    </div>
  );
}

export default Post;
