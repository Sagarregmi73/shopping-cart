import React from 'react';
import Checkout from './checkout';
const Bucket=(props)=>{
    const {cartItems,onAdd,onRemove}=props;
    const itemsPrice = cartItems.reduce((a, c) => a+ c.qty * c.price.slice(1)*121.10,0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <div>
            {cartItems.length===0 && <div><h6>Cart is Empty</h6></div>}
            {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-4 mt-2">{item.name}</div>
            <div className="col-4 ">
              <button onClick={() => onRemove(item)} className="remove btn btn-danger mt-1">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add btn btn-primary mt-1">
                +
              </button>
            </div>

            <div className="col-4 text-right mt-2">
              {item.qty} x NPR {item.price.slice(1)*121.10}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">{itemsPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">{taxPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
               {shippingPrice}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong> NPR {totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className="btn btn-danger" onClick={() => alert('Implement Checkout!')}>
                <a href="/checkout">Checkout</a>
              </button>
            </div>
          </>
        )}



        </div>
    );
}

export default Bucket;