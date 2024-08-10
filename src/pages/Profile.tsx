import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";


const Profile = () => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    return (
        <div>
          <div className="flex flex-col gap-4">
          <Link to={''}>My Classes</Link>
          <Link to={''}>Bookmark</Link>
          <Link to={''}>Chat GPT</Link>
          {
            user && <div className="">
                <Link to={'/admin'}>Admin Dashboard</Link>
            </div>
          }
          </div>
        </div>
    );
};

export default Profile;