import { NavLink } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <div id="home">
            <h1>The Clark Sisters</h1>
            <nav>
                <NavLink exact to="twinkie">
                    Twinkie
                </NavLink>
                <NavLink to="dorinda">Dorinda</NavLink>
                <NavLink to="karen">Karen</NavLink>
                <NavLink to="jacky">Jacky</NavLink>
                <NavLink to="mattie">Mattie</NavLink>
            </nav>
        </div>
    );
};

export default Home;
