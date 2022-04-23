import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { required } from "../../validators/validators";
import { Input } from "../common/preloader/form-control/form-control";
import { logIn, logOut } from "../../redux/actions/actions"
import { Navigate } from "react-router";


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field placeholder="Email" name="email"
                component={Input} validate={[required]} />
            <Field placeholder="Password" name="password"
                component={Input} validate={[required]} />
            <Field name="rememberMe" component={Input}
                type="checkbox" /> Remember me
            <button type="submit">Submit</button>
            {error && <div>{error}</div>}
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "Login"
})(LoginForm)


const Login = ({ logIn, logOut, isAuth }) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        logIn(email, password, rememberMe);
    };

    const onLogOut = () => {
        logOut();
    }

    if (isAuth) {
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