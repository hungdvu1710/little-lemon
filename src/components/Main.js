import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../api/api";

const updateTimes = (state, action) => {
  if (action && action.date) {
    return { timeSlots: fetchAPI(action.date) };
  }
  return state;
};

const initializeTimes = {
  timeSlots: fetchAPI(new Date()),
};

const Main = () => {
  const [date, setDate] = useState("");
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const handleResTimeChange = (e) => {
    setResTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ date: new Date(e.target.value) });
  };

  const handleSubmit = () => {
    const formData = {
      date: date,
      time: resTime,
      guests: guests,
      occasion: occasion,
    };

    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              dateState={[date, handleDateChange]}
              guestState={[guests, handleGuestsChange]}
              occasionState={[occasion, handleOccasionChange]}
              availableTimesState={[availableTimes]}
              resTimeState={[resTime, handleResTimeChange]}
              handleSubmit={handleSubmit}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;

export { updateTimes, initializeTimes}