import axios from 'axios'

export const pageLimit = 5; /* SHOW X CHARACTERS PER PAGE */

export const GetMarvelList = (page) => dispatch => {
    
    const APIKEY = 'e0ce8c8579acfe66a5d400efbb2e4d1b'
    const offset = (page * pageLimit) - pageLimit

    dispatch({
        type: "MARVEL_LIST_LOADING"
    })

    // axios.get(`https://gateway.marvel.com/v1/public/characters?series=354&&apikey=${APIKEY}`)
    axios.get(`https://gateway.marvel.com/v1/public/characters?series=354&limit=${pageLimit}&offset=${offset}&apikey=${APIKEY}`)
        .then(response => {
            dispatch({
                type: "MARVEL_LIST_SUCCES",
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: "MARVEL_LIST_FAILURE"
            })
        })
}


export const GetMarvelHero = (name) => dispatch => {
    
    const APIKEY = 'e0ce8c8579acfe66a5d400efbb2e4d1b'
    // const offset = (page * pageLimit) - pageLimit

    dispatch({
        type: "HERO_LOADING"
    })

    axios.get(`https://gateway.marvel.com/v1/public/characters?name=${name}&apikey=${APIKEY}`)
        .then(response => {
            if (response.data.data.total !== 0) {
            dispatch({
                type: "HERO_SUCCES",
                payload: response.data,
                heroName: name
            })} else {
                dispatch({
                    type: "HERO_FAILURE",
                    error: 'No results'
                })
            }
        })
        .catch(error => {
            dispatch({
                type: "HERO_FAILURE",
                error: error
            })
        })
}