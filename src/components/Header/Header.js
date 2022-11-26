import React from 'react';
import { Link } from 'react-router-dom';
import css from "./Header.module.css";

export const Header = () => {
    return (
        <>
            <header className={`container ${css.header_wrapper}`}>
                <Link to={"/"}>
                    <img src='/europe.png' alt="europe logo" />
                </Link>
                <div className={css.links_wrapper}>
                    <Link className={css.link} to={"/facts"}>Факты</Link>
                    <Link className={css.link} to={"/auto"}>Автомобили</Link>
                    <Link className={css.link} to={"/industry"}>Промышленность</Link>
                </div>
            </header>
        </>
    )
}
