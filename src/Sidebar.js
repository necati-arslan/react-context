import { useCart, useRemoveProduct } from "./Cart";

export function Sidebar() {
  const { cart } = useCart();
  const removeProduct = useRemoveProduct();

  return (
    <div>
      Categories:
      <ul>
        <li>Men's shoes</li>
        <li>Little dinos</li>
        <li>Crochet needles</li>
      </ul>
      Products in your cart:
      <ul>
        {cart.map((product) => {
          return (
            <li>
              {product.title}{" "}
              <button
                onClick={() => {
                  removeProduct(product.id);
                }}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
