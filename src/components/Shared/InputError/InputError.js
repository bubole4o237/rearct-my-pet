import './InputError.css';

const InputError = ({children}) => {

    if (!children) {
        return null;
    }

    return (
        <p className="input-error">{children}</p>
    );
};

export default InputError;
