import '../form-input/form-input.styles.scss'

const FormInput = ({ label, ...otherInputProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherInputProps}></input>
      {label && (
        <label
          className={`${
            otherInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
