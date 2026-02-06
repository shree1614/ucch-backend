const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  courseInterested: { type: String, required: true },
  call15: { type: Boolean, default: false },

  leadStatus: {
    type: String,
    enum: ["New", "Contacted", "Converted", "Lost"],
    default: "New"
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Contact", ContactSchema);
