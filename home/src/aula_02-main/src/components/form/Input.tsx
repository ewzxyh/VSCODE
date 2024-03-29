import styles from "./Input.module.css";

const Input = ({
    type,
    text,
    name,
    placeholder,
    handleOnChange,
    value
}: {
    type?: string;
    text?: string;
    name?: string;
    placeholder?: string;
    handleOnChange?: any | null;
    value?: any | null;
}) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    );
};
export default Input;

