import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const FirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <center><h2>Basic Details</h2></center>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field name="dob" type="date" component={renderField} label="DOB" />
        <Field
          name="marritalstatus"
          type="text"
          component={renderField}
          label="Marrital Status"
        />
        <div>
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
})(FirstPage);
