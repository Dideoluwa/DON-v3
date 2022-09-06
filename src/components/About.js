import React, { useState, useEffect } from 'react'
import styles from './About.module.css'
import NavBar from './NavBar'
import img from '../Assets/IMG_4856.jpg'
import certificate from '../Assets/IMG_4846.PNG'
// import Footer from './Footer'
import Fade from 'react-reveal/Fade';

function About() {
    let [time, setTime] = useState([])
    useEffect(() => {
        const timer = setInterval(() => {
            let date = new Date()
            let h = date.toLocaleString('en-US', { hour: 'numeric', hour12: false, timeZone: 'Africa/Lagos' });
            let s = date.toLocaleString('en-US', { second: '2-digit', timeZone: 'Africa/Lagos' });
            let m = date.toLocaleString('en-US', { minute: '2-digit', timeZone: 'Africa/Lagos' });
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            setTime(`${h}:${m}:${s}`);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.body_child}>
                    <h1>ABOUT</h1>
                </div>
                <div className={styles.about_imageWrapper}>
                    <img src={img} alt='Darasimi' />
                </div>
                <div className={styles.body_child_content}>
                    <Fade  duration={1900} bottom>
                        <p>
                            I am a young 18 year-old web developer based in Nigeria. I am currently a student studying
                            computer science at <span className={styles.span}><a href='https://unilag.edu.ng/' target='_blank' rel="noreferrer">The University of Lagos. </a></span>
                            I picked interest in coding at a very young and vital stage of my life, When I wrote
                            just HTML and CSS before moving unto Javascript in the later future. Over the years and the past few months
                            , I have gained alot of coding experience from participating in hackathons and building different
                            projects using my Javascript skills. Coding isn't the
                            only thing i've always had a thing for, I picked interest in music production which I practice during my leisure. I am also a big fan of good music. Can't
                            lie, Listening to good music helps relieve me of stress at times 🧘🏾‍♂️. My favorite genres are the
                            <span className={styles.span}><a href='https://open.spotify.com/playlist/37i9dQZF1DWZCOSaet9tpB?si=CCqYdEECRUSK9vBdDqkPLw' target='_blank' rel="noreferrer"> Afrobeats</a></span>,
                            <span className={styles.span}><a href='https://open.spotify.com/playlist/48bTxPU1uCH6AKCODg1rPv?si=MjaNZgGbT2-s1-9KZG73ig' target='_blank' rel="noreferrer"> UK Drill </a></span>
                            and <span className={styles.span}><a href='https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX5mILnBJLA26?si=tfL8-88fS6y5w-i_I3OXNA' target='_blank' rel="noreferrer"> Amapiano</a></span>.
                            I love the <span className={styles.w3}>log drums</span><span className={styles.emoji3}>🪘</span>.
                        </p>
                    </Fade>
                    <Fade  duration={1900} bottom>
                        <div className={styles.about_time}>
                            <h2>Location: LAGOS</h2>
                            <h2>Time: {time}</h2>
                        </div>
                    </Fade>
                </div>
                <div className={styles.body_child}>
                    {/* SKILLS */}
                    <Fade  duration={1900} bottom>
                        <h1>MY SKILLS</h1>
                    </Fade>
                    <div className={styles.body_child_content}>
                        <Fade  duration={1900} bottom>
                            <p>I try my best day in, day out to learn new things and not just feel too
                                comfortable with what I have learnt in the past.✌🏾
                            </p>
                        </Fade>
                        {/* Languages, skills and libraries */}
                        <Fade  duration={1900} bottom>
                            <div className={styles.body_child_content_languages}>
                                <div className={styles.body_child_content_languages_list}>
                                    <div className={styles.body_child_content_languages_list_group}>
                                        <p>*HTML/CSS</p>
                                        <p>*Javascript</p>
                                        <p>*REACT JS</p>
                                    </div>
                                    <div className={styles.body_child_content_languages_list_group}>
                                        <p>*VUE JS(Just started)</p>
                                        <p>*Netlify(Hosting)</p>
                                        <p>*Vercel(Hosting)</p>
                                    </div>
                                    <div className={styles.body_child_content_languages_list_group}>
                                        <p>*NPM</p>
                                        <p>*Firebase</p>
                                        <p>*Redux</p>
                                    </div>
                                    <div className={styles.body_child_content_languages_list_group}>
                                        <p>*GIT</p>
                                        <p>*GITHUB</p>
                                        <p>*Contentful(CMS)</p>
                                    </div>
                                </div>
                                <div className={styles.body_child_content_languages_title}>
                                    <div>
                                        <p>-Languages, Skills & Libraries</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {/* Learning */}
                        <Fade  duration={1900} bottom>
                            <div className={styles.body_child_content_languages}>
                                <div className={styles.body_child_content_languages_list}>
                                    <div className={styles.body_child_content_languages_list_group}>
                                        <p>*UDEMY 🎥</p>
                                        <p>*YOUTUBE 🎥</p>
                                    </div>
                                    <div className={styles.body_child_content_languages_list_group}>
                                        <p>*W3SCHOOLS 📖 </p>
                                        <p>*REACTJS.org 📖 </p>
                                    </div>
                                    <div className={styles.body_child_content_languages_list_group}>
                                        <p>*TWITTER 😜</p>
                                        <p>*CODEPEN/ CodeSandBox 🧠 </p>
                                    </div>
                                </div>
                                <div className={styles.body_child_content_languages_title}>
                                    <div>
                                        <p>-Learning</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    {/* CERTIFICATES */}
                    <div className={styles.body_child}>
                        <Fade  duration={1900} bottom>
                            <h1>CERTIF ICATES</h1>
                        </Fade>
                        {/* <h1 className={styles.cerfificate}>CERTIFICATE(S)</h1> */}
                        <Fade  duration={1900} bottom>
                            <div className={styles.body_child_content}>
                                <p>Here are some of my cerificates...🎖</p>
                                <div className={styles.cert_wrapper}>
                                    <img src={certificate} alt='CERTIFICATES' />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className={styles.skills}>

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default About