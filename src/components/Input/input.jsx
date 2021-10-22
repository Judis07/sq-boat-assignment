import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Input = (props) => {
  const { name, label, placeholder, type, btnClicked, getValuesFn } = props;

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
    <div className="form-input">
      <div className="label-container">
        <label className="form-label">{label}</label>

        {props?.extraLabel && (
          <Link to={props.extraLabel.link} className="extra-label">
            {props.extraLabel.name}
          </Link>
        )}
      </div>
      <input
        type={type}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        value={value}
        className={btnClicked && !value ? "input-err" : ""}
      />

      {btnClicked && !value && (
        <div className="mandatory-err">This field is mandatory</div>
      )}
    </div>
  );
};

export default Input;
