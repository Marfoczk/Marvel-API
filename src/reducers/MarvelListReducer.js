
const initialState = {
    loading: false,
    data: [],
    // data: dummyData,
    error: '',
    count: 0,
}

const MarvelListReducer = (state = initialState, action) => {

    switch(action.type) {
        case "MARVEL_LIST_LOADING":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "MARVEL_LIST_SUCCES":
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                count: action.payload.data.total,
                error: ''
            }
        case "MARVEL_LIST_FAILURE":
            return {
                ...state,
                loading: false,
                error: 'error'
            }
        default:
            return state;
    }
}


export default MarvelListReducer