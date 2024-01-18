import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { ReactNode } from "react";
import { userCurrentToken } from "../../redux/features/auth/authSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  //   const { token } = useAppSelector((state) => state.auth);
  const token = useAppSelector(userCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
