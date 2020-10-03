import React from 'react';
import './Subtotal.css';
import NumberFormat from 'react-number-format';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const history = useHistory();
    const [{basket} , dispatch] = useStateValue();
   // console.log(basket); 
    // 0: id: "49538091"
    // image:o "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SX342_.jpg"
    // price: 54000
    // rating: 4
    // title: " Apple Watch Se"
    // 

    // const keys = Object.keys(basket)

    //   keys.map((el) => {
    //        return Array(el).concat().forEach((key) => {
    //            console.log("heyyy  " + eval(basket[key].price))
                
                
    //         })
    //    })


    
    

	return (
    <div className="subtotal" >
    <NumberFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
        )} 
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            thousandsGroupStyle="lakh"
            prefix={"₹"}
        />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>

        </div>
    );
    }

export default Subtotal;
