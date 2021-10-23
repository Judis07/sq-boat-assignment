import { useState } from "react";
import Popover from "@mui/material/Popover";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { logout } from "../../../utilis/logout";
import "./logout.scss";

const Logout = () => {
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
          <div className="username">A</div>
        </div>
        <div>
          <ArrowDropDownIcon />
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
        <div className="logout-action" onClick={() => logout()}>
          Logout
        </div>
      </Popover>
    </>
  );
};

export default Logout;
