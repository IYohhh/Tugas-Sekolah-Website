const express = require("express");
const cors = require("cors");
const kegiatanRoutes = require("./routes/kegiatan");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Website Profil Sekolah berjalan!",
  });
});

app.use("/api/kegiatan", kegiatanRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});