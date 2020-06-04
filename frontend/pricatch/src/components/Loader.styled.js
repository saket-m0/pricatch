import styled from "styled-components";

export const StyledLoader = styled.div`
    margin-top: 20px;
    margin-bottom: 25px;
    .loader {
        margin: auto;
        border: 12px solid #485563;
        border-top: 12px solid #29323c;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
