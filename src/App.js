import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Nf404 from "./components/404";
import DetailsCard from "./components/details-card";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:id' exact component={DetailsCard} />
        <Route path='/:*' exact component={Nf404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
