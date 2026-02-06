// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());
// app.use(express.static("public"));

// // Connect MongoDB
// mongoose.connect("mongodb+srv://ucch-siksha:Tanu1619@ucch-siksha.69otp69.mongodb.net/ucch-shiksha")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(" Connection failed:", err));

// // Contact Schema
// const ContactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   createdAt: { type: Date, default: Date.now }
// });

// const Contact = mongoose.model("Contact", ContactSchema);

// // Save contact
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) return res.status(400).json({ success: false, message: "All fields required" });

//     const contact = await Contact.create({ name, email, message });
//     console.log("New contact saved:", contact);
//     res.status(201).json({ success: true, data: contact });
//   } catch (err) {
//     console.error("Error saving contact:", err);
//     res.status(500).json({ success: false, message: "Failed to save message" });
//   }
// });

// // Fetch messages
// app.get("/api/contact", async (req, res) => {
//   try {
//     const messages = await Contact.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: messages });
//   } catch (err) {
//     console.error("Error fetching messages:", err);
//     res.status(500).json({ success: false, message: "Failed to fetch messages" });
//   }
// });

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => console.log(` Server running on port ${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve frontend files
// app.use(express.static(path.join(__dirname, "public")));

// // MongoDB connection
// mongoose
//   .connect("mongodb+srv://ucch-siksha:Tanu1619@ucch-siksha.69otp69.mongodb.net/contactDB")
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// // Schema
// const ContactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   message: { type: String, required: true },
//   call15: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now }
// });

// const Contact = mongoose.model("Contact", ContactSchema);

// // API route
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, phone, message, call15 } = req.body;

//     if (!name || !email || !phone || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, phone, message, call15 });
//     await newContact.save();

//     res.status(200).json({ success: true, message: "Message saved" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });


// app.get("/api/admin/contacts", async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.json(contacts);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch contacts" });
//   }
// });


// // Start server
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const cors = require("cors");

// const Contact = require("./models/Contact");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve frontend files
// app.use(express.static(path.join(__dirname, "public")));

// // MongoDB connection
// mongoose
//   .connect("mongodb+srv://ucch-siksha:Tanu1619@ucch-siksha.69otp69.mongodb.net/ucchDB")
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// // --- Contact Schema ---
// const ContactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   message: { type: String, required: true },
//   courseInterested: { type: String },
//   call15: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now }
// });

// const Contact = mongoose.model("Contact", ContactSchema);





// const ContactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   message: { type: String, required: true },
//   call15: { type: Boolean, default: false },

//   // 🔥 NEW FIELD
//   status: {
//     type: String,
//     enum: ["New", "Contacted", "Converted", "Lost"],
//     default: "New"
//   },

//   createdAt: { type: Date, default: Date.now }
// });



// // --- Contact API ---
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, phone, message, call15, courseInterested  } = req.body;
//     if (!name || !email || !phone || !message || !courseInterested) {
//       return res.status(400).json({ error: "All fields are required" });
//     }
//     const newContact = new Contact({ name, email, phone, message, call15, courseInterested });
//     await newContact.save();
//     res.status(200).json({ success: true, message: "Message saved" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });



// // --- Admin routes (optional) ---
// app.get("/api/admin/contacts", async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.json(contacts);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch contacts" });
//   }
// });

// // Update lead status
// app.patch("/api/admin/contacts/:id/status", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { leadStatus } = req.body;

//     const allowedStatuses = ["New", "Contacted", "Converted", "Lost"];

//     if (!allowedStatuses.includes(leadStatus)) {
//       return res.status(400).json({ error: "Invalid lead status" });
//     }

//     const updated = await Contact.findByIdAndUpdate(
//       id,
//       { leadStatus },
//       { new: true }
//     );

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update lead status" });
//   }
// });



// // Start server
// app.listen(3000, () => console.log("Server running on http://localhost:3000"));


















// --- Registration Schema ---
// const RegisterSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//  courseInterested: { type: String, required: true  },
//  call15: { type: Boolean, default: false },
//   city: { type: String },
//   createdAt: { type: Date, default: Date.now }
// });

// const Register = mongoose.model("Register", RegisterSchema);



// --- Registration API ---
// app.post("/api/register", async (req, res) => {
//   try {
//     const { fullName, email, phone, course, city } = req.body;
//     if (!fullName || !email || !phone || !course) {
//       return res.status(400).json({ error: "All required fields must be filled" });
//     }
//     const newRegister = new Register({ fullName, email, phone, courseInterested, city });
//     await newRegister.save();
//     res.status(200).json({ success: true, message: "Registration successful" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// app.get("/api/admin/registrations", async (req, res) => {
//   try {
//     const regs = await Register.find().sort({ createdAt: -1 });
//     res.json(regs);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch registrations" });
//   }
// });






const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb+srv://ucch-siksha:Tanu1619@ucch-siksha.69otp69.mongodb.net/ucchDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Save contact
app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

// Get all contacts (ADMIN)
app.get("/api/admin/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// Update lead status
app.patch("/api/admin/contacts/:id/status", async (req, res) => {
  try {
    const { leadStatus } = req.body;

    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { leadStatus },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update status" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
