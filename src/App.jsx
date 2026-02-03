import React, { useMemo, useState } from "react"
import ProductList from "./components/ProductList"
import DarkModeToggle from "./components/DarkModeToggle"
import Cart from "./components/Cart"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState("all")

  const handleToggleDarkMode = () => setDarkMode((prev) => !prev)

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product])
  }

  const handleCategoryChange = (e) => setCategory(e.target.value)

  const appStyle = useMemo(
    () => ({
      backgroundColor: darkMode ? "#111" : "#fff",
      color: darkMode ? "#fff" : "#111",
      minHeight: "100vh",
      padding: "16px",
    }),
    [darkMode]
  )

  return (
    <div style={appStyle}>
      <h1>Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      <label htmlFor="category">Filter by Category: </label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList category={category} onAddToCart={handleAddToCart} />

      <Cart items={cartItems} />
    </div>
  )
}

export default App
