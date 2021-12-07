import fetch from "node-fetch"
// baseURL = "localhost:3000/api/"
import React from 'react'


export default class Fetch extends React.Component  {

    async componentDidMount() {
        const response = await fetch(`${baseURL}/cats`);
        const data = await response.json();
        console.log(data);
        const catObject = data.map(feature =>
            <div>
                <li>feature.name</li>
                <li>feature.age</li>
                <li>feature.location</li>
                <li>feature.breed</li>
                if (feature.isAdopted == false) {
                    <li>Not adopted</li>
                } else {
                    <li>Adopted</li>
                }
            </div>
            )
    }
}
