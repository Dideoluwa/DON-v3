// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import styles from './Footer.module.css'


// function Footer() {
//     let [views, setViews] = useState([])
//     useEffect(()=>{
//         let url = `https://api.countapi.xyz/hit/don-v3.vercel.app`
//         axios.get(url).then((res) =>{
//            setViews(res.data.value)
//         })
//     }, [])
//     return (
//         <div className={styles.body}>
//            <div className={styles.body_child}>
//                <h2>This page has been visited {views} times.</h2>
//            </div>
//         </div>
//     )
// }

// export default Footer