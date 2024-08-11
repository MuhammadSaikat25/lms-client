import { ReactNode, useEffect } from "react";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const UseAdminProtected = ({ children }: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default UseAdminProtected;
