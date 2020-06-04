import React, { Component } from "react";
import { StyledLogin } from "./Login.styled";
import Loader from "./Loader";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";
// import axios from "axios";

class Login extends Component {
    state = {};

    handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        // const token = localStorage.getItem("token");

        this.props.onAuth(email, password);
        // axios
        //     .get("http://127.0.0.1:8000/api/accounts/user", {
        //         headers: { Authorization: "Token " + token },
        //     })
        //     .then((res) => {
        //         const user = res.data;
        //         localStorage.setItem("user", user);
        //         console.log(localStorage.getItem("user"));
        //     });
    };

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p className='errormessage-text'>{this.props.error}</p>
            );
        }

        return (
            <StyledLogin>
                <h2 className='LoginTitle'>Login</h2>
                {errorMessage ? (
                    <div className='errormessage'>{errorMessage}</div>
                ) : (
                    ""
                )}

                {this.props.loading ? (
                    <Loader />
                ) : (
                    <div className='LoginForm'>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <label>Email Address</label>
                            <br />
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email Address'
                            />
                            <br />

                            <label>Password</label>
                            <br />

                            <input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='Password'
                            />
                            <br />

                            <input type='submit' value={this.props.btnValue} />
                        </form>
                    </div>
                )}
            </StyledLogin>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password) =>
            dispatch(actions.authLogin(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
