import React from "react";

const Header = () =>{
    return (
    <>
        <header className="header">
            <div className="header_wrapper">
                <div className="header_wrapper_delivery">
                <p className="header_wrapper_delivery_name">
                    Delivery
                </p>
                <p className="header_wrapper_delivery_location">
                    Upperhill, Nairobi
                </p>
                </div>
                <div className="header_wrapper_avatar">
                <svg id="icon-account_circle" height="40" width="40" viewBox="0 0 24 24">
                    <path d="M12 19.219q1.594 0 3.352-0.938t2.648-2.297q-0.047-1.313-2.109-2.203t-3.891-0.891-3.891 0.867-2.109 2.227q0.891 1.359 2.648 2.297t3.352 0.938zM12 5.016q-1.219 0-2.109 0.891t-0.891 2.109 0.891 2.109 2.109 0.891 2.109-0.891 0.891-2.109-0.891-2.109-2.109-0.891zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
                </svg>
                </div>
            </div>
            </header>
            {/* SELLER TIPS */}
            <div className="seller_tip">
                <div className="seller_tip_wrapper">
                    <div className="seller_tip_wrapper_tip">
                        ORDER AGAIN
                    </div>
                    <div className="seller_tip_wrapper_tip">
                        LOCAL SHOP
                    </div>  
                </div>
            </div>
            {/* DEALS */}
            <div className="deals">
                <div className="deals_wrapper">
                    <div className="deals_wrapper_deal">
                        <p className="deals_wrapper_deal_type">Top deal !</p>
                        <p className="deals_wrapper_deal_desc">
                            FRESH AVOCADO UP TO 15% OFF
                        </p>
                        <button className="deals_wrapper_deal_btn">
                            Shop Now
                        </button>

                    </div>
                    
                </div>
            </div>
    </>
    )
}
export default Header;