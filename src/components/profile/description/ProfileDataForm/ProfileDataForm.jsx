import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../../../validators/validators";
import { Checkbox, Input, Textarea } from "../../../common/preloader/form-control/form-control";
import { Contacts } from "../description";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>Full Name : <Field placeholder="Full Name" name="fullName"
                component={Input} validate={[required]} /></div>
            <div>Looking For A Job: <Field placeholder="" name="lookingForAJob"
                component={Input} validate={[]} type="checkbox" /></div>
            <div>About me : <Field placeholder="About me" name="aboutMe"
                component={Textarea} validate={[]} /></div>
            <div>Professional Skills : <Field placeholder="Professional Skills" name="lookingForAJobDescription"
                component={Textarea} validate={[]} /></div>
            <div>Contacts: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: </b><Field placeholder="" name={"contacts." + key}
                        component={Input} validate={[]}></Field>
                </div>
            })}</div>
            <div><button>save</button></div>
            {error && <div>{error}</div>}

        </form>
    )
};

const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormRedux;