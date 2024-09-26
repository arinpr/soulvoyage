import React from "react";
import "./slider.css";


export default function MainSlider(){
    return(<>
        <p className="text-center pt-5">More than 500 people have already requested for access to this platform</p>
        <div className="rc-carousel">
 
            <div className="rc-carousel-strip">
                {/* <!-- Flexbox --> */}
                <div className="rc-carousel-box">
                {/* <!-- Items start --> */}
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder.svg" alt="dhl" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (1).svg" alt="fedex" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (2).svg" alt="ups" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (3).svg" alt="upsp" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (4).svg" alt="ems" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (5).svg" alt="dpd" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (6).svg" alt="gls" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (1).svg" alt="auspost" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (2).svg" alt="dsv" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder.svg" alt="dhl" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (1).svg" alt="fedex" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (2).svg" alt="ups" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (3).svg" alt="upsp" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (4).svg" alt="ems" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (5).svg" alt="dpd" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (6).svg" alt="gls" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (1).svg" alt="auspost" />
                </div>
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (2).svg" alt="dsv" />
                </div>
                {/* <!-- Items end --> */}

                {/* <!-- Duplicate items start, for infinite loop --> */}
                <div className="rc-carousel-item">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder.svg" alt="dhl" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (3).svg" alt="dhl" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (4).svg" alt="fedex" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (5).svg" alt="ups" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (6).svg" alt="upsp" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (1).svg" alt="ems" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (2).svg" alt="dpd" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (3).svg" alt="gls" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (4).svg" alt="auspost" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (6).svg" alt="dsv" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (1).svg" alt="dsv" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (2).svg" alt="dsv" />
                </div>
                <div className="rc-carousel-item" aria-hidden="true">
                    <img className="rc-carousel-item-image" src="assets/img/avatar/placeholder (3).svg" alt="dsv" />
                </div>
                {/* <!-- Duplicate items end --> */}
                </div>
                {/* <!-- Flexbox ends --> */}
            </div>
            {/* <!-- rc-carousel-strip ends --> */}
        </div>
    </>);
}