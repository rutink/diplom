import React from 'react';

const Header = () => {
    return (
        <div id="top" className="header">
            <div className="flexslider">
                <ul className="slides">
                    <li><img src="img/slider/1.jpg" alt="slider"/>
                        <p className="flex-caption">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula.</p>
                    </li>
                    <li><img src="img/slider/2.jpg" alt="slider"/>
                        <p className="flex-caption">Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li><img src="img/slider/3.jpg" alt="slider"/>
                        <p className="flex-caption">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                    </li>
                    <li><img src="img/slider/4.jpg" alt="slider"/>
                        <p className="flex-caption">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. </p>
                    </li>
                    <li><img src="img/slider/5.jpg" alt="slider"/>
                        <p className="flex-caption">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. </p>
                    </li>
                    <li><img src="img/slider/6.jpg" alt="slider"/>
                        <p className="flex-caption">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;