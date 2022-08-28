import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/banner.png";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src= {banner} alt="banner.png" />
            <div className={styles.textContainer}>
                <h1>3M ForntEnd</h1>
                <p>
                    This is first <span>React.js</span> project
                </p>
            </div>
        </div>
    );
};

export default Banner;