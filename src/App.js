import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/LoginSignup/login";
import SignUp from "./pages/LoginSignup/signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
