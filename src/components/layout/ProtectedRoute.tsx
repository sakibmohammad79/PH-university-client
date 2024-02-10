import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { ReactNode } from "react";
import {
  TUser,
  logOut,
  userCurrentToken,
} from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../utils/verifyToken";
import { JwtPayload } from "jwt-decode";

type TProtectedRouteProps = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  //   const { token } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = useAppSelector(userCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  if (role !== undefined && role !== (user as TUser)?.role) {
    dispatch(logOut());
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
