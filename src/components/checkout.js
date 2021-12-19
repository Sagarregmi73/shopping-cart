import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
const Checkout=()=>{

    const [data,setData]=useState({
        name:"",
        billingAddress:"",
        deliveryAddress:"",
        contact:"",
        date:""
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!data.name || !data.billingAddress|| !data.deliveryAddress || !data.contact || !data.date){
             return alert("please fill the form!")
        }
        else{
            return alert("form submitted"+data.name+data.billingAddress+data.deliveryAddress+data.contact+data.date);
            
        }
 
        
    };

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setData({...data,[name]:value})
               
           };

    return(
        <div>
        <h4 className="text-center mt-3">checkout form</h4>
        <form action="" method="post" onSubmit={handleSubmit} className="container  mx-auto">
        <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" className="form-control"  value={data.name} name="name" id="name" placeholder="username" onChange={handleChange} />
</div>
        <div className="mb-3">
  <label htmlFor="address" className="form-label">Billing address</label>
  <input type="text" className="form-control"   value={data.billingAddress} name="billingAddress" id="address" placeholder="Billing Address" onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="address" className="form-label">Delivery Address</label>
  <input type="text" className="form-control"  value={data.deliveryAddress} id="address" name="deliveryAddress" placeholder="Delivery Address" onChange={handleChange} />

</div>
<div className="mb-3">
  <label htmlFor="number" className="form-label">Telephone Number</label>
  <input type="number" className="form-control" value={data.contact} id="number" name="contact" placeholder="Telephone Number" onChange={handleChange} />
</div>

<div className="mb-3">
  <label htmlFor="date" className="form-label">Telephone Number</label>
  <input type="date" className="form-control" value={data.date} id="date" name ="date" placeholder="Date" onChange={handleChange} />
</div>
<div className="mb-3">
  
  <input type="submit" value={`Purchase`} className="form-control btn btn-primary"  />
</div>
<div className="mb-3">
  
  <NavLink to="/">Go Back Home</NavLink>
</div>

        </form>
        
        </div>
        
    );
}

export default Checkout;