import React, { useContext } from "react";
import { ChangeProfile } from "../Components/ChangeProfile";
import { ModNineContext } from "../Components/Module9";

export const Profile = () => {
  const { userName } = useContext(ModNineContext);
  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the profile for {userName}</p>
      <ChangeProfile />
    </div>
  );
};
