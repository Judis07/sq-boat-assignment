import { BrowserRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
import InitialRoute from "./routes/initialRoute";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/home";
import ForgotPassword from "./pages/LoginSignup/forgotpassword";
import Login from "./pages/LoginSignup/login";
import ResetPassword from "./pages/LoginSignup/resetpassword";
import SignUp from "./pages/LoginSignup/signup";
import PostJob from "./pages/PostJob/postJob";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <InitialRoute path="/" component={Home} exact />
        <InitialRoute path="/login" component={Login} exact />
        <InitialRoute path="/signup" component={SignUp} exact />
        <InitialRoute
          path="/forgot-password"
          component={ForgotPassword}
          exact
        />
        <InitialRoute
          path="/reset-password/:token"
          component={ResetPassword}
          exact
        />
        <ProtectedRoute path="/dashboard" component={Dashboard} exact />
        <ProtectedRoute path="/post-a-job" component={PostJob} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
