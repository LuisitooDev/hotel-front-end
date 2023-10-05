import React, { useState } from "react";

import styles from "./facilities-info.module.css";
import { getImageUrl } from "../../../utils";

export const Facilities_info = () => {

    return(
        <>
        <div className={styles.container}>
            <div className={styles.title}>FACILITIES</div>     
            <div className={styles.text}>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
            that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
            and our modern luxury resort facilities will help you enjoy the best of all. </div>
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