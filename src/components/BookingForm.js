import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
    ocassion: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    submitForm(form);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        data-testid="date"
        value={form.date}
        onChange={(e) => {
          setForm({ ...form, date: e.target.value });
          dispatch({ type: e.target.value });
        }}
        required
      />
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={form.time}
        onChange={(e) => {
          setForm({ ...form, time: e.target.value });
        }}
        required
      >
        {availableTimes.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        placeholder="1"
        value={form.guests}
        onChange={(e) => {
          setForm({ ...form, guests: e.target.value });
        }}
      />
      <label htmlFor="ocassion">Ocassion</label>
      <select
        id="ocassion"
        value={form.ocassion}
        onChange={(e) => {
          setForm({ ...form, ocassion: e.target.value });
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit" disabled={!form.date}>
        Make your reservation
      </button>
    </form>
  );
}
