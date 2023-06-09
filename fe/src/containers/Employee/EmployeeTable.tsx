import React from "react";
import { Space, Table, Tag, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key: string;
  fullName: string;
  age: number;
  department: string;
  positions: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: "FullName",
    dataIndex: "fullName",
    key: "fullName",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Positions",
    dataIndex: "positions",
    key: "positions",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <p>Update {record.fullName}</p>
        <p>Delete</p>
      </Space>
    ),
  },
];
function EmployeeTable() {
  const data: DataType[] = [
    {
      key: "1",
      fullName: "John Brown",
      age: 32,
      department: "New York No. 1 Lake Park",
      positions: "Intern",
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Pagination responsive defaultCurrent={1} total={50} />
    </div>
  );
}

export default EmployeeTable;
