import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cars from "../components/views/Cars";
import Car from "../components/views/Car";
import { Navbar } from "../components/elements/Navbar";
import { Login } from "../components/views/Login";
import { Dashboard } from "../components/views/Dashboard";
import CarAdd from "../components/views/CarAdd";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/cars/:carId" element={<Car />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/adauga" element={<CarAdd />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;