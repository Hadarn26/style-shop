import { client } from "@/app/services/server/mongodb";

export async function fetchProducts() {
  try {
    console.log("🚀 Connecting to MongoDB...");
    await client.connect();

    const db = client.db("style-shop");
    const collection = db.collection("products");
    const products = await collection.find().toArray();

    console.log("✅ Products fetched successfully:", products.length);
    return products;
  } catch (error) {
    console.error("❌ MongoDB connection or query error:", error);
    throw new Error("Failed to fetch products");
  }
}

