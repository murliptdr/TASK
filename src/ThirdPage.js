import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const ThirdPage = (props) => {
  const { handleSubmit, previousPage, nextPage } = props;

  return (
    <div>
      <center><h2>Project Details</h2></center>
      <form onSubmit={handleSubmit}>
        <Field
          name="projectname"
          type="text"
          component={renderField}
          label="Project Name"
        />
        <Field
          name="description"
          type="text"
          component={renderField}
          label="Project Description"
        />
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" onClick={nextPage} className="next">
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
})(ThirdPage);
