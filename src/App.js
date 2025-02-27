import "./App.css";
import Homepage from "./pages/HomePage";
import { Route, Routes, useNavigate } from "react-router";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  const navigate = useNavigate();
  function updateTimes(availableTimes, action) {
    return fetchAPI(new Date(action.type));
  }
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };
  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  const submitForm = (data) => {
    if (submitAPI(data)) {
      console.log(data);
      navigate("/confirmed");
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/booking"
        element={
          <BookingPage
            time={availableTimes}
            dispatch={dispatch}
            form={submitForm}
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default App;
