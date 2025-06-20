// Key-Value di MongoDB (gunakan insertMany)
db.kantor_kv.insertMany([
  { _id: "pegawai:001", value: "Ani - HRD" },
  { _id: "pegawai:002", value: "Budi - Keuangan" },
  { _id: "pegawai:003", value: "Citra - Marketing" },
  { _id: "pegawai:004", value: "Dedi - IT Support" },
  { _id: "pegawai:005", value: "Eka - Manager" }
])
