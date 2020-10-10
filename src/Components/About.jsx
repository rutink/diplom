import React from "react";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-sm-12">
                        <div className=" container TitleSection">
                            <header className="page-head">
                                <h1>Обо мне</h1>
                            </header>
                        </div>
                        <p>Наконец что-то обо мне тут текст</p>
                        <div className="row">
                            <div className="col-xs-12 col-md-3 col-sm-6">
                                <div className="about_wrap_one">
                                    <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                        src="img/1.jpg" alt="filter"/> </a>
                                        <div className="portfolio-title">
                                            <h4>Наталия<span>топ-SMM</span></h4>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh erat,
                                        sagittis sit amet congue at, aliquam eu libero.</p>
                                    <ul className="about_social">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;