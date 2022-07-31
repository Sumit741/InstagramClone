import React, { useState } from "react";
import { useSelector } from "react-redux";
import PostModalCard from "../reuseable/PostModalCard";
import Posts from "../reuseable/Posts";

function Tagged() {
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
      <Posts users={[...users].splice(5, 12)} showCardModal={showCardModal} />
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

export default Tagged;
