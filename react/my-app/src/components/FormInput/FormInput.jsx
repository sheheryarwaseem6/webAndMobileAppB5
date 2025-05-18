import { useState } from "react";

function FormInput(){
    const [formFields , setFormFields] = useState({firstName: "", lastName: ""})
    const object = {firstName: "mike", lastName: "xyz"}
    console.log({...object , lastName: "John"})
    // const [firstName , setFirstName] = useState("")
    // const [lastName , setLastName] = useState("")
    // function handleChange(event){
    //     console.log("something changed" , event.target.value)
    //     setFirstName(event.target.value)
    // }
    return (
        <>
        <h1>Form</h1>
        {formFields.firstName}
        <form>
            <input onChange={(event)=> setFormFields({...formFields , firstName :event.target.value })} type="text" value={formFields.firstName} />
            <input onChange={(event)=> setFormFields({...formFields , lastName: event.target.value})} type="text" value={formFields.lastName} />
        </form>
        </>
    )
}


export default FormInput;