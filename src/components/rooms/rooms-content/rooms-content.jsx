import React, { useState, useEffect } from 'react';
import styles from "./rooms-content.module.css";
import { getImageUrl } from "../../../utils";
import DatePicker from "react-datepicker";
import { differenceInDays } from 'date-fns'; // Importa la función differenceInDays


import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51O2gfuJw0dovYyK3ViteKYgwaQz7Fh3fDPUDkqFrzI7zoIQ5c6EcT43rAjU37s4QvJaQJqGqE2uvllPbPS0SoWDI00NywlwgMx");

import "react-datepicker/dist/react-datepicker.css";


export function Rooms_content() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [numberOfNights, setNumberOfNights] = useState(null); // Estado para almacenar el número de noches
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/habitaciones');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:' + error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePayment = async () => {
    // Realiza la lógica de pago aquí
    // Puedes usar la variable `stripe` y otros valores según tus necesidades
  }

  const openModal = (room) => {
    setIsModalOpen(true);
    setSelectedRoom(room);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
    setArrivalDate(null);
    setDepartureDate(null);
    setNumberOfNights(null);
  }

  const handleArrivalDateChange = (date) => {
    setArrivalDate(date);
    calculateNumberOfNights(date, departureDate);
  }

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    calculateNumberOfNights(arrivalDate, date);
  }

  const calculateNumberOfNights = (arrival, departure) => {
    if (arrival && departure) {
      const nights = differenceInDays(departure, arrival);
      setNumberOfNights(nights);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>ROOMS</div>
      <div className={styles.text}>We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so that we can ensure an experience quite unique. Luxury hotels offer the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.</div>
      {products.length > 0 ? (
        products.map((product) => (
          <div className={styles.cardContainer} key={product.id}>
            <img className={styles.image} src={getImageUrl(`${product.imagen}`)} />
            <div className={styles.cardBanner}>
              <center>
                <div className={styles.cardTitle}>{product.tipo_de_habitacion}</div>
              </center>
            </div>
                <div className={styles.containerBtn}>
                  <a className={styles.bookBtn} onClick={() => openModal(product)}>Book Now</a>
                  <div className={styles.textPrecio}>Price: ${product.precio} per night</div>
                </div>
          </div>
        ))
      ) : (
        <p>No hay datos disponibles</p>
      )}

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeBtn} onClick={closeModal}>&times;</span>
            <p>Room: {selectedRoom.tipo_de_habitacion}</p>
            <p>Price: ${selectedRoom.precio} per night</p>
            <div>
              <p>Arrival Date:</p>
              <DatePicker selected={arrivalDate} onChange={handleArrivalDateChange} />
            </div>
            <div>
              <p>Departure Date:</p>
              <DatePicker selected={departureDate} onChange={handleDepartureDateChange} />
            </div>
            <p>Number of Nights: {numberOfNights}</p>

            <Elements stripe={stripePromise}>
              <div className={styles.paymentSection}>
                <p>Total Payment: ${selectedRoom.precio * numberOfNights}</p>
                <CardElement options={{ style: { base: { fontSize: '16px' } }}} />
                <button onClick={handlePayment} disabled={isPaymentProcessing} className={styles.paymentBtn}>
                  {isPaymentProcessing ? 'Processing...' : 'Pay Now'}
                </button>
              </div>
            </Elements>
          </div>
        </div>
      )}
    </div>
  );
}





