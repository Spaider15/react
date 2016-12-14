/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
import { connect } from 'react-redux'
import { logout, switchTable } from '../actions'
import UserInfo from '../components/UserInfo'

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout())
        },
        switchTable : (table) => {
            dispatch(switchTable(table))
        }
    }
};

const UserLogout = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo);

export default UserLogout

