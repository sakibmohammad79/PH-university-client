import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { ReactNode } from "react";
import {
  logOut,
  selectCurrentUser,
  userCurrentToken,
} from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

type TProtectedRouteProps = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  //   const { token } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = useAppSelector(userCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  console.log(role);

  if (role !== undefined && role !== user?.role) {
    dispatch(logOut());
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
