import { Outlet } from "react-router-dom";
import Banner from "../banner";

export default function HomePadrao() {
    return (
        <main> 
            <Banner />

            <Outlet />
        </main>
    )
}