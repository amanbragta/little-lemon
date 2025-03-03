import { Link } from "react-router";

export default function ConfirmedBooking() {
  return (
    <div className="confirmed-booking">
      <h1>Congratulations your booking has been confirmed</h1>
      <button>
        <Link to={"/"}>Go back to homepage</Link>
      </button>
    </div>
  );
}
