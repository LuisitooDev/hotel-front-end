import React, { useState } from "react";

import styles from "./contacts-info.module.css";
import { getImageUrl } from "../../../utils";

export const Contacts_info = () => {
    return(
       <>
            <div className={styles.container}> 
                <div className={styles.content}>
                    <div className={styles.title}>WE ARE HERE FOR YOU</div>
                    <div className={styles.description}>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
                    please forward it to our support desk and we will get back to you as soon as possible.</div>
                </div>     
            </div>
            <div class="row" className={styles.container2}>
                <div class="col-sm-6 p-3">
                    <div className={styles.direction}>497 Evergreen Rd. Roseville, CA 95673</div>
                    <br></br>
                    <div className={styles.direction}>Phone: +44 345 678 903
                    Email: luxury_hotels@gmail.com</div>
                </div>
                <div class="col-sm-6 p-3" className={styles.contentContact}>
                    <form>
                        <label for="name" class="form-label" className={styles.description}>Name:</label><br></br>
                        <input type="text" class="form-control" className={styles.entradas} id="name" placeholder="Enter your name" name="name"></input><br></br>

                        <label for="email" class="form-label" className={styles.description}>Email:</label><br></br>
                        <input type="email" class="form-control" className={styles.entradas} id="email" placeholder="Enter email" name="email"></input><br></br>

                        <label for="message" class="form-label" className={styles.description}>Message:</label><br></br>
                        <textarea class="form-control" rows="5" className={styles.entradaTexto} id="message" name="message" placeholder="Write your message"></textarea><br></br>
                    </form>
                </div>
                <a className={styles.bookBtn}>SUBMIT</a>
            </div>
        </>
    );

}