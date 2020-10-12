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
                        <p>Тут будут работы, а именно ссылки на паблик</p>
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
                                <div className="hexagon"><NavLink to="#"> <span className="mask"></span> <img src="img/2.jpg" alt="filter"/> </NavLink>
                                    <div className="portfolio-title">
                                        <h4>Пирсинг<span>прокалыватель</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element instagram" data-category="branding">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img src="img/1.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>Лили Бровична<span>начесыватель</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element vk" data-category="Logo_design">
                                <div className="hexagon"><NavLink to="#"> <span className="mask"></span> <img src="img/3.jpg" alt="filter"/> </NavLink>
                                    <div className="portfolio-title">
                                        <h4>Чаигонево<span>кипяточник</span></h4>
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