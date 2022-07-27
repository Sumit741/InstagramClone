import React from "react";
import { useSelector } from "react-redux";
import Posts from "../reuseable/Posts";

function Tagged() {
  const users = useSelector((state) => state.picture.users);
  return (
    <div>
      <Posts users={[...users].splice(5, 12)} />
    </div>
  );
}

export default Tagged;
