import React from 'react'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Logo = () => {
    return (
        <Link className={styles.logo} to="/">
            <motion.h3
                initial={{y: `-100%`, opacity: 0}}
                animate={{y: 0, opacity: 1}}
            >
                Marvel Heroes
            </motion.h3>
        </Link>
    )
}

export default Logo
