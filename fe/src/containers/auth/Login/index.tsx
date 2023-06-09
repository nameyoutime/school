import React from "react";
import LoginForm from "../../../components/auth/LoginForm";
// import "antd/dist/antd.css";

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
