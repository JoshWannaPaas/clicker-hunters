import { usernameAtom } from "@/atoms/username";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";

const ProfileSection = () => {
  const [shownUsername, setShownUsername] = React.useState("");
  const [username, setUsername] = useRecoilState(usernameAtom);

  useEffect(() => setShownUsername(username), [username]);
  return <div>{username}</div>;
};
export default ProfileSection;

// export default function ProfileSection () {

// }
