import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminRoute, AppRoute } from "../types/AppRoute";
import { UserRole } from "../types/User";
import AuthWrapper from "../components/AuthWrapper";
import LoginPage from "./auth/Login";
import HomePage from "./Home";
import AdminPage from "./Admin";
import EmployeePage from "./Employee";
import LayoutMain from "../components/layout/Layout";

function App() {
  return (
    <>
      <div className="h-100 w-100">
        <LayoutMain>
          <Routes>
            <Route path={AppRoute.HOME} element={<HomePage />} />
            <Route path={AppRoute.LOGIN} element={<LoginPage />} />

            <Route
              path={AppRoute.USER}
              element={
                <AuthWrapper role={UserRole.USER}>
                  <h1>User</h1>
                </AuthWrapper>
              }
            />

            <Route path={AdminRoute.HOME}>
              <Route path={AdminRoute.HOME} element={<AdminPage />} />
              <Route path={AdminRoute.EMPLOYEE} element={<EmployeePage />} />

            </Route>

          </Routes>
        </LayoutMain>
      </div>
    </>
  );
}

export default App;
