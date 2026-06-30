import React, { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import ProductDocModal from "../components/ProductDocModal.jsx";
import "./PageGrid.css";

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <main className="section page-top">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Shipped &amp; in progress</span>
          <h1 className="section-heading">Products</h1>
          <p className="section-sub">
            Apps, websites, and models — each with a download, visit, or repo link and a full guide.
          </p>
        </motion.div>

        <div className="grid grid--products">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} onReadGuide={setActiveProduct} />
          ))}
        </div>
      </div>

      <ProductDocModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </main>
  );
}