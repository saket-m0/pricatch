import styled from "styled-components";

export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "Poppins", sans-serif;
    height: 10vh;

    * {
        margin: 0;
        padding: 0;
        box-size: border-box;
    }

    .logo {
        margin-top: 8px;
    }

    .nav-links {
        display: flex;
        width: 30%;
        justify-content: space-around;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
    }

    .nav-links li {
        list-style: none;
    }

    .nav-links a {
        color: white;
        text-decoration: none;
        letter-spacing: 2px;
        font-size: 18px;
    }

    .login {
        color: white;
        text-decoration: none;
        letter-spacing: 2px;
        font-size: 18px;
        background: none;
        color: inherit;
        border: none;
        cursor: pointer;
        outline: inherit;
        font-family: "Poppins", sans-serif;
    }

    .fas.fa-sign-in-alt {
        margin-left: 8px;
    }

    .fas.fa-sign-out-alt {
        margin-left: 8px;
    }
    .login-icon {
        color: white;
        text-decoration: none;
        letter-spacing: 2px;
        font-size: 18px;
        background: none;
        color: inherit;
        border: none;
        cursor: pointer;
        outline: inherit;
        display: none;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: flex;
        }
    }

    .popup-wrapper {
        align-items: center;
    }
`;
