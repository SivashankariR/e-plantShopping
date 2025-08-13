import { useSelector, useDispatch } from "react-redux";
import './ProductList.css';
import {addItem} from './CartSlice';
function ProductCard({ plant }) {  

  let id = plant.id;  

  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.items);
   
  let itemAddedToCart = () => {
    dispatch(addItem(plant));
  }

  let isItemInCart = itemsInCart.some(item => item.id === id);

  return (    
    <div key={id} className="product-card">
        <h3 className="product-title">{plant.name}</h3>
        <img src={plant.image} alt={plant.name} className="product-image" />      
        <p className="product-price">${plant.cost}</p>
        <p>{plant.description}</p>
        <button className={"product-button" + (isItemInCart ? " added-to-cart" : "")} onClick={() => itemAddedToCart()}>{isItemInCart ? "Added To Cart" : "Add To Cart"}</button>
    </div>
  ); 
} 

export default ProductCard;