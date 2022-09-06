import React from 'react'
// import Footer from './Footer'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import styles from './Portfolio.module.css'
import Lists from './PortfolioList'
import Fade from 'react-reveal/Fade';

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
                        <Fade bottom>
                            <div className={styles.card}>
                                <Link to={`/project/${list.title}`}>
                                    <div key={list.id}>
                                        <div className={styles.img_wrapper}>
                                            <img src={list.img} alt={list.title} />
                                        </div>
                                        <h2>{list.title}</h2>
                                    </div>
                                </Link>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Portfolio