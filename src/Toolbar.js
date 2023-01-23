import React, { useContext } from "react";
import { CartContext } from "./Cart";

function ToolbarV1() {
  const { cart } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        marginBottom: 20,
        paddingBottom: 10,
        borderBottom: "1px solid black"
      }}
    >
      <div>[logo]</div>
      <div style={{ flex: 1 }} />
      <div>{cart.length} products</div>
    </div>
  );
}

function ToolbarV2() {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: 20,
        paddingBottom: 10,
        borderBottom: "1px solid black"
      }}
    >
      <div>[logo]</div>
      <div style={{ flex: 1 }} />
      <CartContext.Consumer>
        {({ cart }) => {
          return <div>{cart.length} products</div>;
        }}
      </CartContext.Consumer>
    </div>
  );
}

export class Toolbar extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: 20,
          paddingBottom: 10,
          borderBottom: "1px solid black"
        }}
      >
        <div>[logo]</div>
        <div style={{ flex: 1 }} />
        <CartContext.Consumer>
          {({ cart }) => {
            return <div>{cart.length} products</div>;
          }}
        </CartContext.Consumer>
      </div>
    );
  }
}
