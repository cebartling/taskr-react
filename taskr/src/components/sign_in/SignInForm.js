import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

class SignInForm extends MobxReactForm {

    onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
    }

    onError(form) {
        // get all form errors
        console.log('All form errors', form.errors());
        // invalidate the form with a custom error message
        form.invalidate('This is a generic error message!');
    }
}

const plugins = {dvr: validatorjs};
const fields = [
    {
        name: 'email',
        label: 'Email',
        rules: 'required|email|string|between:5,25',
    },
    {
        name: 'password',
        label: 'Password',
        rules: 'required|string|between:5,25',
    }
];

export default new SignInForm({fields, plugins});