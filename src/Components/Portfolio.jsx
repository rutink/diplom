import React from "react";

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-sm-12">
                        <div className=" container TitleSection">
                            <header className="page-head">
                                <h1>Our<small> // Portfolio</small></h1>
                            </header>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh erat, sagittis sit amet
                            congue at, aliquam eu libero. Integer molestie, turpis vel ultrices facilisis, nisi mauris
                            sollicitudin mauris. aliquam eu libero. Integer molestie, turpis vel ultrices facilisis,
                            nisi mauris sollicitudin mauris.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-sm-12">
                        <section id="filter_header" className="clearfix portfolioFilter">
                            <ul id="filters" className="option-set clearfix" data-option-key="filter">
                                <li><a href="#filter" data-option-value="*" className="selected">all</a></li>
                                <li><a href="#filter" data-option-value=".Logo_design">Logo Design</a></li>
                                <li><a href="#filter" data-option-value=".branding">Branding</a></li>
                                <li><a href="#filter" data-option-value=".copywriting">Copywriting</a></li>
                                <li><a href="#filter" data-option-value=".print">Print</a></li>
                            </ul>
                        </section>
                        <div id="filter_container" className="clearfix portfolioContainer">
                            <div className="element Logo_design copywriting" data-category="Logo_design">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/2.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element branding copywriting" data-category="branding">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/1.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element Logo_design copywriting" data-category="Logo_design">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/3.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element Logo_design copywriting" data-category="Logo_design">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/2.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element branding copywriting" data-category="branding">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/1.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element Logo_design copywriting" data-category="Logo_design">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/3.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element other print" data-category="other">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/2.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element copywriting" data-category="copywriting">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/3.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element copywriting" data-category="copywriting">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/1.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element Logo_design copywriting" data-category="Logo_design">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/3.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element branding copywriting" data-category="branding">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/1.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element Logo_design copywriting" data-category="Logo_design">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/2.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element Logo_design copywriting" data-category="Logo_design">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/1.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="element branding copywriting" data-category="branding">
                                <div className="hexagon"><a href="#"> <span className="mask"></span> <img
                                    src="img/2.jpg" alt="filter"/> </a>
                                    <div className="portfolio-title">
                                        <h4>John Doe<span>Art-Director</span></h4>
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