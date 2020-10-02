import React from 'react'
import styles from './About.module.scss'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div 
            className={styles.container}
            initial={{ opacity:0 }}
            animate={{ opacity: 1}}
        >
            <h1>About</h1>
            <span className={styles.description}>The Marvel Comics API is a RESTful service which provides methods for accessing specific resources at canonical URLs and for searching and filtering sets of resources by various criteria. All representations are encoded as JSON objects.</span>
            <a href="https://developer.marvel.com/">https://developer.marvel.com/</a>
        </motion.div>
    )
}

export default About
