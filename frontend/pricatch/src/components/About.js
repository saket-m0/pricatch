import React from "react";
import { StyledAbout } from "./About.styled";
import LogoSection from "./LogoSection";

const About = ({ getAboutRef }) => {

    return (
        <StyledAbout>
            <div>
                <p className='about-title' >
                    About
                </p>
            </div>
            <div className='about-content'>
                <p className='about-content-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    sollicitudin tempor lectus, dapibus egestas velit
                    sollicitudin id. Donec in dictum ipsum. Proin sodales nec
                    velit in faucibus. Cras imperdiet quis libero ac pharetra.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Nullam fringilla efficitur
                    nibh, ut efficitur nulla scelerisque placerat. Cras
                    condimentum, turpis at ultricies egestas, arcu nisl
                    convallis mauris, sit amet sollicitudin erat mauris in
                    massa. Nunc sed nulla sed nisl bibendum viverra nec rutrum
                    lorem. Ut egestas risus ex, nec lacinia risus fringilla nec.
                    Quisque tempus odio consectetur urna venenatis, vitae
                    ultrices nibh tempor. Donec et congue elit, sit amet
                    ullamcorper risus. Sed pulvinar vitae elit eget congue.
                </p>
                <p className='about-content-text'>
                    Vivamus varius dapibus pulvinar. Maecenas sit amet lectus
                    eget turpis sollicitudin tincidunt. Nullam malesuada, neque
                    in tristique iaculis, ex neque dapibus lectus, sed porta ex
                    justo in eros. Donec a consequat sapien. Suspendisse sodales
                    viverra tortor, et tempus tortor eleifend imperdiet. Aliquam
                    dignissim metus vel sodales blandit. Donec eget suscipit
                    magna. Pellentesque euismod faucibus molestie. Praesent ut
                    ex a ex molestie varius. Curabitur aliquet id eros
                    vestibulum egestas. Nulla eu sodales augue. Sed eget elit
                    magna. Curabitur ut tempus magna, ut facilisis mi.
                    Pellentesque ac quam eget metus semper mattis quis eu erat.
                    Aliquam sodales vitae risus sed semper.
                </p>
                <LogoSection />
            </div>
        </StyledAbout>
    );
};

export default About;
