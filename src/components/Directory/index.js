import React from "react";
import Main1 from './../../assets/main1.png';
import Main2 from './../../assets/main2.png';
import './style.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
            <div 
            className="item"
            style={{
                    backgroundImage: `url(${Main2})`
                }}
            >

            <a className="shop-other">Shop Other <br/>Products<br/>&gt;</a>
            </div>
            <div 
            className="item"
            style={{
                    backgroundImage: `url(${Main1})`
                }}
            >
                <a className="shop-sabudhana">Shop <br/>Sabudhana<br/>&gt;</a>
            </div>
            </div>
        </div>
    );
};

export default Directory;