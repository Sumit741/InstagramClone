import React from "react";
import { useSelector } from "react-redux";
import Posts from "../reuseable/Posts";

function Post() {
  const users = useSelector((state) => state.picture.users);
  return (
    <div>
      <Posts users={[...users].splice(10, 14)} />
    </div>
  );
}

export default Post;
