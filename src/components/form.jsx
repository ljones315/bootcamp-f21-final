import React, { useReducer,useState } from 'react'
import './form.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
 
function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return (
    <div className="wrapper">
      <h1>Pet Adoption Form</h1>
      {submitting &&
       <div>Submtting Form
       <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
         </div>
     }
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" onChange={handleChange}/>
           <p>Location</p>
           <input name="Location" />
           <p>Email</p>
           <input name="Email" />
           <p>Phone#</p>
           <input name="phone" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default form;