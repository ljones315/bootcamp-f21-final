import React, { useReducer,useState } from 'react'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
 
export default function App() {
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
    console.log(event);
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  async function post() {
    const val = await fetch(`api/applications/`, {
      method : "POST",
      body : JSON.stringify(formData)
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
           <input name="location" onChange={handleChange}/>
           <p>Email</p>
           <input name="email" onChange={handleChange}/>
           <p>Phone#</p>
           <input name="phone" onChange={handleChange}/>
         </label>
       </fieldset>
       <button type="submit" onClick={post}>Submit</button>
      </form>
    </div>
  )
}
