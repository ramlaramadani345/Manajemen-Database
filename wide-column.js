// Wide-Column di MongoDB
db.kantor_wide.insertMany([
  {
    pegawai_id: "001",
    nama: "Ani",
    divisi: "HRD",
    usia: 28,
    status: "Tetap"
  },
  {
    pegawai_id: "002",
    nama: "Budi",
    divisi: "Keuangan",
    usia: 32,
    status: "Kontrak",
    gaji: 5000000 // contoh field tambahan
  },
  {
    pegawai_id: "003",
    nama: "Citra",
    divisi: "Marketing",
    usia: 26,
    status: "Tetap"
  },
  {
    pegawai_id: "004",
    nama: "Dedi",
    divisi: "IT Support",
    usia: 30,
    status: "Outsourcing",
    shift: "Malam"
  },
  {
    pegawai_id: "005",
    nama: "Eka",
    divisi: "Manager",
    usia: 40,
    status: "Tetap",
    anak_buah: ["Ani", "Budi", "Citra"]
  }
])
