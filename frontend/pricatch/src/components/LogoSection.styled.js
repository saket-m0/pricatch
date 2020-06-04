import styled from "styled-components";

export const StyledLogoSection = styled.div`
    padding: 0;
    margin: 0;
    box-style: border-box;

    .supported-sites-title {
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
    }

    .horizontal-lines {
        width: 30%;
        height: 1px;
        background-color: black;
        align-items: center;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 25%;
        }
    }

    .supported-sites {
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 36px;
    }

    .brand-logo-row {
        display: flex;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            flex-direction: column;
        }
    }

    .brand-logo-col {
        width: 33.33%;
        padding: 10px;
        margin: 10px;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 100%;
        }
    }

    .brand-logo-img {
        width: auto;
        height: 50px;
    }
`;
