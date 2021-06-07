import React from "react";
import BookingForm from "../src/components/BookingForm";
import BookingList from "./components/BookingList";
const App = () => {
  return (
    <div>
      <h1>Booking System</h1>
      <BookingForm />
      <BookingList />
    </div>
  );
};

export default App;
