import React from 'react'
import styles from './Home.module.css'
import Typewriter from "typewriter-effect";
import NavBar from './NavBar';

function Home() {
    return (
        <div>
            <NavBar />
            <div className={styles.main}>
                <div className={styles.main_child}>
                    <h1>Darasimi Oni</h1>
                    <div className={styles.para}>
                        <p>
                            <span style={{ display: "inline-flex" }}>
                                <Typewriter
                                    className="color"
                                    options={{
                                        strings: [
                                            "A Frontend Developer.",
                                            "An Amateur Music Producer.",
                                            "A Student."],
                                        autoStart: true,
                                        loop: true,
                                        changeDelay: 0.01
                                    }}
                                />
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home