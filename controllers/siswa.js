const Siswa = require('../models/Siswa');

module.exports = {
  // mendapatkan semua data siswa
  index: async (req, res) => {
    try {
      const siswa = await Siswa.find();
      if (siswa.length > 0) {
        res.status(200).json({
          status: true,
          data: siswa,
          method: req.method,
          url: req.url
        });
      } else {
        res.json({
          status: false,
          message: "Data masih kosong",
        });
      }
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  // mendapatkan data siswa berdasarkan ID
  show: async (req, res) => {
    try {
      const siswa = await Siswa.findById(req.params.id);
      res.json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapatkan",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  // menambahkan data siswa baru
  store: async (req, res) => {
    try {
      const siswa = await Siswa.create(req.body);
      res.status(200).json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  // mengubah data siswa berdasarkan ID
  update: async (req, res) => {
    try {
      const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  // menghapus data siswa berdasarkan ID
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const siswa = await Siswa.findOneAndDelete({ _id: id });

      res.json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
};
