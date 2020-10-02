import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'
import { motion } from 'framer-motion'

const Nav = () => {
    return (
        <motion.nav 
            className={styles.nav}
            initial={{ y: `-100%`, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .4}}
        >
                <NavLink activeStyle={{color: "#F0141E"}} className={styles.link} to="/1" exact>Home</NavLink>
                <NavLink activeStyle={{color: "#F0141E"}} className={styles.link} to="/about">About</NavLink>
        </motion.nav>
    )
}

export default Nav