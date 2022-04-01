import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/misc/Navbar"

function Router() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Router;

