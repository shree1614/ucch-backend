const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    courseInterested: String,
    call15: Boolean,
    leadStatus: {
      type: String,
      enum: ["New", "Contacted", "Converted"],
      default: "New"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);

