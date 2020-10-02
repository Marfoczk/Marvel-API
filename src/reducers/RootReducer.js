import { combineReducers } from 'redux'
import MarvelListReducer from './MarvelListReducer'
import HeroReducer from './HeroReducer'

const RootReducer = combineReducers({
    marvelList: MarvelListReducer,
    heroData: HeroReducer
});

export default RootReducer