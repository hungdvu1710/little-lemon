import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
