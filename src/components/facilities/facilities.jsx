import React, { useState } from "react";

import styles from "./facilities.module.css";
import { getImageUrl } from "../../utils";

export const Facilities = () => {

    return(
        <div className="containerMayor">
            <div className={styles.container}> 
                <div className={styles.content}>
                    <div className={styles.welcome}>WELCOME TO</div>
                    <div className={styles.titleHotel}>LUXURY HOTELS</div>
                    <div className={styles.description}>Book your stay and enjoy Luxury redefined at the most affordable rates.</div>
                </div>
            </div>
            <div className={styles.containerBtn}>
                <a className={styles.bookBtn}>Book Now</a>
            </div>
            <div className={styles.containerBtn}>
                <a className={styles.scrollBtn}>V</a>
            </div>
        </div>
    );

}