import { materialListAtom } from "@/atoms/materialList";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";

// const ProfileSection = () => {
//     const [username, setUsername] = useRecoilState(usernameAtom)
//     return (
//       <div>
//         {username}
//       </div>
//     )
//   }
//   export default ProfileSection;

  const MaterialSection = () => {
    const [materialList, setMaterialList] = useRecoilState(materialListAtom);

    return(
        <div>{JSON.stringify(materialList)}</div>
    )
  }

  export default MaterialSection;