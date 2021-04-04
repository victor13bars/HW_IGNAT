import React from "react";
import s from "./Error404.module.css";

function Error404() {
    return (
        <div className={s.error}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <img src="https://www.galerianudo.com/wp-content/uploads/2017/04/ERROR-404.png" alt=""/>
        </div>
    );
}

export default Error404;
