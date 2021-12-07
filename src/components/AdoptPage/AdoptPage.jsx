import {useEffect, useState, React} from 'react'
import styles from './AdoptPage.module.css'
import Link from 'next/link';

export default function AdoptPage() {
    const [cat, setCat] = useState([]);
    useEffect(() => {
        let url = "/api/cats"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const catObject = data.map(feature =>
                    <div className={styles.card}>
                        <img src={feature.image} width={100}/>
                        <li>{feature.name}</li>
                        <li>{feature.age}</li>
                        <li>{feature.location}</li>
                        {
                            feature.isAdopted == false ? <li> Not adopted</li> : <li> Adopted</li>
                        }
                        <li><Link href='/adoptForm'><a>Adpot me!</a></Link></li>  
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

