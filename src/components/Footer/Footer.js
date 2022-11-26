import React from 'react';
import css from "./Footer.module.css";

export const Footer = () => {
    return (
        <>
            <footer className={`container ${css.footer}`}>
                <p>Сайт разработан Асылбековым Кайратом</p>
            </footer>
        </>
    )
}
