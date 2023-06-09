import React from "react";
import { Breadcrumb, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { AdminRoute } from "../../types/AppRoute";
function AdminPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <div>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[{ title: "Home", onClick: () => navigate(AdminRoute.HOME) }]}
      ></Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
        }}
      >
        Bill is a cat.
      </div>
    </div>
  );
}

export default AdminPage;
