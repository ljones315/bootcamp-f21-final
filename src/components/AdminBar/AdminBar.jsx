//import { Db } from 'mongodb'
import {useEffect, useState, React} from 'react'
import styles from './AdminBar.module.css'

export default function AdminBar() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("");

    const handleUserInput = (e) => {
      setSearch(e.target.value);
    };
    const handleSubmit = (e) => {
      console.log("submit button clicked")
      const newData = data.filter(e => e.catName === search)
      setData([...newData])
    };
    useEffect(() => {
      let url = "http://localhost:3001/adoptions"
      fetch(url)
        .then(response => response.json()) 
        .then(object => {
            /*const item = object.map(feature =>
              <div className={styles.card}>
                  <li>{feature.adopterName}</li>
                  <li>{feature.location}</li>
                  <li>{feature.email}</li>
              </div>
              )*/
              setData(object)
        })
    ,[]    
    })

    return (
    <div>
      <h1>Applicants for Adopting Cats</h1>
      <input placeholder="Enter name of cat" onChange={handleUserInput}/>
      <button type = "Submit" onClick={handleSubmit}>Submit</button>
      {data.map(feature =>
              <div className={styles.card}>
                  <li>{feature.adopterName}</li>
                  <li>{feature.location}</li>
                  <li>{feature.email}</li>
              </div>)}
    </div>
    )
}