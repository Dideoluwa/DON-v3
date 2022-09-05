import React from 'react'
import styles from './components/NotFound.module.css'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.body_child}>
                    <h1>404</h1>
                </div>
                <div className={styles.message}>
                    <h2>Òmọ😪...This page does not exist</h2>
                    <div className = {styles.message_button}>
                        <Link to='/'><button>Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound