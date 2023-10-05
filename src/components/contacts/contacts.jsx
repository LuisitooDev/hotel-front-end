import React, { useState } from "react";

import styles from "./contacts.module.css";
import { getImageUrl } from "../../utils";

export const Contacts = () => {
    return(
       <>
       
            <div className={styles.container}> 
                <div className={styles.content}>
                    <div className={styles.welcome}>CONTACT US</div>
                </div>
            </div>
        </>
    );

}