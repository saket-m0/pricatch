import React, { Component } from "react";
import { StyledRegister } from "./Register.styled";
import Loader from "./Loader";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

class Register extends Component {
    state = {
        errorMessage: [],
        FormTopRef: React.createRef(),
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const password1 = event.target.elements.password1.value;
        const password2 = event.target.elements.password2.value;

        if (name === "") {
            this.setState({ errorMessage: "Name is Required" });
            window.scrollTo({
                top: this.state.FormTopRef.current.offsetTop,
                behavior: "smooth",
            });
        } else if (email === "") {
            this.setState({ errorMessage: "Email is Required" });
        } else if (password1 === "") {
            this.setState({ errorMessage: "Password is Required" });
        } else if (password1 !== password2) {
            this.setState({ errorMessage: "Passwords do NOT match" });
        } else {
            this.setState({ errorMessage: [] });
            this.props.onAuth(name, email, password1, password2);
        }
    };

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p className='errormessage-text'>{this.props.error}</p>
            );
        }

        return (
            <StyledRegister>
                <h2 className='RegisterTitle' ref={this.state.FormTopRef}>
                    Register
                </h2>
                {this.state.errorMessage.length > 0 ? (
                    <div className='errormessage'>
                        {this.state.errorMessage}
                    </div>
                ) : (
                    ""
                )}

                {this.state.errorMessage.length === 0 && errorMessage ? (
                    <div className='errormessage'>{errorMessage}</div>
                ) : (
                    ""
                )}

                {this.props.loading ? (
                    <Loader />
                ) : (
                    <div className='RegisterForm'>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <label>Name</label>
                            <br />
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Name'
                            />
                            <br />
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
                                id='password1'
                                name='password1'
                                placeholder='Password'
                            />
                            <br />

                            <label>Confirm Password</label>
                            <br />

                            <input
                                type='password'
                                id='password2'
                                name='password2'
                                placeholder='Confirm Password'
                            />
                            <br />
                            <input type='submit' value='Register' />
                        </form>
                    </div>
                )}
            </StyledRegister>
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
        onAuth: (name, email, password1, password2) =>
            dispatch(actions.authSignup(name, email, password1, password2)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
