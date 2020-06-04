import styled from "styled-components";

export const StyledUserPopup = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    overflow: scroll;
    height: 500px;

    
    .close {
        cursor: pointer;
        position: absolute;
        display: block;
        padding: 2px 5px;
        line-height: 20px;
        right: 10px;
        top: 10px;
        color: black;
        font-size: 36px;
    }

    .userPopupText {
        color: black;
        text-align: left;
        align-items: left;
    }
    .togglelink {
        background: none;
        border: none;
        padding: 5px;
        cursor: pointer;
        font-weight: bold;
        color: #29323c;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
    }
`;
