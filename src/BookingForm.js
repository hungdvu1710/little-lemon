import "./BookingForm.css";

const BookingForm = (props) => {
  const [date, handleDateChange] = props.dateState;
  const [guests, handleGuestsChange] = props.guestState;
  const [occasion, handleOccasionChange] = props.occasionState;
  const [availableTimes] = props.availableTimesState;
  const [resTime, handleResTimeChange] = props.resTimeState;


  return (
    <form>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={handleResTimeChange}
      >
        {availableTimes.timeSlots.map((time) => {
          return <option key={time}>{time}</option>;
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
