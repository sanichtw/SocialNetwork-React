import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const withAuthRedirect = (Component) => {
    class RedirectComp extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" />
            return <Component {...this.props} />
        }
    };

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComp);


    return ConnectedAuthRedirectComponent
};
