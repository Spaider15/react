/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
export default (state = {}, action) => {
    switch (action.type){
        case 'LOGIN':
           return action.user;
        case 'LOGOUT':
            return {};
        default :
            return state;
    }
}