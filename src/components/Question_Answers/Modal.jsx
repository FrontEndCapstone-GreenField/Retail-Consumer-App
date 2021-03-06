//___________Original class for modal
// import React, { Component } from 'react'
// import Button from '@material-ui/core/Button';
// import {Typography,SimpleDialog} from '@material-ui/core';

// class Modals extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }
    
//     render() {
//     //  const reactState = useSelector(state => state)
//         return (
// <div>
//           <Button variant="outlined">Add A Question +</Button>
// <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
// <br />
// <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//   Open simple dialog
// </Button>
// <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
// </div>
// //  {/* </div>  */}
       
//         )
//     }
// }
// export default Modals;
//_______________________________________________________________
//UI Material modal(-dialog)
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//return a function called formDialog
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>Add A Question + </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a question</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            
            id="name"
            label=""
            type="email"
            fullWidth 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
           Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}