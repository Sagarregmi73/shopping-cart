import React from 'react';
import Product from './product';
const Main=(props)=>{
   
    const {data,onAdd}=props;
    return(
        <div>
            {data.map(item=>(
                <Product key={item.id} product={item} onAdd={onAdd}  />
            ))}
        </div>
    );
}

export default Main;
