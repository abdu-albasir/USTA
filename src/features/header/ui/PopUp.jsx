import React from 'react';
import logo1 from '../../../shared/assets/logo-popup-1.jpg'
import logo2 from '../../../shared/assets/logo-popup-2.png'
import logo3 from '../../../shared/assets/logo-popup-3.png'
import logo4 from '../../../shared/assets/logo-popup-4.png'
import '../styles/popup.css'

const PopUp = () => {
    return (
        <div className='container-for-popup'>
            <p className='h1-popup'>через социальные cети:</p>

            <div className="container-loc">
                <button className="popup-btn">
                    <img className='logo-popup' src={logo1} alt="!#" />
                    <p className='text-popup'>Telegram</p>
                </button>
                <button className="popup-btn">
                    <img className='logo-popup' src={logo2} alt="!#" />
                    <p className='text-popup'>Instagram</p>
                </button>
                <button className="popup-btn">
                    <img className='logo-popup' src={logo3} alt="!#" />
                    <p className='text-popup'>Linkeding</p>
                </button>
                <button className="popup-btn">
                    <img className='logo-popup' src={logo4} alt="!#" />
                    <p className='text-popup'>Youtube</p>
                </button>
            </div>
        </div>
    );
}

export default PopUp;
