import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { ReactNode } from "react";
import { RootState } from "../redux/store";

type Props = {
  children: ReactNode;
};
const UserProtected = ({ children }: Props) => {
  const user = useAppSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default UserProtected;
