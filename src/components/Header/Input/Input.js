import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Input.module.scss'
import { motion } from 'framer-motion'

const Input = () => {

    let history = useHistory();

    const [value, setValue] = useState('')

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        setValue('')
        history.push(`/hero/${value}`)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <motion.input 
                className={styles.input} 
                type="text" 
                placeholder="e.g. spider-man" 
                value={value} 
                onChange={handleOnChange}
                initial={{ y: `-100%`, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2}}
            />
        </form>
    )
}

export default Input
