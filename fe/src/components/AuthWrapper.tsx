import React from "react";
import { User, UserRole } from "../types/User";
import { useNavigate  } from "react-router-dom";
import { getDecodeToken } from "../utils/token";
import { useDispatch, useSelector } from "react-redux";
import { StoreModel } from "../redux/slices";
import { AppRoute } from "../types/AppRoute";

export default function AuthWrapper({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: UserRole;
}) {
  const isLogged = useSelector((state: StoreModel) => state.user.isLogged);
  const navigate = useNavigate();
  const user: User | undefined = getDecodeToken();
  const currentRole = user?.role;
  React.useEffect(() => {
    if (!isLogged) {
      return navigate(AppRoute.LOGIN); 
    }
    if (currentRole !== String(role)) {
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    }
  }, [navigate, currentRole, role]);
  if (currentRole !== String(role)) {
    return <h1>Unauthorize, Redirect back...</h1>;
  }
  return <>{children}</>;
}
