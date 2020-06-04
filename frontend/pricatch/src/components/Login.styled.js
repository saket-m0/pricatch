import styled from "styled-components";

export const StyledLogin = styled.div`
    h2 {
        color: #29323c;
        font-size: 40px;
        margin-bottom: 2rem;
        margin-top: 5px !important;
    }

    .errormessage {
        font-family: Roboto;
        border: 1px solid;
        border-radius: 5px;
        margin: 10px 0px;
        padding: 15px 10px 15px 10px;
        background-repeat: no-repeat;
        background-position: 10px center;
        color: #9f6000;
        background-color: #feefb3;
    }

    .errormessage-text {
        margin: auto;
        padding: auto;
    }

    label {
        margin-bottom: 3rem;
    }

    input[type="email"],
    input[type="password"] {
        background-color: #29323c;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        width: 100%;
        margin: 0.5rem 0 2rem 0;
    }

    input[type="submit"] {
        background-color: #29323c;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: left;
        margin-bottom: 1rem;
        transition-duration: 0.4s;
    }

    input[type="submit"]:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .LoginForm {
        color: black;
        text-align: left;
        align-items: left;
    }
`;
