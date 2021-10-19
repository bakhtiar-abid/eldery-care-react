import AuthProvider from "./contexts/AuthProvider";

import Header from "./Shared/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import NotFound from "./Pages/Home/NotFound/NotFound";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import AboutUs from "./Pages/About Us/AboutUs";

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
                  <Route path="/about">
                     <AboutUs></AboutUs>
                  </Route>
                  <PrivateRoute path="/service/:serviceId">
                     <ServiceDetail></ServiceDetail>
                  </PrivateRoute>
                  <Route path="*">
                     <NotFound></NotFound>
                  </Route>
               </Switch>
               <Footer></Footer>
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
