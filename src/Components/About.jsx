import React from "react";

const About = () => {
    return (
    <div>
        <div id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className=" container TitleSection">
                            <header className="page-head">
                                <h1>Обо мне</h1>
                            </header>
                        </div>
                        <p>Наконец что-то обо мне тут текст</p>
                        <div className="row">
                            <div className="col-sm-4">
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
                            <div className="col-sm">
                                <div className="jumbotron">
                                    <h3>Address Info</h3>
                                    <address>
                                        <strong>Company, Inc.</strong>
                                        795 Folsom Ave, Suite 600 San Francisco, CA 94107
                                        <abbr title="Phone">Tel:</abbr> (123) 456-7890
                                        <abbr title="Fax">Fax:</abbr> (123) 456-7890
                                    </address>
                                    <address>
                                        <strong>Email</strong> <a href="mailto:#">first.last@example.com</a>
                                        <strong>website</strong> <a href="#page13">www.company.com</a>
                                    </address>
                                </div>
                                <div className="col-sm">
                                    <p>Тут вы можете со мной связаться</p>
                                    <p>а что бы и нет?
                                        <strong> номер такой-то: 1-234-567-8910-1234</strong></p>
                                </div>
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