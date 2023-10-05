import React, { useState } from "react";

import styles from "./rooms-content.module.css";
import { getImageUrl } from "../../../utils";

export const Rooms_content = () => {

    return(
        <>
        <div className={styles.container}>
            <div className={styles.title}>ROOMS AND RATES</div>     
            <div className={styles.text}>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
            comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
            by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </div>
            <img className={styles.image} src={getImageUrl("facilities/gym.png")}/>
            <img className={styles.image} src={getImageUrl("facilities/poolside-bar.png")}/>
            <img className={styles.image} src={getImageUrl("facilities/spa.png")}/>
            <img className={styles.image} src={getImageUrl("facilities/swimming-pool.png")}/>
            <img className={styles.image} src={getImageUrl("facilities/restaurant.png")}/>
            <img className={styles.image} src={getImageUrl("facilities/laundry.png")}/>
         </div>  
        </>
    );

}