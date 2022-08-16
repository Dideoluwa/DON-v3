import React from 'react'
import NavBar from './NavBar'
import styles from './Portfolio.module.css'

function Portfolio() {
    return (
        <div>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.body_child}>
                    <h1>PORTFOLIO</h1>
                </div>
            </div>
        </div>
    )
}

export default Portfolio