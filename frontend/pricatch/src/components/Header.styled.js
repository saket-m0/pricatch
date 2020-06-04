import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    justify-content: space-around;

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .header {
        width: 100%;
        alignt-items: center;
        background: rgb(41, 50, 60);
        background: linear-gradient(
            0deg,
            rgba(41, 50, 60, 1) 0%,
            rgba(72, 85, 99, 1) 100%
        );
        color: white;
        justify-content: center;
    }

    .headercontent {
        padding: 10vh 0 10vh 0;
    }

    .title {
        font-size: 50px;
        margin-top: 2rem;
        font-family: "Montserrat";
        letter-spacing: 2px;
    }

    .tagline {
        font-size: 25px;
        margin-top: 1rem;
        font-family: Raleway;
        color: #6d9bc3;
        font-weight: bold   ;
        letter-spacing: 1.5px;
    }

    .GetStarted {
        width: 200px;
        display: inline-block;
        font-size: 25px;
        background: #131416;
        cursor: pointer;
        outline: inherit;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        margin-bottom: 1rem;
        vertical-align: center;
        transition: all 0.5s;
        margin-top: 2rem;
    }

    .GetStarted:hover {
        background: #485563;
    }

    .header-content-row {
        display: flex;
        margin-top: 50px;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            flex-direction: column;
        }
    }

    .header-content-column {
        width: 33.33%;
        padding: 10px;
        margin: 10px;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 100%;
        }
    }

    .header-content-info {
        padding-top: 12px;
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin: auto;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 50%;
        }
    }

    .ContentIcon {
        height: auto;
        width: 80px;
        padding-top: 10px;
    }

    .header-content-text {
        width: 70%;
    }

    .header-content-title {
        font-family: Roboto;
    }

    .NestedContent {
        margin-left: 2rem;
        text-align: justify;
        font-family: Roboto;
    }
`;
