// import { useCart } from '../../context/CartContext';

// interface CartItemProps {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }

// export function CartItem({ id, name, price, quantity }: CartItemProps) {
//   const { removeFromCart, updateQuantity } = useCart();

//   return (
//     <div className="cart-item">
//       <h4>{name}</h4>
//       <p>R${(price * quantity).toFixed(2)}</p>
//       <div>
//         <button onClick={() => updateQuantity(id, quantity - 1)}>-</button>
//         <span>{quantity}</span>
//         <button onClick={() => updateQuantity(id, quantity + 1)}>+</button>
//         <button onClick={() => removeFromCart(id)}>Remover</button>
//       </div>
//     </div>
//   );
// }
