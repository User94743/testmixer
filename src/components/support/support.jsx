import React, {useEffect, useState} from "react";
import style from './support.module.css';
import { AiFillHeart } from "react-icons/ai";

const Support = (props) => {

    let linkPay = 'https://www.digiseller.market/asp2/pay_wm.asp?id_d=3406110&lang=';
    let [langLinkPay, setLangLinkPay] = useState(props.lang === 'ru' ? linkPay + 'ru' : linkPay + 'en');
    let [langDescription, setLangDescription] = useState(props.currentDescription)

    useEffect(() => {
        setLangLinkPay(props.lang === 'ru' ? linkPay + 'ru' : linkPay + 'en')
        setLangDescription(props.currentDescription)
    }, [props.lang])
    return (
        <div className="container-lg center">
            <h4 className={style.textStyle}>    {langDescription.support.contacts}</h4>
            <br />
            <ul className="list-group">
                <li className="list-group-item">Telegram - Captain@545</li>
                <li className="list-group-item">Gmail - mixerdev9341@gmail.com</li>
            </ul>
            <br />
            <h4 className={style.textStyle}>    {langDescription.support.pay}</h4>
            <br />
            <a target="_blank" href={langLinkPay}>
                <button type="button" className="btn btn-danger"><AiFillHeart /> {langDescription.support.buttonPay}</button>
            </a>

        </div>
    )
}

export default Support;