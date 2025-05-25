import { useState } from "react";
import NavBar from "../NavBar/NavBar";

function FormInput() {
  const [formFields, setFormFields] = useState({ firstName: "", lastName: "" });
  const [isSignedIn , setSignedIn] = useState(false)
  function handleSubmit(e) {
    e.preventDefault();
    if (formFields.firstName === "") {
      alert("First name is required");
    } else {
      setFormFields({ firstName: "", lastName: "" });
      setSignedIn(true)
      alert("Form submitted");
      
    }
  }

  // const [firstName , setFirstName] = useState("")
  // const [lastName , setLastName] = useState("")
  // function handleChange(event){
  //     console.log("something changed" , event.target.value)
  //     setFirstName(event.target.value)
  // }
  return isSignedIn === false ? (
    <>
      <h1>Form</h1>
      {formFields.firstName}
      <form>
        <input
          onChange={(event) =>
            setFormFields({ ...formFields, firstName: event.target.value })
          }
          type="text"
          value={formFields.firstName}
        />
        <input
          onChange={(event) =>
            setFormFields({ ...formFields, lastName: event.target.value })
          }
          type="text"
          value={formFields.lastName}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </>
  ) : (
    <>
      <NavBar />
    </>
  );
}

export default FormInput;
