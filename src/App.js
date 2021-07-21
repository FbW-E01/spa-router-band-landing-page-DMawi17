import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Twinkie from "./pages/Twinkie";
import Dorinda from "./pages/ Dorinda";
import Karen from "./pages/Karen";
import Jacky from "./pages/Jacky";
import Mattie from "./pages/Mattie";

function App() {
    return (
        <div>
            <Home />
            <Switch>
                <Route path="/twinkie">
                    <Twinkie />
                </Route>
                <Route path="/dorinda">
                    <Dorinda />
                </Route>
                <Route path="/karen">
                    <Karen />
                </Route>
                <Route path="/jacky">
                    <Jacky />
                </Route>
                <Route path="/mattie">
                    <Mattie />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
