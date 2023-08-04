import { usernameAtom } from "@/recoil/profile"
import { useRecoilState } from "recoil"

const SignInSection = () => {
  const [username, setUsername] = useRecoilState(usernameAtom)

  return (
    <div>
      <button onClick={() => {
        setUsername("Tommy")
      }}>Change Username</button>
    </div>
    )

}
export default SignInSection;