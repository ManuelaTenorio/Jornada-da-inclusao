import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Jogo2 from "./pages/jogo2";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="jogo2" element={<Jogo2 />} />
            </Routes>
        </BrowserRouter>
    )
}
