import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import showResults from "./showResults";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;
const ForthPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <div>
      <center>
        <h2>Confirmation</h2>
      
      <form onSubmit={handleSubmit}>
        <h4 className="lcard_title"> First name = {props.firstName}</h4>
        <h4 className="lcard_title"> Last name = {props.lastName}</h4>
        <h4 className="lcard_title"> DOB = {props.dob}</h4>
        <h4 className="lcard_title"> Marrital Status = {props.mg}</h4>
        <h4 className="lcard_title"> Address = {props.address}</h4>
        <h4 className="lcard_title"> Country = {props.country}</h4>
        <h4 className="lcard_title"> City = {props.city}</h4>
        <h4 className="lcard_title"> Pincode = {props.pincode}</h4>
        <h4 className="lcard_title"> Project Name = {props.pname}</h4>
        <h4 className="lcard_title"> Project Description = {props.pdesc}</h4>

        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
      </center>
    </div>
  );
};
export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ForthPage);
