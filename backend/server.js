const express = require("express");
const cors = require("cors");
const pasteRoutes = require("./pasteRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/pastes", pasteRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Paste App API is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
