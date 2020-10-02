const initialState = {
    loading: false,
    data: [],
    error: '',
}

const HeroReducer = (state = initialState, action) => {

    switch(action.type) {
        case "HERO_LOADING":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "HERO_SUCCES":
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.heroName]: action.payload.data.results
                },
                error: ''
            }
        case "HERO_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}


export default HeroReducer