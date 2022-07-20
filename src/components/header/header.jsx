import React, {useEffect, useState} from "react";
import style from "./header.module.css";
import RuFlag from '../images/flag_rf_enl.jpg';
import EngFlag from '../images/flag_england1.jpg';
import SpainFlag from '../images/flag_ispanija_new.jpg';
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io5";

import {NavLink} from "react-router-dom";
const Header = (props) => {

    let [langDescription, setLangDescription] = useState(props.currentDescription)

    useEffect(() => {
        setLangDescription(props.currentDescription)
    }, [props.currentDescription])
    return (

        <div className={style.navbarStyle}>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-lg center">
                <NavLink className="navbar-brand" to={'/main'}><b>Mixer</b></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={'/main'} className="nav-link" aria-current="page"><AiFillHome className={style.iconHeader} />{langDescription.header.mainPage}</NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink to={'/support'} className="nav-link" aria-current="page"><AiFillHeart className={style.iconHeader} />{langDescription.header.supportPage}</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button"
                                                     data-bs-toggle="dropdown" aria-expanded="false">
                               <IoLanguageOutline className={style.iconHeader}/>{langDescription.header.languageSelect}
                           </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li className="dropdown-item" onClick={() => {
                                    props.setLanguage('ru')
                                }}><span className={style.langStyle}><img src={RuFlag} width={'25px'}/> Русский</span></li>
                                <li className="dropdown-item" onClick={() => {
                                    props.setLanguage('en')
                                }}><span className={style.langStyle}><img src={EngFlag} width={'25px'}/> English</span></li>
                                <li className="dropdown-item" onClick={() => {
                                    props.setLanguage('es')
                                }}><span className={style.langStyle}><img src={SpainFlag} width={'25px'}/> Español</span></li>
                            </ul>

                        </li>
                    </ul>
                </div>

            </div>
        </nav>

</div>


    )
}

export default Header;