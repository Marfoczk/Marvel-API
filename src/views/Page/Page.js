import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMarvelList } from '../../actions/marvelActions'
import styles from './Page.module.scss'
import ListItem from '../../components/ListItem/ListItem'
import Loading from '../../components/Loading/Loading'

const Test = ({match, ...rest}) => {

    const dispatch = useDispatch();
    const marvelList = useSelector(state => state.marvelList)

    const { params: {data}} = match;


    useEffect(() => {
        dispatch(GetMarvelList(data))
    },[data])

    return (
        <div className={styles.wrapper}>
            {marvelList.loading ? <Loading /> : null}
            {marvelList.data.results ? marvelList.data.results.map((item,index) => (
                    // <Link to={`/hero/${item.name}`}><ListItem key={index} item={item}/></Link>
                    <ListItem key={index} item={item} index={index}/>
                )) : null}
        </div>
    )
}

export default Test