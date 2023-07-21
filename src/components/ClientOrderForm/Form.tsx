interface FormProps {
    value: string
    error: string
    disabled: string
    onChange: () => void,
    onSubmit: () => void
}

const Form: React.FC<FormProps> = ({
    value,
    error,
    disabled,
    onChange,
    onSubmit
}) => {

    return <>
        <div >
            <input {value.name}></input>
            <input {value.content}></input>
        </div>

    </>
}