import { useState } from "react";
import Popover from "@mui/material/Popover";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { logout } from "../../../utilis/logout";
import { getFirstLetter } from "../../../utilis/getFirstWord";
import "./logout.scss";

const Logout = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className="user-logout-container" onClick={handleClick}>
        <div className="user-logout">
          <div className="username">{getFirstLetter(currentUser.name)}</div>
        </div>
        <div>
          <ArrowDropDownIcon className="drop-down-icon" />
        </div>
      </div>
      <Popover
        className="custom-pop"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div
          className="logout-action"
          onClick={() => {
            props.history.push("/");
            logout();
          }}
        >
          Logout
        </div>
      </Popover>
    </>
  );
};

export default Logout;
