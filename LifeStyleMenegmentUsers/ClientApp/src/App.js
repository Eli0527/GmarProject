import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./home/Home";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { ApplicationPaths } from "./components/api-authorization/ApiAuthorizationConstants";
import Footer from "./components/footer/footer";
import "./custom.css";
import Goals from "./components/Goals/goals";
import MealData from "./components/mealData/mealData";
import Queries from "./components/queries/queries";
import HomePage from "./components/homePage/homePage";
import useHistory from "use-history";

const App = (props) => {
  const displayName = App.name;
  const history = useHistory();

  return (
<Router>
    <Layout  className="App">
      <Switch>
      <AuthorizeRoute exact path="/" component={Home} />
      <AuthorizeRoute path="/goals" component={Goals} />
      <AuthorizeRoute path="/mealData" component={MealData} />
      <AuthorizeRoute path="/queries" component={Queries} />
      <AuthorizeRoute path="/homePage" component={HomePage} />

      <Route
        path={ApplicationPaths.ApiAuthorizationPrefix}
        component={ApiAuthorizationRoutes}
      />
      </Switch>
      <Footer></Footer>
    </Layout>
    </Router>
  );
};
export default App;
