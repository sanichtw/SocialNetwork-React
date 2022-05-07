import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { required } from "../../validators/validators";
import { Input } from "../common/preloader/form-control/form-control";
import { logIn, logOut } from "../../redux/actions/actions"
import { Navigate } from "react-router";


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && <Field placeholder="Enter symblols from captcha" name="captchaUrl"
                component={Input} validate={[required]} />}
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "Login"
})(LoginForm)


const Login = ({ logIn, logOut, isAuth, captchaUrl }) => {
    const onSubmit = (formData) => {
        debugger
        const { email, password, rememberMe, captchaUrl } = formData;
        logIn(email, password, rememberMe, captchaUrl);

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
        <LoginReduxForm onSubmit={onSubmit} logOut={onLogOut} captchaUrl={captchaUrl} />
    </div>

};
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.url
    }
}

export default connect(mapStateToProps, { logIn, logOut })(Login);