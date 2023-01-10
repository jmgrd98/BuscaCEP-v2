import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Map from "./pages/Map/Map";

export default function Router(){

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/map" element={<Map/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}