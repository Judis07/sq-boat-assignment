import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";

import "./jobCard.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const JobCard = ({ title, description, location }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="job-card">
        <div className="title">{title}</div>

        <div className="description">{description}</div>

        <div className="job-actions">
          <div className="location">{location}</div>

          <div className="view-applicants" onClick={handleClickOpen}>
            View applications
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="card-modal"
      >
        <div className="modal-head">
          <div className="title">Applicants for this job</div>
          <div className="close-icon">
            <CloseIcon onClick={handleClose} />
          </div>
        </div>

        <div className="modal-content">
          <div className="num-applicants">0 applications</div>

          <div className="list-of-applicants">
            <div className="inner-content">
              <div className="description-icon">
                <DescriptionIcon fontSize="large" />
              </div>

              <div className="text">No applications available!</div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default JobCard;
