import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../state/action-creator";
import "./Home.css";

const products = [
    { id: 1, name: "Egg - o Bite", price: 15, image: `${process.env.PUBLIC_URL}/image/EggBite.jpeg`, description: "Protein boost in every bite" },
    { id: 2, name: "Narli", price: 15, image: `${process.env.PUBLIC_URL}/image/Narli.jpeg`, description: "Enriched with the natural goodness of rice" },
    { id: 3, name: "Jowarie", price: 15, image: `${process.env.PUBLIC_URL}/image/Jowarie.jpeg`, description: "Ancient grains, Mordern taste" },
    { id: 4, name: "Sony Headphones", price: 199, image: `${process.env.PUBLIC_URL}/image/4.jpg`, description: "Noise-canceling headphones" },
    { id: 5, name: "MacBook Pro", price: 1299, image: `${process.env.PUBLIC_URL}/image/5.jpg`, description: "Powerful laptop" },
    { id: 6, name: "Samsung Galaxy S23", price: 999, image: `${process.env.PUBLIC_URL}/image/6.jpg`, description: "Latest smartphone" }
  ];
  

const Home = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="home-container">
      <h1 className="home-title">🥗 Healthy crunch, tasty munch</h1>


      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <h3 className="product-description">{product.description}</h3>
              <p className="product-price">Rs {product.price} / 100 g</p>

              <div className="quantity-control">
                <button onClick={() => dispatch(removeFromCart(product))} className="btn-minus">-</button>
                <span className="quantity">{cart[product.id] || 0}</span>
                <button onClick={() => dispatch(addToCart(product))} className="btn-plus">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
