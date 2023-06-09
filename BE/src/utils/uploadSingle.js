const mongoose = require("mongoose");
const admin = require("firebase-admin");

const uploadSingle = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const bucket = admin.storage().bucket();
  const id = new mongoose.Types.ObjectId();
  const file = bucket.file(id.toString() + "|" + req.file.originalname);
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on("error", (err) => {
    console.error("Error uploading file:", err);
    next(err); // Pass the error to the error handler
  });

  stream.on("finish", () => {
    // Get the signed URL for the uploaded file
    file.getSignedUrl(
      {
        action: "read",
        expires: "01-01-2099", // Set the expiration date as desired
      },
      (err, url) => {
        if (err) {
          console.error("Error getting signed URL:", err);
          return next(err);
        }

        req.fileUrl = url; // Store the URL in the request object
        next(); // Continue to the next middleware or route handler
      }
    );
  });

  stream.end(req.file.buffer);
};

module.exports = uploadSingle;
