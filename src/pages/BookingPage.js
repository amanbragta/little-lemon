import BookingForm from "../components/BookingForm";

const BookingPage = (props) => {
  return (
    <div className="booking_form">
      <h1>Reserve your table</h1>
      <BookingForm
        availableTimes={props.time}
        dispatch={props.dispatch}
        submitForm={props.form}
      />
    </div>
  );
};

export default BookingPage;
