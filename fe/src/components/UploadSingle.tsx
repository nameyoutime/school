import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

interface Props {
  onChangeDone: (file: any | null) => void;
}
function UploadSingle({ onChangeDone }: Props) {
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "removed") return onChangeDone(null);
    if (info.file.status !== "done") return;
    onChangeDone(info.file.originFileObj as File);
    console.log(info);
  };
  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        maxCount={1}
        onChange={handleChange}
      >
        <Button icon={<UploadOutlined />}>Upload Avatar (Max: 1)</Button>
      </Upload>
    </Space>
  );
}

export default React.memo(UploadSingle);
