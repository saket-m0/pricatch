import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getUser = (token) => {
    return (dispatch) => {
        axios
            .get("http://127.0.0.1:8000/api/accounts/user", {
                headers: { Authorization: "Token " + token },
            })
            .then((res) => {
                const user = res.data;
                dispatch(authSuccess(token, user));
            });
    };
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    localStorage.removeItem("token");
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const authLogin = (email, password) => {
    return (dispatch) => {
        dispatch(authStart());
        axios
            .post("http://127.0.0.1:8000/api/accounts/login", {
                username: email,
                password: password,
            })
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                dispatch(getUser(token));
            })
            .catch((err) => {
                dispatch(authFail("Email Address or Password is INCORRECT"));
            });
    };
};

export const authSignup = (name, email, password1, password2) => {
    return (dispatch) => {
        dispatch(authStart());
        axios
            .post("http://127.0.0.1:8000/api/accounts/register", {
                name: name,
                email: email,
                password: password1,
                password2: password2,
            })
            .then((res) => {
                const token = res.data.token;
                const payload = res.data;
                localStorage.setItem("token", token);
                if (
                    payload.email[0] === "user with this email already exists."
                ) {
                    dispatch(authFail("Email Address already exists"));
                } else {
                    dispatch(getUser(token));
                }
            })
            .catch((err) => {
                dispatch(authFail(err));
            });
    };
};

export const authCheckState = () => {
    return (dispatch) => {
        const token = localStorage.getItem("token");
        if (token === undefined) {
            dispatch(logout());
        } else {
            dispatch(getUser(token));
        }
    };
};
