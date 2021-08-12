import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/homes";
import Nf404 from "./components/404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/*' exact component={Nf404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
