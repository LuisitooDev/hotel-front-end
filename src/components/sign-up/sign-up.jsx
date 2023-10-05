import React, { useState } from "react";

import styles from "./sign-up.module.css";
import { getImageUrl } from "../../utils";

export const Sign_up = () => {
    return(
       <>
       <div className={styles.navbar}>
       <img  src={getImageUrl("navbar/logo.png")}/>
       </div>
            <div className={styles.container}> 
                <div className={styles.content}>
                    <div className={styles.welcome}>SIGN UP</div>
                </div>
            </div>
            <div className={styles.container2}>
            <form >
                        <label for="email" class="form-label" className={styles.description}>Email:</label><br></br>
                        <input type="email" class="form-control" className={styles.entradas} id="email" placeholder="Enter your email" name="email"></input><br></br>

                        <label for="password" class="form-label" className={styles.description}>Password</label><br></br>
                        <input type="password" class="form-control" className={styles.entradas} id="password" placeholder="Enter your password" name="password"></input><br></br> 
                        <center>
                        <a className={styles.bookBtn}>SIGN UP</a><br></br>
                        <br></br>
                        <a href="/login">I have an account</a>
                        </center>
                    </form>
                  
            </div>
        </>
    );

}