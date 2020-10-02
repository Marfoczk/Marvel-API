import React from 'react'
import Nav from './Nav/Nav'
import Input from './Input/Input'
import Logo from './Logo/Logo'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Input />
            <Nav />
            <motion.span 
                className={styles.line}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
            />
        </header>
    )
}

export default Header
