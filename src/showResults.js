const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  localStorage.setItem("firstname", `${JSON.stringify(values.firstName)}`);
  localStorage.setItem("lastname", `${JSON.stringify(values.lastName)}`);
  localStorage.setItem("dob", `${JSON.stringify(values.dob)}`);
  localStorage.setItem("ms", `${JSON.stringify(values.marritalstatus)}`);
  localStorage.setItem("address", `${JSON.stringify(values.address)}`);
  localStorage.setItem("country", `${JSON.stringify(values.country)}`);
  localStorage.setItem("city", `${JSON.stringify(values.city)}`);
  localStorage.setItem("pincode", `${JSON.stringify(values.pincode)}`);
  localStorage.setItem("pname", `${JSON.stringify(values.projectname)}`);
  localStorage.setItem("pdesc", `${JSON.stringify(values.description)}`);
  alert("!saved sucessfully");
});
