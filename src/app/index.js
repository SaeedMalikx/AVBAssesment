import React, { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import "app/App.css";

import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentList from "components/CommentList";
import CommenterList from "components/CommenterList";

import { 
  getCommentsInitial, 
  loadInitialComments, 
  getTopCommenters 
} from "store/slices/comment";



const useStyles = makeStyles((theme) => ({
  heading: {
    justifyContent: "center",
    display: "flex",
    padding: '70px 10px 10px',
  }
}));

//Makes an api call to Azure and stores it in Redux
function App() {
  const classes = useStyles();
  const dispatch = useDispatch()

  //Comments are fetched in the base component using axios, kept simple as possible for this assesment
  const comments = useSelector(getCommentsInitial)
  const commentsTop = useSelector(getTopCommenters);
  

  useEffect(() => {
    axios.get("https://storefrontmovie.azurewebsites.net/api/get-Movielist?")
    .then(res => {
      dispatch(loadInitialComments(res.data))
    });
    
  }, []) 
  return (
    <>
      <Header />
      
      <CommentModal />

      <h3 className={classes.heading}>COMMENTS</h3>

      <CommentList commentProp={comments} />

      <h3 className={classes.heading}>TOP COMMENTERS</h3>

      <CommenterList commentProp={commentsTop}/>

      

    </>
  );
}

export default App;
