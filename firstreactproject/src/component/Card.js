import React, { Component } from 'react';
import styles from "./Card.module.css";
import down from "../images/down-arrow.svg";
import up from "../images/up-arrow.svg";


class Card extends Component {
    constructor (){
        super();
        this.state = {
            counter: 0,
        }
    }

    downHandler = () =>{
        if (this.state.counter > 0){
            this.setState(prevState =>({
                counter: prevState.counter - 1,
            }))
        }
    }

    upHandler = () =>{
        this.setState(prevState =>({
            counter: prevState.counter + 1,
        }))
    }


    render() {
        const {image, name, cost} = this.props;
        const {counter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="laptops" />
                <h3>{name}</h3>
                <p>{cost}</p>
                <div className={styles.counter}>
                    <img className={this.state.counter ? "" : styles.deactive} src={down} alt="Arrow" onClick={this.downHandler} />
                    <span>{counter}</span>
                    <img src={up} alt="Arrow" onClick={this.upHandler} />

                </div>
            </div>
        );
    }
}

export default Card;
