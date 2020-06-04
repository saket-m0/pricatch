import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { theme } from "./theme";
import Index from "./components/Index";
import * as actions from "./store/actions/auth";

class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Router>
                        <GlobalStyle />
                        <BaseRouter />
                        <div className='header'>
                            <Index {...this.props} />
                        </div>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
