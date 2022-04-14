import styles from './form-control.module.css';


export const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div className={styles.formControl + " " + (hasError ? "error" : "")}>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props}></textarea></FormControl>
};

export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props}></input></FormControl>
};