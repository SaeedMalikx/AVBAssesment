import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: theme.palette.primary.main,
  },
  commentList: {
    padding: '10px 30px 10px',
  }
}));

const CommentList = (props) => {
  const classes = useStyles();

  const comments = props.commentProp;
  //Simple check to see if props contain comments and display backup text
  return (
    <div>
      {comments.length > 1
        ? <List dense  className={classes.commentList}>
        
        {comments.map((value) => {
          return (
            <ListItem key={value.id} button>
              <ListItemAvatar>
              <Avatar className={classes.orange}>{value.name.charAt(0).toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={value.name}  />
              <ListItemText  primary={value.comment} />
            </ListItem>
          );
        })}
        </List>
        : <p>Unable to load comments from api</p>
      }
    </div>
  );
};

export default CommentList;
