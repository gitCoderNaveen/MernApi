import React from 'react';
import './Css/contentDiv.css';
import gal1 from '../assets/Images/gal1.png'
import gal2 from '../assets/Images/gal2.png'
import gal3 from '../assets/Images/gal3.png'
import gal4 from '../assets/Images/gal4.png'
import gal5 from '../assets/Images/gal5.png'
import gal6 from '../assets/Images/gal6.png'
import gal7 from '../assets/Images/gal7.png'
import gal8 from '../assets/Images/gal8.png'
import gal9 from '../assets/Images/gal9.png'
import gal10 from '../assets/Images/gal10.png'
import gal11 from '../assets/Images/gal11.png'
import gal12 from '../assets/Images/gal12.png'
import gal13 from '../assets/Images/gal13.png'
import gal14 from '../assets/Images/gal14.png'
import gal15 from '../assets/Images/gal15.png'
import gal16 from '../assets/Images/gal16.png'
import gal17 from '../assets/Images/gal17.png'
import gal18 from '../assets/Images/gal18.png'

function ContentDiv() {

    return (
        <div className="outer-container">
            <form action="">
                <fieldset>
                    <legend>Beauty & Spa</legend>
                </fieldset>
                <div className="inner-division">
                    <div className="image-container">
                        <figure className='img-figure'>
                        <img className='gallery' src={gal1} alt="gallery"/>
                        <figcaption>Beauty Parlour</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal2} alt="gallery"/>
                        <figcaption>Spa & Massage</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal3} alt="gallery"/>
                        <figcaption>Salons</figcaption>
                        </figure>
                    </div>
                </div>
            </form>
            <form action="">
                <fieldset>
                    <legend>Wedding Requisites</legend>
                </fieldset>
                <div className="inner-division">
                    <div className="image-container">
                        <figure className='img-figure'>
                        <img className='gallery' src={gal10} alt="gallery"/>
                        <figcaption>Banquet Halls</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal11} alt="gallery"/>
                        <figcaption>Caters</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal12} alt="gallery"/>
                        <figcaption>Bridal Requisite</figcaption>
                        </figure>
                    </div>
                </div>
            </form>
            <form action="">
                <fieldset>
                    <legend>Daily Needs</legend>
                </fieldset>
                <div className="inner-division">
                    <div className="image-container">
                        <figure className='img-figure'>
                        <img className='gallery' src={gal7} alt="gallery"/>
                        <figcaption>Movies</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal8} alt="gallery"/>
                        <figcaption>Grocery</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal9} alt="gallery"/>
                        <figcaption>Electricians</figcaption>
                        </figure>
                    </div>
                </div>
            </form>
            <form action="">
                <fieldset>
                    <legend>Repairs & Services</legend>
                </fieldset>
                <div className="inner-division">
                    <div className="image-container">
                        <figure className='img-figure'>
                        <img className='gallery' src={gal4} alt="gallery"/>
                        <figcaption>AC Services</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal5} alt="gallery"/>
                        <figcaption>CAR service</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal6} alt="gallery"/>
                        <figcaption>BIKE Services</figcaption>
                        </figure>
                    </div>
                </div>
            </form>
            <form action="">
                <fieldset>
                    <legend>Bills & Recharge</legend>
                </fieldset>
                <div className="inner-division">
                    <div className="image-container">
                        <figure className='img-figure'>
                        <img className='gallery' src={gal16} alt="gallery"/>
                        <figcaption>Mobile</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal17} alt="gallery"/>
                        <figcaption>Electriciry</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal18} alt="gallery"/>
                        <figcaption>DTH</figcaption>
                        </figure>
                    </div>
                </div>
            </form>
            <form action="">
                <fieldset>
                    <legend>Travel Bookings</legend>
                </fieldset>
                <div className="inner-division">
                    <div className="image-container">
                        <figure className='img-figure'>
                        <img className='gallery' src={gal13} alt="gallery"/>
                        <figcaption>Flight</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal14} alt="gallery"/>
                        <figcaption>BUS</figcaption>
                        </figure>
                        <figure className='img-figure'>
                        <img className='gallery' src={gal15} alt="gallery"/>
                        <figcaption>Train</figcaption>
                        </figure>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContentDiv;

