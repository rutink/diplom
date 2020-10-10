import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-9 col-sm-12">
                        <p>Copyright &copy; 2014 Coyier. All rights reserved.</p>
                    </div>
                    <div className="col-xs-12 col-md-3 col-sm-12">
                        <ul className=" footer_social clearfix">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;