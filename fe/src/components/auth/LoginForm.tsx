import React, { useState } from "react";
import { useLogin } from "../../api/auth/auth";
import { setToken } from "../../utils/token";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { User, UserRole } from "../../types/User";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/User";

function LoginForm() {
  const { mutateAsync: actionLogin } = useLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (value: any) => {
    const res = await actionLogin({
      userName: value.userName,
      passWord: value.passWord,
    });
    if (res?.token) {
      setToken(res.token);
      delete res.token;
      dispatch(login(res as User));
      navigate(res.role === UserRole.ADMIN ? "/admin" : "/user");
    }
  };

  return (
    <div className="border px-5 py-2 bg-white shadow-md rounded-xl">
      <h1 className="font-extrabold text-transparent text-2xl text-center mb-5 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
        Login
      </h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="passWord"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item> */}

        <Form.Item>
          <Button
            type="primary"
            className="bg-blue-500 w-full  bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"
            htmlType="submit"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
