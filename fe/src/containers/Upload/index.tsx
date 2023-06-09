import React from "react";
import UploadSingle from "../../components/UploadSingle";
import { useUpload } from "../../api/auth/test";

function UploadPage() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const { mutateAsync: actionUpload } = useUpload();

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const res = await actionUpload(formData);
      console.log(res);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <UploadSingle onChangeDone={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default UploadPage;
