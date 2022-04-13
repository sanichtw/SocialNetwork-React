import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { authAPI } from "../../api/api";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Login" name="email" component="input" />
            <Field placeholder="Password" name="password" component="input" />
            <Field placeholder="Password" name="rememberMe" component="input" type="checkbox" /> Remember me
            <button type="submit">Submit</button>
            <button onClick={props.logOut}>Log Out</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "Login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        authAPI.logIn({ email: formData.email, password: formData.password })
            .then(response => console.log(response))
    };

    const onLogOut = () => {
        authAPI.logOut()
            .then(response => console.log(response))
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} logOut={onLogOut} />
    </div>

};

export default Login;