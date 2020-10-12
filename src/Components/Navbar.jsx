import React from "react";
import {NavLink} from "react-router-dom";

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
                        <li><NavLink  to="/">Главная</NavLink></li>
                        <li><NavLink  to="/portfolio ">Мои работы</NavLink></li>
                        <li><NavLink  to="/about">Обо мне</NavLink></li>
                        <li><NavLink  to="/contact">Контакты</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;