import React from 'react';
import styles from "./Logos.module.css";
import maclogo from "../images/maclogo.png";
import surfacelogo from "../images/surfacelogo.png";
import sonylogo from "../images/sonylogo.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={surfacelogo} alt="Surface-Logo" />
                <img src={maclogo} alt="Mac-Logo" />
                <img src={sonylogo} alt="Sony-Logo" />
            </div>
        </div>
    );
};

export default Logos;