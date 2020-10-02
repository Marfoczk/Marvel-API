import React from 'react'
import { withRouter, useHistory} from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux'
import { pageLimit } from '../../actions/marvelActions'
import styles from './PagePagination.module.scss'

const PagePagination = () => {

    const marvelList = useSelector(state => state.marvelList)

    let history = useHistory();
    let pageNumber = Number(history.location.pathname.substring(1))
    let path = history.location.pathname
    const even = pageNumber % 2 === 0;

    return (
        <>
            {path === "/about" || path.includes('hero') ? null :
                <Pagination
                className={styles.pagination}
                color={even ? `secondary` : `primary`}
                page={pageNumber}
                count={Math.ceil(marvelList.count / pageLimit)} 
                onChange={(event, value) => {history.push(`${value}`)}}
                />
            }
        </>
    )
}

export default withRouter(PagePagination)
