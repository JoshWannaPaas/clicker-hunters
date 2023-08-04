import { usernameAtom } from "@/recoil/profile";
import { useRecoilState } from "recoil";



const ProfileSection = () => {
  const [username, setUsername] = useRecoilState(usernameAtom)

  return (
    <div>
      {username}
    </div>
  )
}
export default ProfileSection;

// export default function ProfileSection () {
  
// }