import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const UseAdminProtected = ({ children }: Props) => {
  const user = useAppSelector((state: RootState) => state.auth.user);

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default UseAdminProtected;
