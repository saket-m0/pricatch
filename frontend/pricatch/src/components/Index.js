import React from "react";
import { StyledIndex } from "./Index.styled";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

const Index = (props) => {
    const AboutRef = React.createRef();

    return (
        <StyledIndex>
            <Header RefForAbout={AboutRef} {...props} />
            <div ref={AboutRef}>
                <About />
            </div>
            <Footer />
        </StyledIndex>
    );
};

export default Index;
