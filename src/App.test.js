import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders the label in bookingform component", () => {
  const dispatch = jest.fn();
  const availableTimes = ["15:00"];
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

// const iniT = require("./initialiseTimes");
// test("initialiseTimes returns the same value", () => {
//   const time = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   expect(iniT).toEqual(time);
// });
