import { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/home";
import ForgotPassword from "./pages/LoginSignup/forgotpassword";
import Login from "./pages/LoginSignup/login";
import ResetPassword from "./pages/LoginSignup/resetpassword";
import SignUp from "./pages/LoginSignup/signup";
import PostJob from "./pages/PostJob/postJob";

function App() {
  let currentUser = localStorage.getItem("user");

  // console.log("from app.js", currentUser);

  useEffect(() => {}, [currentUser]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/forgot-password" component={ForgotPassword} exact />
        <Route path="/reset-password" component={ResetPassword} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/post-a-job" component={PostJob} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
