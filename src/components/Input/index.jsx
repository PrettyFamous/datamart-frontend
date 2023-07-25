import "./Input.scss";

const Input = ({
  label,
  text,
  img,
  disabled,
  alt,
  onChange,
  errorMessage,
  secure,
}) => {
  return (
    <div className="container">
      <label className="label">{label}</label>
      <input
        className="input"
        type={secure ? "password" : "text"}
        placeholder={text}
        disabled={disabled}
        onChange={onChange}
      />
      {img && <img className="image" src={img} alt={alt} />}
      <p className="invisible error__message">{errorMessage}</p>
    </div>
  );
};
export default Input;
