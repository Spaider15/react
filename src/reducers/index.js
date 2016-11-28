/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
import { combineReducers } from 'redux'
import user from './auth'

const stkApp = combineReducers({
    user
});

export default stkApp