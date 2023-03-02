import React from "react";
import Cards from "../cards";
import './styles.css'

function Bi (){
    return (
        <>
            <div class="actor-cards-container">
                <div class="scenes-content">
                    <div class="card scenes-1"></div>
                    <div class="card scenes-2"></div>
                    <div class="card scenes-3"></div>
                    <div class="card scenes-4"></div>
                </div>
            </div>
            <Cards />
            <div class="actor-cards-container">
                <div class="makingoff-content">
                    <div class="card makingoff-1"></div>
                    <div class="card makingoff-2"></div>
                    <div class="card makingoff-3"></div>
                    <div class="card makingoff-4"></div>
                    <div class="card makingoff-5"></div>
                </div>
            </div>
            <div class="actor-cards-container">
                <div class="publi-content">
                    <div class="card publi-1"></div>
                </div>
            </div>                                              
        </>
    )
}

export default Bi;