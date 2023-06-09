import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Col,
  Divider,
  Select,
  Row,
  DatePicker,
  Radio,
} from "antd";
import { USER_ROLES_MAP, User } from "../../types/User";
import UploadSingle from "../../components/UploadSingle";

const { TextArea } = Input;
const { Option } = Select;

const POSITIONS = [
  {
    value: "demo",
    label: "Demo",
  },
  {
    value: "demo1",
    label: "Demo1",
  },
];

const DEPARTMENTS = [
  {
    value: "demo",
    label: "Demo",
  },
  {
    value: "demo1",
    label: "Demo1",
  },
];
function EmployeeForm() {
  const [roles, setRoles] = useState(USER_ROLES_MAP);
  const [positions, setPositions] = useState(POSITIONS);
  const [departments, setDepartments] = useState(DEPARTMENTS);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileChange = (file: any) => {
    setSelectedFile(file);
  };

  const onFinish = (values: User) => {
    console.log("Success:", values);
    console.log("Success:", (values.dateOfBirth as any).toISOString());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(selectedFile);
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      style={{ maxWidth: "none" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <div className="mb-3 px-2">
        <UploadSingle onChangeDone={handleFileChange} />
      </div>
      <Row>
        <Col span={6}>
          <Form.Item
            className="px-2"
            label="Employee code"
            name="employeeCode"
            rules={[{ required: true, message: "Please input Employee code!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Employee code"
            name="employeeCode"
            rules={[{ required: true, message: "Please input Employee code!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Date start"
            name="dateStart"
            rules={[{ required: true, message: "Please input Date start!" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please input role!" }]}
          >
            <Select>
              {roles?.map((role) => (
                <Select key={role.value} value={role.value}>
                  {role.label}
                </Select>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Department"
            name="department"
            rules={[{ required: true, message: "Please input Depart!" }]}
          >
            <Select>
              {departments?.map((department) => (
                <Select key={department.value} value={department.value}>
                  {department.label}
                </Select>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            className="px-2"
            label="Date of birth"
            name="dateOfBirth"
            rules={[{ required: true, message: "Please input Date of birth!" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Position"
            name="position"
            rules={[{ required: true, message: "Please input position!" }]}
          >
            <Select>
              {positions?.map((position) => (
                <Select key={position.value} value={position.value}>
                  {position.label}
                </Select>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please input gender!" }]}
          >
            <Radio.Group>
              <Radio value="MALE"> Male </Radio>
              <Radio value="FEMALE"> Female </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Bank number"
            name="bankNumber"
            rules={[{ required: true, message: "Please input Bank number!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            className="px-2"
            label="First name"
            name="firstName"
            rules={[{ required: true, message: "Please input First name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="User name"
            name="userName"
            rules={[{ required: true, message: "Please input User name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: "Please input Phone Number!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Bank name"
            name="bankName"
            rules={[{ required: true, message: "Please input Bank name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            className="px-2"
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: "Please input Last name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Password"
            name="passWord"
            rules={[{ required: true, message: "Please input Password!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Identity Id"
            name="identityId"
            rules={[{ required: true, message: "Please input Identity Id!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="px-2"
            label="Tax code"
            name="taxCode"
            rules={[{ required: true, message: "Please input Tax code!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        className="px-2"
        label="Basic information"
        name="basicInformation"
        rules={[{ required: true, message: "Please input Basic information!" }]}
      >
        <TextArea rows={5} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="bg-blue-500" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EmployeeForm;
