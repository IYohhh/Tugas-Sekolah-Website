const express = require("express");
const cors = require("cors");
const kegiatanRoutes = require("./routes/kegiatan");
const galeriRoutes = require("./routes/galeri");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use("/api/galeri", galeriRoutes);
app.use("/api/kegiatan", kegiatanRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Website Profil Sekolah berjalan!",
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});