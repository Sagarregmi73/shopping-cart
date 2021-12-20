import React,{useState,useEffect} from 'react';
import Header from './header';
import Main from './main';
import Bucket from './bucket';
const Home=()=>{
    const [data,setData]=useState([]);
    const [cartItems,setCartItems]=useState([]);
    const productApi=()=>fetch(`https://electronic-ecommerce.herokuapp.com/api/v1/product`)
    .then(res=>res.json())
    .then(result=>setData(result.data.product));
    
    useEffect(()=>{
       productApi();
    },[]) 
   
    console.log(data);
    console.log(cartItems);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };

      const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

    
    return(
        <div>
 <Header data={cartItems} />
<div className="container">
        
            <div className="row">
                <div className="col-12 col-md-7 mt-2 ">
                <h3>Products</h3>
               
                 <Main data={data} onAdd={onAdd} />
                  </div>
                 <div className="col-12 col-md-5 bg-light mt-2 ">
                  
                  <Bucket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
                </div>
                </div>
            </div>
        
        </div>
       
    );
}

export default Home;
