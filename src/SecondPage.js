import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
const country = ["Australia", "Brazil", "India", "Canada"];

const countryselector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select Country...</option>
      {country.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);
const SecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <div>
      <center><h2>Accomodation Details</h2></center>
      <form onSubmit={handleSubmit}>
        <Field
          name="address"
          type="text"
          component={renderField}
          label="Address"
        />
        <div>
          <label>Country</label>
          <Field name="country" component={countryselector} />
        </div>
        <Field name="city" type="text" component={renderField} label="City" />
        <Field
          name="pincode"
          type="text"
          component={renderField}
          label="Pin code"
        />

        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SecondPage);
