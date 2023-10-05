import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./rooms.module.css";
import { getImageUrl } from "../../utils";

export const Rooms = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return(
        <div className="containerMayor">
            <div className={styles.container}> 
                <div className={styles.content}>
                    <div className={styles.welcome}>WELCOME TO</div>
                    <div className={styles.titleHotel}>LUXURY HOTELS</div>
                    <div className={styles.description}>Book your stay and enjoy Luxury redefined at the most affordable rates.</div>
                </div>
            </div>
            <div>
                <center>
                <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd" // Puedes personalizar el formato de fecha
            placeholderText="Seleccione una fecha"
            />
            </center>
            </div>
            <div className={styles.containerBtn}>
                <a className={styles.scrollBtn}>V</a>
            </div>
        </div>
    );

}