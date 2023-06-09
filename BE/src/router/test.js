const app = require("express");
const router = app.Router();
const upload = require("../utils/multerConfig");
const uploadSingle = require("../utils/uploadSingle");

router.post("/upload", upload.single("file"), uploadSingle, (req, res) => {
  console.log(req.file);
  res.json({
    message: "File uploaded successfully",
    url: req.fileUrl,
  });
});
module.exports = router;
