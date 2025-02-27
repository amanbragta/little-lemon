import BookingForm from "../components/BookingForm";

const BookingPage = (props) => {
  return (
    <>
      <BookingForm
        availableTimes={props.time}
        dispatch={props.dispatch}
        submitForm={props.form}
      />
    </>
  );
};

export default BookingPage;
