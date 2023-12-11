import React, { useContext, useState } from "react";
import { ModNineContext } from "./Module9";

export const ChangeProfile = () => {
  const [newUserName, setNewUserName] = useState("");
  const {setUserName}= useContext(ModNineContext);

  return (
    <div>
      <input type='text' onChange={(e) => setNewUserName(e.target.value)} />
      <button onClick={() => setUserName(newUserName)}>Change Username</button>
    </div>
  );
};
