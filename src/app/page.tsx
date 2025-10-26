"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";

interface Product {
  image: string;
  title: string;
  description: string;
  price: number;
  inv: { hifa: number; tlv: number; eilat: number };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products", { cache: "no-store" });

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="page-content">
      <div className="main-grid">
        {products.map((p, i) => (
          <Card
            key={i}
            image={p.image}
            title={p.title}
            description={p.description}
            price={p.price}
            inv={p.inv}
          />
        ))}
      </div>
    </main>
  );
}
