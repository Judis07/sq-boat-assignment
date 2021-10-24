import { useEffect, useState } from "react";
import "./radio.scss";

const Radio = ({ name, btnClicked, getValuesFn, slots }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    // for validation check
    // console.log("slot date", btnClicked)
  }, [btnClicked]);

  const handleChange = (event) => {
    console.log("change", event.target.value);

    setValue(event.target.value);

    const data = {
      value: parseInt(event.target.value),
      id: name,
    };

    getValuesFn(data);
  };

  return (
    <>
      <div className="user-group mtop-2">
        <div className="user-text">I’m a*</div>

        <div className="user-types">
          {slots.map((slot, k) => {
            return (
              <div key={k} className="type">
                <input
                  type="radio"
                  name="user_screen"
                  id={slot.id}
                  className="user-input"
                  onChange={handleChange}
                  value={slot.value}
                  disabled={slot.isDisabled}
                />
                <label htmlFor={slot.id}>
                  <span>{slot.icon}</span>

                  <span>{slot.radioVal}</span>
                </label>
              </div>
            );
          })}
        </div>

        {btnClicked && !value && (
          <div className="mandatory-err">This field is mandatory</div>
        )}
      </div>
    </>
  );
};

export default Radio;
