import React from 'react'
// import Footer from './Footer'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import styles from './Portfolio.module.css'
import Lists from './PortfolioList'

function Portfolio() {
    return (
        <div>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.body_child}>
                    <h1>PORTFOLIO</h1>
                </div>
                <div className={styles.portfolio_list}>
                    {Lists.map((list) => (
                        <div className={styles.card}>
                            <Link to={`/description/${list.id}`}>
                                <div key={list.id}>
                                    <div className={styles.img_wrapper}>
                                        <img src={list.img} alt={list.title} />
                                    </div>
                                    <h2>{list.title}</h2>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Portfolio