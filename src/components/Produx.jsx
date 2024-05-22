import { useState } from "react";
import { products } from "../data/Data";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

export default function Produx () {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const [menuItems, setMenuItems] = useState(products);

  const fillteritem = (category) => {
    const newItem = products.filter((item) => item.category === category);
    setMenuItems(newItem);

    if(category === "all") {
      setMenuItems(products)
      return;  
    }
  }

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product, 
      quantity: qty, 
      totalPrice,
    };
    dispatch(addToCart(tempProduct))
    navigate("/cart")
  }

  return (
    <>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="text-center">
            <div className="row g-4 ">
              <div className="col-lg-4 text-start">
                <h1>Our Organic Product</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a 
                    onClick={() => fillteritem("all")} 
                    className="d-flex m-2 py-2 bg-light rounded-pill">
                      <span className="text-dark" style={{width: "130px"}}>All Products</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a  
                    onClick={() => fillteritem("Bread")} 
                    className="d-flex m-2 py-2 bg-light rounded-pill">
                      <span className="text-dark" style={{width: "130px"}}>Bread</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a  
                    onClick={() => fillteritem("Fruits")} 
                    className="d-flex m-2 py-2 bg-light rounded-pill">
                      <span className="text-dark" style={{width: "130px"}}>Fruites</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                    onClick={() => fillteritem("Vegetables")} 
                    className="d-flex m-2 py-2 bg-light rounded-pill">
                      <span className="text-dark" style={{width: "130px"}}>Vegetables</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                    onClick={() => fillteritem("Meat")} 
                    className="d-flex m-2 py-2 bg-light rounded-pill">
                      <span className="text-dark" style={{width: "130px"}}>Meat</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  {
                    menuItems.map((el, index) => (
                      <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                       <div className="rounded position-relative fruite-item">
                        <div className="fruite-img ">
                          <img src={el.product_img} alt="img" className="img-fluid w-100 rounded-top"/>
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>
                          {el.category}
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>{el.product_name}</h4>
                              <p>{el.description}</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  $ {el.price}
                                </p>
                        <button onClick={() => handleAddToCart(el)} className="btn border border-secondary rounded-pill px-3 text-primary">
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                           Add to cart
                        </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}