import React from 'react'
import Link from 'next/Link'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <div>
                <ul className={styles.nav}>
                <li>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <Link href="/Adopt">Adopt</Link>
                </li>
                <li>
                    <Link href="/Admin">Admin</Link>
                </li>
                </ul>
            </div>
        </div>
    )
}
