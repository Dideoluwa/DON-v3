import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Lists from './PortfolioList'
import styles from './ProjectsInfo.module.css'

function ProjectsInfo() {
    const { projectId } = useParams()
    const project = Lists.find((list) => String(list.title) === projectId)
    return (
        <div key={project.id} className={styles.body}>
            <NavBar />
            <div className={styles.imgWrapper}>
                <img src={project.img} alt={project.title} />
            </div>
            <div className={styles.title}>
                <h1>{project.title}</h1>
            </div>
            <div className={styles.description}>
                <h1>{project.description}</h1>
            </div>
            <div className={styles.buttons}>
                <div>
                    <button><a href={project.url} target='_blank' rel="noreferrer">Live site</a></button>
                </div>
                <div>
                    <Link to='/portfolio'>
                        <button>Go back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectsInfo