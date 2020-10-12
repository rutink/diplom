import React from "react";
import {NavLink} from "react-router-dom";

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-sm-12">
                        <div className=" container TitleSection">
                            <header className="page-head">
                                <h1>Мои Работы</h1>
                            </header>
                        </div>
                        <p>Здесь вы можете ознакомится с моими кейсами. Я только начала свою деятельность, количество работ будет добавляться</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-sm-12">
                        <section id="filter_header" className="clearfix portfolioFilter">
                            <ul id="filters" className="option-set clearfix" data-option-key="filter">
                                <li><NavLink to="#filter" data-option-value="*" className="selected">Все</NavLink></li>
                                <li><NavLink to="#filter" data-option-value=".vk">VK</NavLink></li>
                                <li><NavLink to="#filter" data-option-value=".instagram">Instagram</NavLink></li>
                            </ul>
                        </section>
                        <div id="filter_container" className="clearfix portfolioContainer">
                            <div className="element instagram" data-category="Logo_design">
                                <div className="hexagon"><a href="https://www.instagram.com/piercing_by_natoire/?igshid=1pug7org9uysd" target="_blank"> <span className="mask"></span> <img src="img/pirsing.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>pigment lab<span>мастер по пирсингу</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element instagram" data-category="branding">
                                <div className="hexagon"><a href="https://www.instagram.com/lilibrovki/" target="_blank"> <span className="mask"></span> <img src="img/lili.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>Лили Недовесова<span>Мастер по бровям</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element vk" data-category="Logo_design">
                                <div className="hexagon"><a href="https://vk.com/tchabrets" target="_blank"> <span className="mask"></span> <img src="img/teaChabrets.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>The Chabrets<span>лучший чай</span></h4>
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
export default Portfolio;