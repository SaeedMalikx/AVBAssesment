import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";
import { addNewComment } from "store/slices/comment";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: 5,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CommentModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name,setName] = useState('');
  const [comment,setComment] = useState('');
  const [open, setOpen] = React.useState(false);
  const isOpen = useSelector(getViewCommentsModalOpen);

  const handleClose = () => dispatch(closeCommentsModal());

  const addComment = () => {
    if (name.length > 2 && comment.length > 2) {
      dispatch(addNewComment({name: name, comment: comment}));
      handleClose();
    } else {
      setOpen(true)
    }
  };

  const handleNameChange = (e) =>{
       setName(e.target.value)
  }
  const handleCommentChange= (e) =>{
    setComment(e.target.value)
  }

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="Comment-Modal"
      aria-describedby="Users can enter comments"
    >
      <form className={classes.paper} noValidate autoComplete="off" >
        <TextField id="commenter-id" label="First Name" onChange={handleNameChange} value={name} />
        <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={4}
            defaultValue="Sample "
            variant="outlined"
            onChange={handleCommentChange}
            value={comment} 
          />
        <Button variant="contained" color="primary" onClick={addComment}>
          Submit Comment
        </Button>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        message="Enter Atleast 3 Letters Each"
      />
      
      </form>
      
    </Modal>
  );
};

export default CommentModal;
