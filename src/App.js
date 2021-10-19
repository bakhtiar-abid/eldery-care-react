import AuthProvider from "./contexts/AuthProvider";

import Header from "./Shared/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Pages/Home/Home";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Header></Header>
               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route path="/home">
                     <Home></Home>
                  </Route>
                  <Route path="/login">
                     <Login></Login>
                  </Route>
                  {/* <PrivateRoute path="/booking/:serviceId">
                     <Booking></Booking>
                  </PrivateRoute> */}
                  {/* <Route path="*">
                     <NotFound></NotFound>
                  </Route> */}
               </Switch>
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
