db.produk.aggregate([
  { $match: { harga: { $gt: 3000 } } },
  { $group: { _id: null, totalProduk: { $sum: 1 } } }
]);
