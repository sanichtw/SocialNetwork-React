import { connect } from 'react-redux';
import Nav from './nav';

const mapStateToProps = (state) => {
    return {
        friendsData: state.navPage
    }
};

const mapDispatchToProps = () => {
    return {

    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer;