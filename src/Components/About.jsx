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
                        <div className="row">
                            <div className="col-sm-4    ">
                                <div className="about_wrap_one">
                                    <div className="hexagon"><a href="https://vk.com/id47848" target="_blank"> <span className="mask"></span> <img
                                        src="img/about.jpg"/> </a>
                                        <div className="portfolio-title">
                                            <h4>Наталия<span>Богиня SMM</span></h4>
                                        </div>
                                    </div>
                                    <p>Я-Наталия Петухова. С августа 2020 года я решила посвятить себя профессии SMM, а именно маркетинг и продвижение в интернете.</p>
                                    <ul className="about_social">
                                        <li><a href="https://www.instagram.com/natyplusvera/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="https://vk.com/id47848" target="_blank"><i className="fab fa-vk"></i></a></li>
                                        <li><a href=" https://wa.me/79266253611" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="jumbotron">
                                    <h3>Адрес</h3>
                                    <address>
                                        Россия, г. Люберцы, Комсомольский пр-т, 14/2
                                    </address>
                                    <address>
                                        <strong>Email</strong> <a href="mailto:natyplusvera@gmail.com">natyplusvera@gmail.com</a>
                                    </address>
                                </div>
                                <div className="col-sm">
                                    <p>Вы можете со мной связаться позвонив по телефону<strong> номер: +7(926)625-36-11</strong></p>
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