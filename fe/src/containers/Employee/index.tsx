import React from "react";
import { Breadcrumb, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { AdminRoute } from "../../types/AppRoute";
import { SettingOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, Button } from "antd";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

function EmployeePage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <Button type="primary" className="bg-blue-500">
          Create
        </Button>
      ),
      children: <EmployeeForm />,
    },
  ];
  return (
    <div>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[
          { title: "Employee", onClick: () => navigate(AdminRoute.EMPLOYEE) },
        ]}
      ></Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
        }}
      >
        <Collapse
          expandIcon={({ isActive }: any) => (isActive ? <></> : <></>)}
          ghost
          items={items}
        />
        <EmployeeTable />
      </div>
    </div>
  );
}

export default EmployeePage;
