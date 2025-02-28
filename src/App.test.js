import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("check if button is enabled", () => {
  const dispatch = jest.fn();
  const submitForm = jest.fn();
  const availableTimes = ["15:00"];
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
  const labelElement = screen.getByTestId("date");
  fireEvent.change(labelElement, { target: { value: "2025-02-01" } });
  const button = screen.getByText("Make your reservation");
  expect(button).not.toHaveAttribute("disabled");
  fireEvent.click(button);
  expect(submitForm).toHaveBeenCalled();
});

// const iniT = require("./initialiseTimes");
// test("initialiseTimes returns the same value", () => {
//   const time = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   expect(iniT).toEqual(time);
// });
