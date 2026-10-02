const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataPath = path.join(__dirname, "../data/galeri.json");

router.get("/", (req, res) => {
  const data = fs.readFileSync(dataPath, "utf-8");
  const galeri = JSON.parse(data);

  res.json(galeri);
});

router.get("/:id", (req, res) => {
  const data = fs.readFileSync(dataPath, "utf-8");
  const galeri = JSON.parse(data);

  const item = galeri.find(
    (galeri) => galeri.id === Number(req.params.id)
  );

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Data prestasi tidak ditemukan",
    });
  }

  res.json(item);
});

module.exports = router;