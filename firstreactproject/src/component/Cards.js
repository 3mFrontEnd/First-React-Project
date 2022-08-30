import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import macbook from "../images/mac.png";
import surface from "../images/surface.png";
import hp from "../images/hp.png";
import sony from "../images/Sony.png";

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={macbook} name = "MacBook" cost= "$1199.99" />
                <Card image={surface} name = "surface" cost= "$1299.99" />
                <Card image={hp} name = "hp" cost= "$1099.99" />
                <Card image={sony} name = "sony" cost= "$999.99" />
            </div>
        );
    }
}

export default Cards;
