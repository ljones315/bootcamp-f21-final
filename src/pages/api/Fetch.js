import fetch from "node-fetch"
const baseURL = "localhost:3000/api/"
import React from 'react'

export default class Fetch extends React.Component  {


    async componentDidMount() {
        const response = await fetch(`${baseURL}/cats`);
        const data = await response.json();
        console.log(data);
        const catObject = data.map(feature =>
            <div>
                <li>catObject.name</li>
                <li>catObject.age</li>
                <li>catObject.location</li>
                <li>catObject.breed</li>
                if (catObject.isAdopted == false) {
                    <li>Not adopted</li>
                } else {
                    <li>Adopted</li>
                }
            </div>
            )
    }
}
