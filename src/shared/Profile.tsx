import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { logOut } from "../redux/feature/auth/authSlice";

type Props = {
  profile: boolean;
  setProfile: (profile: boolean) => void;
};
const Profile = ({ setProfile }: Props) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Link to={""}>My Classes</Link>
        <Link to={""}>Bookmark</Link>
        <Link to={""}>Chat GPT</Link>
        {user && (
          <div className="">
            <Link to={"/admin"}>Admin Dashboard</Link>
          </div>
        )}
        <Link
          onClick={() => {
            dispatch(logOut());
            setProfile(false);
          }}
          to={""}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Profile;
