db.produk.bulkWrite([
  {
    insertOne: {
      document: { nama: "Shampoo", harga: 10000, stok: 30 }
    }
  },
  {
    updateOne: {
      filter: { nama: "Shampoo" },
      update: { $set: { stok: 35 } }
    }
  },
  {
    deleteOne: {
      filter: { nama: "Sabun" }
    }
  }
]);
