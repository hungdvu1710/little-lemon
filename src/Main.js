import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import { useState, useReducer } from "react";

const Main = () => {
  const [date, setDate] = useState("");
  // const [availableTimes, setAvailableTimes] = useState([]);
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const updateTimes = (state, action) => {
    return {timeSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};
  }

  const initializeTimes = {timeSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const handleResTimeChange = (e) => {
    setResTime(e.target.value);
  }

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({date: date})
  };

  return (
    <main>
      <BrowserRouter>
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
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
