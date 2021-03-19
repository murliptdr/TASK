import React, { Component } from "react";
import PropTypes from "prop-types";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import ForthPage from "./ForthPage";

class Form extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  

  render() {
    const { onSubmit } = this.props;

    const { page } = this.state;
    return (
      <div>
        {page === 1 && <FormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <FormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <FormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
            nextPage={this.nextPage}
          />
        )}
        {page === 4 && (
          <FormForthPage
            firstName={localStorage.getItem("firstname")}
            lastName={localStorage.getItem("lastname")}
            dob={localStorage.getItem("dob")}
            mg={localStorage.getItem("mg")}
            address={localStorage.getItem("address")}
            country={localStorage.getItem("country")}
            city={localStorage.getItem("city")}
            pincode={localStorage.getItem("pincode")}
            pname={localStorage.getItem("pname")}
            pdesc={localStorage.getItem("pdesc")}
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
