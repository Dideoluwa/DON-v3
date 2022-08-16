import React from 'react'
import NavBar from './NavBar'
import styles from './Contact.module.css'

function Contact() {
  return (
    <div>
        <NavBar />
        <div className={styles.body}>
            <div className={styles.body_child}>
                <h1>CONTACT</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact