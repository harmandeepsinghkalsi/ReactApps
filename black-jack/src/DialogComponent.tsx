import { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import React from "react";

interface Dialog {
    openDialog: boolean,
    message: string,
    onCloseDialog: Function,
}

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

export const DialogComponent: React.FC<Dialog> = (props) => {

  
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button> */}
        <Dialog
          open={props.openDialog}
          keepMounted
        //   onClose={}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Message....."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
             {props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={e => props.onCloseDialog()} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }