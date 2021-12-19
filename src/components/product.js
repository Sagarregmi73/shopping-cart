import React from 'react';

const Product=(props)=>{
    const {product ,onAdd}=props;
    const date=new Date().toLocaleDateString();

    return(
        
                <div className="card mx-auto mt-2 d-inline"  style={{width: "15rem"}}>
         <img src={`https://electronic-ecommerce.herokuapp.com/${product.image}`} className="card-img-top" alt={product.name} />
         <div className="card-body">
           <h5 className="card-title">name: {product.name}</h5>
           <h5 className="card-title">price:NPR {(product.price.slice(1))*121.10}</h5>
           <h5 className="card-title">stock: {product.stock} available</h5>
           <h5 className="card-title">category: {product.category}</h5>
            <p className="card-text"><small className="text-muted">Last updated {date}</small></p>
            {product.stock>0 ?  <button onClick={()=>onAdd(product)} className="bt btn-primary">Add To Cart</button>:<button type="button" onClick={()=>onAdd(product)} className="bt btn-default" disabled>Add To Cart</button>}
          
         </div>
       </div>
               


         
        
    );
}

export default Product;