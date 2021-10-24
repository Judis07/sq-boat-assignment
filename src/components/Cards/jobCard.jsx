import React, { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

import "./jobCard.scss";
import { getToken } from "../../utilis/store";
import ApplicantCard from "./applicantCard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const JobCard = ({ id, title, description, location }) => {
  const [open, setOpen] = useState(false);

  const [applicants, setApplicants] = useState(null);

  const handleClickOpen = async (jobID) => {
    setOpen(true);

    const userToken = getToken();

    const API_URL = `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobID}/candidates`;

    try {
      const res = await axios.get(API_URL, {
        headers: {
          Authorization: userToken,
          "content-type": "application/json",
        },
      });

      const { data } = res.data;

      setApplicants(data);
    } catch (err) {
      console.log("err", err);
    }
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
          <div className="location">
            <div className="location-icon">
              <RoomOutlinedIcon />
            </div>
            <div className="text">{location}</div>
          </div>

          <div className="view-applicants" onClick={() => handleClickOpen(id)}>
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
          <div className="num-applicants">
            {" "}
            {applicants
              ? `Total ${applicants.length} applications`
              : "0 applications"}{" "}
          </div>

          {applicants ? (
            <div className="list-of-applicants">
              {applicants.map((info) => (
                <ApplicantCard key={info.id} {...info} />
              ))}
            </div>
          ) : (
            <div className="list-of-applicants center-content">
              <div className="inner-content">
                <div className="description-icon">
                  <DescriptionIcon fontSize="large" />
                </div>

                <div className="text">No applications available!</div>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default JobCard;
