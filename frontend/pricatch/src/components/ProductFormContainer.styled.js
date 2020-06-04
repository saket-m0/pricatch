import styled from "styled-components";

export const StyledProductFormContainer = styled.div`
    transform: ${({ open }) => (open ? "scaleY(1)" : "scaleY(0)")};
    height: ${({ open }) => (open ? "300px" : "0")};
    transform-origin: top;
    transition: transform 0.3s ease-in-out, height 0.3s ease-in-out;

    .FormContainer {
        justify-content: center;
        text-align: left;
        padding: 5px;
        width: 70%;
        background-color: white;
        margin: auto;
    }

    .FormContainerInner {
        background: #f3f3f3;
    }
`;
