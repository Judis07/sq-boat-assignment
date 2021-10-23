import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Input = (props) => {
  const {
    name,
    label,
    placeholder,
    type,
    compClass,
    btnClicked,
    required,
    getValuesFn,
    isTextArea,
  } = props;

  const [value, setValue] = useState("");

  useEffect(() => {
    // for validation check
  }, [btnClicked, props.value]);

  const handleChange = (event) => {
    setValue(event.target.value);

    const setDataFn = () => {
      const data = {
        value: event.target.value,
        id: name,
      };

      getValuesFn(data);
    };

    setDataFn();
  };

  return (
    <div className={`${compClass} form-input`}>
      <div className="label-container">
        <label className="form-label">{label}</label>

        {props?.extraLabel && (
          <Link to={props.extraLabel.link} className="extra-label">
            {props.extraLabel.name}
          </Link>
        )}
      </div>

      {isTextArea ? (
        <textarea
          rows="7"
          type={type}
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          value={value}
          className={btnClicked && required && !value ? "input-err" : ""}
        />
      ) : (
        <input
          type={type}
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          value={value}
          className={btnClicked && required && !value ? "input-err" : ""}
        />
      )}

      {btnClicked && required && !value && (
        <div className="mandatory-err">This field is mandatory</div>
      )}
    </div>
  );
};

export default Input;
