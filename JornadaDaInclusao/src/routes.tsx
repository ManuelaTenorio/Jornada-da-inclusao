import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import JogoNumeros from "./pages/jogoNumeros";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="jogoNumeros" element={<JogoNumeros />} />
            </Routes>
        </BrowserRouter>
    )
}
