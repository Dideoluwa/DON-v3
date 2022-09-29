import React from 'react'
import styles from './Home.module.css'
import Typewriter from "typewriter-effect";
import NavBar from './NavBar';
// import Footer from './Footer';

function Home() {
    return (
        <div>
            <NavBar />
            <div className={styles.main}>
                {/* <RubberBand> */}
                    <div className={styles.main_child}>
                        <h1>Darasimi Oni</h1>
                        <div className={styles.para}>
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
                        </div>

                    </div>
                {/* </RubberBand> */}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Home