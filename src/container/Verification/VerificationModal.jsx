import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import "./Verification.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "5ch",
    },
  },
}));

const VerificationModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    //Focus Next
    if(element.nextSibling){
        element.nextSibling.focus()
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Generate OTP
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Phone Verification</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Enter the OTP you've received on 89201-6XXXX
          </DialogContentText>
          <div style={{ display: "flex" }}>
            {otp.map((data, index) => {
              return (
                

                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                  />
                  
              );
            })}
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Change Number
          </Button>

          <Button onClick={handleClose} color="primary">
            Re-send OTP
          </Button>
        </DialogActions>
        <div style={{marginBottom: '5px' , textAlign: 'center'}}>

        <Button onClick={()=> alert("Your OTP",otp)} variant="contained" color="primary">
          Verify Phone Number
        </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default VerificationModal;
