import React from 'react';

const Header = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/slider/1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/3.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Header;