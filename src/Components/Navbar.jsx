import React from "react";

const Navbar = () => {
    return (
        <div className="navbar navbar-default navbar-fixed-top" id="ha-header">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-collapse"><span
                        className="icon-bar"></span> <span className="icon-bar"></span> <span
                        className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand logo" href="index.html">Project name</a></div>
                <div className="navbar-collapse collapse ">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#top">Главная</a></li>
                        <li><a href="#portfolio ">Мои работы</a></li>
                        <li><a href="#about">Обо мне</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;