import { connect } from 'react-redux';
import Nav from './nav';

const mapStateToProps = (state) => {
    return {
        friendsData: state.navPage
    }
};


const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer;