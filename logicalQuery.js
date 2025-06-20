db.produk.find({
  $and: [{ harga: { $gt: 3000 } }, { stok: { $gt: 10 } }]
});
db.produk.find({
  $or: [{ nama: "Sabun" }, { nama: "Shampoo" }]
});
