db.produk.find({ harga: { $gt: 5000 } }); 
db.produk.find({ stok: { $lte: 10 } });
