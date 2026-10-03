const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const dataPath = path.join(__dirname, "../data/kegiatan.json");

router.get("/", (req, res) => {
  const data = fs.readFileSync(dataPath, "utf-8");
  const kegiatan = JSON.parse(data);

  res.json(kegiatan);
});

router.get("/:id", (req, res) => {
  const data =fs .readFileSync(dataPath, "utf-8");
  const kegiatan = JSON.parse(data);

  const item = kegiatan.find(
    (kegiatan) => kegiatan.id === Number(req.params.id)
  );

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Kegiatan tidak ditemukan",
    });
  }

  res.json(item);
});

module.exports = router;