import React from "react";
import { Route } from "react-router-dom";
import Register from "./components/Register";

const BaseRouter = () => (
    <div>
        <Route exact path='/' />
        <Route exact path='/register' component={Register} />
    </div>
);

export default BaseRouter;
