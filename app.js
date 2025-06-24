import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Styles
  const styles = {
    
    container: {
      maxWidth: "600px",
      background: "rgba(126, 231, 217, 0.4)",
      margin: "60px auto",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
      fontFamily: "'Segoe UI', sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#333",
      marginBottom: "30px",
    },
    form: {
      marginBottom: "40px",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "600",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "6px",
      boxSizing: "border-box",
    },
    addBtn: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px 25px",
      border: "none",
      borderRadius: "6px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.2s ease-in-out",
    },
    subtitle: {
      fontSize: "1.3rem",
      color: "#333",
      marginBottom: "20px",
    },
    noProducts: {
      color: "#888",
      fontStyle: "italic",
    },
    productList: {
      listStyle: "none",
      padding: 0,
    },
    productItem: {
      backgroundColor: "#f9f9f9",
      border: "1px solid #e0e0e0",
      padding: "12px 16px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "6px",
    },
    deleteBtn: {
      backgroundColor: "#e74c3c",
      color: "white",
      padding: "6px 14px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}> Product Management</h1>

      <form onSubmit={handleAddProduct} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.addBtn}>
          Add Product
        </button>
      </form>

      <h2 style={styles.subtitle}>📋 Product List</h2>
      {products.length === 0 ? (
        <p style={styles.noProducts}>No products added yet.</p>
      ) : (
        <ul style={styles.productList}>
          {products.map((product) => (
            <li key={product.id} style={styles.productItem}>
              <span>
                <strong>{product.name}</strong> - ₹{product.price}
              </span>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;