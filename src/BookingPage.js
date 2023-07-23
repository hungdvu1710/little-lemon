import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  return (
    <section>
      <BookingForm
      dateState={props.dateState}
      guestState={props.guestState}
      occasionState={props.occasionState}
      availableTimesState={props.availableTimesState}
      resTimeState={props.resTimeState}
    />
    </section>
  );
};

export default BookingPage;
