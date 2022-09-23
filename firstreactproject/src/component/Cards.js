import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import macbook from "../images/mac.png";
import surface from "../images/surface.png";
import hp from "../images/hp.png";
import sony from "../images/Sony.png";

class Cards extends Component {
    constructor(){
        super();
        this.state = {
            laptopData : [
                {id: 1, image: macbook, name: "MacBook", cost: "$1199.99" },
                {id: 2, image: surface, name: "surface", cost: "$1299.99" },
                {id: 3, image: hp, name: "hp", cost: "$1099.99" },
                {id: 4, image: sony, name: "sony", cost: "$999.99" },
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.laptopData.map(laptop => <Card key={laptop.id} image={laptop.image} name ={laptop.name} cost={laptop.cost} /> )}
            </div>
        );
    }
}

export default Cards;
