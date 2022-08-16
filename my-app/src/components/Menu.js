import React from 'react'
import styles from './Menu.module.css'
import { Link } from "react-router-dom";

function Menu(props) {

    return (
        <>
            <div
                onClick={props.close}
                className={styles.cover}>
                <div className={styles.modal}>
                    <div
                        onClick={props.close}
                        className={styles.close}>
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                    </div>
                    <div className={styles.list2}>
                        <h2>
                            <Link to="/">HOME</Link>
                        </h2>
                        <h2>
                            <Link to="/about">ABOUT</Link>
                        </h2>
                        <h2>
                            <Link to="/portfolio">PORTFOLIO</Link>
                        </h2>
                        <h2>
                            <Link to="/contact">CONTACT</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu