import React, { useState, useRef, useEffect } from 'react'
import styles from './ListItem.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ListItem = ({item, index}) => {

    const [showImg, setShowImg] = useState(false);
    const cosRef = useRef(null)
    
    const imgSrc = `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`;

    const even = index % 2 === 0
    
    const handleMouseEnter = () => {
        setShowImg(true)
    }
    const handleMouseMove = (ev) => { 
        let cos = cosRef.current;
        cos.style.left = `${ev.pageX}px`;
        cos.style.top = `${ev.pageY}px`
    }
  
    const handleMouseLeave = () => {
        setShowImg(false)
    }

    const windowSize = window.innerWidth < 1024;
    const colorStyle = even ? `${styles.red}` : `${styles.blue}`
    
    return (
        <>  <motion.li 
                onMouseMove={!windowSize ? handleMouseMove : null} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                className={styles.item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
            
                    <span className={styles.border_left}></span>
                    <Link to={`/hero/${item.name}`} className={showImg ? `${styles.title} ${colorStyle}` : styles.title}>{item.name}</Link>
                    <span className={styles.border_right}></span>
                    {/* <div ref={cosRef} className="ha">a</div> */}
            {/* </Link> */}
            </motion.li>

            {showImg ? <motion.img
                src={imgSrc}
                ref={cosRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: .3 }}}
                className={styles.img} 
                /> : null}

        </>
    )
}


export default ListItem