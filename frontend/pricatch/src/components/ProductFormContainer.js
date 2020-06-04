import React from "react";
import { bool } from "prop-types";

import { StyledProductFormContainer } from "./ProductFormContainer.styled";
import ProductForm from "./ProductForm";

const ProductFormContainer = ({ open }) => {
    return (
        <StyledProductFormContainer open={open}>
            <div className='FormContainer'>
                <div className='FormContainerInner'>
                    <ProductForm />
                </div>
            </div>
        </StyledProductFormContainer>
    );
};

ProductFormContainer.propTypes = {
    open: bool.isRequired,
};

export default ProductFormContainer;
