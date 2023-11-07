import styles from "./Select.module.css";

const Select = ({
    text,
    name,
    handleOnChange,
    options,
    value
}: {
    text?: string;
    name?: string;
    handleOnChange?: any | null;
    options?: any;
    value?: any | null;
}) => {
    return (
        <div>
            <div className={styles.form_control}>
                <label htmlFor={name}>{text}:</label>
                <select
                    name={name}
                    id={name}
                    onChange={handleOnChange}
                    value={value || ""}>
                    <option value="">Selecione uma opção</option>
                    {options.map((option: any) => (
                        <option
                            key={option.id}
                            value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Select;