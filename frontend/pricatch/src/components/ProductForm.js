import React, { Component } from "react";
import axios from "axios";
import { StyledProductForm } from "./ProductForm.styled";
import { connect } from "react-redux";

class ProductForm extends Component {
    state = {
        errorMessage: "",
        successMessage: [],
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const producturl = event.target.elements.producturl.value;
        const dprice = event.target.elements.dprice.value;

        console.log(producturl, dprice);

        this.props.isAuthenticated
            ? axios
                  .post("http://127.0.0.1:8000/api/products/", {
                      producturl: producturl,
                      dprice: dprice,
                      user: this.props.user.id,
                  })
                  .then(
                      this.setState((prevState) => ({
                          successMessage: [
                              ...prevState.successMessage,
                              "Product Tracking started!!!",
                          ],
                          errorMessage: "",
                      }))
                  )
                  .catch((error) => console.log(error))
            : this.setState({
                  errorMessage: "Please Login to Continue",
                  successMessage: "",
              });

        event.target.elements.producturl.value = "";
        event.target.elements.dprice.value = "";
    };

    render() {
        return (
            <StyledProductForm>
                <div className='ProductForm'>
                    {this.state.errorMessage ? (
                        <div className='errormessage'>
                            <p className='errormessage-text'>
                                {this.state.errorMessage}
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                    {this.state.successMessage.length > 0 ? (
                        <div>
                            {this.state.successMessage.map((success) => (
                                <div className='successmessage'>
                                    <p className='successmessage-text'>
                                        {success}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}

                    <br />
                    <form onSubmit={(event) => this.handleFormSubmit(event)}>
                        <label>Enter Product URL</label>
                        <br />
                        <input
                            type='text'
                            id='producturl'
                            name='producturl'
                            placeholder='Product URL'
                        />
                        <br />

                        <label>Enter Desired Price</label>
                        <br />

                        <input
                            type='number'
                            id='dprice'
                            name='dprice'
                            placeholder='Desired Price'
                        />
                        <br />

                        <input type='submit' value='Track' />
                    </form>
                </div>
            </StyledProductForm>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        isAuthenticated: state.token !== null,
    };
};

export default connect(mapStateToProps)(ProductForm);
