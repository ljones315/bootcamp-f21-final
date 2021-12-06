import {useEffect, useState, React} from 'react'
import styles from './AdoptPage.module.css'

export default function AdoptPage() {
    const [cat, setCat] = useState([]);
    useEffect(() => {
        let url = "http://localhost:3001/cat"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const catObject = data.map(feature =>
                    <div className={styles.card}>
                        <li>{feature.name}</li>
                        <li>{feature.age}</li>
                        <li>{feature.location}</li>
                        {
                            feature.isAdopted == false ? <li> Not adopted</li> : <li> Adopted</li>
                        }
                    </div>
                    )
                    setCat(catObject);
            })

    }, []) 
        return (
            <div>
                <h1>Help These Cats, They Need to be Adopted</h1>
                {cat}
            </div>
        )

            
}

