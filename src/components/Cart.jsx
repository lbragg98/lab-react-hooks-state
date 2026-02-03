import React from "react"

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={`${item.name}-${idx}`}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
