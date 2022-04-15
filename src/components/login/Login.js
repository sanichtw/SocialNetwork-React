import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { authAPI } from "../../api/api";
import { required } from "../../validators/validators";
import { Input } from "../common/preloader/form-control/form-control";
import { logIn, logOut } from "../../redux/actions/actions"
import { Navigate } from "react-router";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Email" name="email"
                component={Input} validate={[required]} />
            <Field placeholder="Password" name="password"
                component={Input} validate={[required]} />
            <Field name="rememberMe" component={Input}
                type="checkbox" /> Remember me
            <button type="submit">Submit</button>
            {props.error && <div>{props.error}</div>}

            {/* <button onClick={props.logOut}>Log Out</button> */}
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "Login"
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        props.logIn(email, password, rememberMe);
    };

    const onLogOut = () => {
        props.logOut();
    }

    if (props.isAuth) {
        return (
            <Navigate to="/profile" />
        )
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} logOut={onLogOut} />
    </div>

};
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logIn, logOut })(Login);