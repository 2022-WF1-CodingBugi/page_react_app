import React from "react";
import Carousel from "react-material-ui-carousel";
import {Paper, Button, requirePropFactory} from "@mui/material";

import { restaurant } from "../Data/restaurant";

import main_logo from "./images/main_logo.png"
import food_category from "./images/food.png"
import activity_category from "./images/activity.png"
import lodging_category from "./images/lodging.png"
import attraction_category from "./images/attraction.png"

import "./Main.css";
import Category from "./Category";

const Main = ({onChange = f => f}) => {
    return (
        <>
            <header id="header">
                <img id="main_logo" src={main_logo} alt="어드레감디"/>
            </header>
            <section>
                <Category name="food" src={food_category} onChangePage={onChange}/>
                <Category name="activity" src={activity_category} onChangePage={onChange}/>
                <Category name="lodging" src={lodging_category} onChangePage={onChange}/>
                <Category name="attraction" src={attraction_category} onChangePage={onChange}/>
            </section>
            <seciton>
            <Carousel indicators={false}>
                    {
                        restaurant.map(
                            (r, i) => {
                                var imageSrc = r.image;
                                return (
                                <div id="carousel_div" style={{width: '200px', height: '100px'}}>
                                    <h5>{r.image}</h5>
                                    <img src={require(imageSrc).default} alt={r.name} style={{width: '100px', height: '100px'}}/>
                                </div>
                                )
                            }
                        )
                    }
                </Carousel>
            </seciton>
        </>
    )
}

export default Main;