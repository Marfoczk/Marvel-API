import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListItem from '../../components/ListItem/ListItem'
import styles from './Home.module.scss'
import {GetMarvelList} from '../../actions/marvelActions'
import Loading from '../../components/Loading/Loading'

const Home = () => {

    const dispatch = useDispatch();
    const marvelList = useSelector(state => state.marvelList)

    useEffect(() => {
        dispatch(GetMarvelList(1))
    }, [])


    return (
        <div className={styles.wrapper}>
            <ul>
                {/* {dummyData.map((item,index) => (
                    <ListItem key={index} item={item}/>
                ))} */}
                {marvelList.loading ? <Loading /> : null}
                {marvelList.data.results ? marvelList.data.results.map((item,index) => (
                    <ListItem key={index} item={item}/>
                )) : null}
            </ul>
        </div>
    )
}

export default Home
