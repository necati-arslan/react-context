import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
// 'default value' is not really important for use for now

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    { id: 4, title: "Leather pair of shoes", cat_id: 1, price: 40 },
    { id: 8, title: "Crocheting needle", cat_id: 23, price: 2 },
    { id: 36, title: "Friendly pterodactyl", cat_id: 13, price: 100 }
  ]);

  function removeProductFromCart(id) {
    setCart(cart.filter((p) => p.id !== id));
  }

  // "Separation of Concerns": we don't send the `setCart`
  //  function down, but only an abstraction: `removeProductFromCart`
  // This way, we can change the implementation later, and
  //  the sidebar (and other components) don't need to
  //  concern themselves about it / worry about it
  return (
    <CartContext.Provider value={{ cart, removeProductFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
// (Redux store provider)

// I like this
export function useCart() {
  return useContext(CartContext);
}

// This is a bit unnecessary, but you also see this in libraries
export function useRemoveProduct() {
  const { removeProductFromCart } = useContext(CartContext);
  return removeProductFromCart;
}
// (useSelector)
// (useDispatch)
// ...
