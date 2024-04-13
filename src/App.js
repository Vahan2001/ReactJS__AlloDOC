import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import DoctorsProfile from "./pages/doctorsProfile/DoctorsProfile";
import MyNotes from "./components/myNotes/MyNotes";
import Balance from "./pages/balance/Balance";
import NotFound from "./pages/404NotFound/NotFound";
import JsonPlaceholder from "./pages/jsonPlaceholder/JsonPlaceholder";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/mynotes/doctorsprofile/:id"
          element={<DoctorsProfile />}
        />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/json" element={<JsonPlaceholder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
