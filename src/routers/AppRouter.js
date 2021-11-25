import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ShowAndTell from "../routes/ShowAndTell";
import NotFoundPage from "../routes/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={ShowAndTell} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
