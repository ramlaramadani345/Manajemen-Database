db.createCollection("produk", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "harga", "stok"],
      properties: {
        nama: {
          bsonType: "string",
          description: "harus berupa string dan wajib"
        },
        harga: {
          bsonType: "int",
          minimum: 0,
          description: "harus int dan minimal 0"
        },
        stok: {
          bsonType: "int",
          minimum: 0
        }
      }
    }
  }
});
