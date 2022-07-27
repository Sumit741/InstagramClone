import React from "react";
import { useSelector } from "react-redux";
import Posts from "../reuseable/Posts";

function Saved() {
  const users = useSelector((state) => state.picture.users);
  return (
    <div>
      <Posts users={[...users].splice(0, 5)} />
    </div>
  );
}

export default Saved;
