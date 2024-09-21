import { BrowserRouter, Route, Routes } from "react-router-dom";
import JogoVogais from "./pages/JogoVogais/JogoVogais";
import Teste from "./pages/teste/Teste";


export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/jogoVogais" element={<JogoVogais />}></Route>
            <Route path="/teste" element={<Teste />}></Route>
        </Routes>
        </BrowserRouter>
    )
}