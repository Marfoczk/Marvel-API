import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Hero.module.scss'
import { motion } from 'framer-motion'
import { GetMarvelHero } from '../../actions/marvelActions'
import Loading from '../../components/Loading/Loading'

const Hero = ({ match }) => {

    const heroName = match.params.name;
    const dispatch = useDispatch();
    const heroData = useSelector(state => state.heroData)
    const hero = heroData.data[heroName]

    useEffect(() => {
        dispatch(GetMarvelHero(heroName))
    }, [heroName])

    return (
        <div className={styles.container}>
            {heroData.loading ? <Loading /> :
            heroData.error.length > 1 ? <p>{heroData.error}</p> : 
            
                <>
                <div className={styles.hero}>
                    {hero ? <h2>{hero[0].name}</h2> : null}
                    {hero && hero[0].description.length > 1 ? <p>{hero[0].description}</p> : <p>No description</p>}
                </div>

                {hero 
                    ? <motion.img
                            src={`${hero[0].thumbnail.path}/portrait_incredible.${hero[0].thumbnail.extension}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: .1 }}}
                            className={styles.img} 
                    /> 
                    : null}

                </>

            }
        </div>
    )
}

export default Hero
