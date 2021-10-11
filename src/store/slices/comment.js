import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from 'axios';

export const name = "comment";
const initialState = {
  comments: [],
};

/*
const getComments = createAsyncThunk(
    'getComments',
    async (thunkAPI) => {
      const res = await axios.get("https://storefrontmovie.azurewebsites.net/api/get-Movielist?");
    return res.data;
})
*/


const commentSlice = createSlice({
  name,
  initialState,
  reducers: {

    loadInitialComments: (state, action) => {
        state.comments = action.payload
    },
    addNewComment: (state, action) => {
        state.comments.push({
            id: 1,
            name: action.payload.name,
            comment: action.payload.comment
        })
        console.log(action.payload)
    }
  },
});

const getSlice = (state) => state[name] || {};

export const getCommentsInitial = createSelector(
  getSlice,
  (slice) => slice.comments
);

export const getTopCommenters = createSelector(
    getSlice,
    (slice) => {
        let commenterWithCount = [];
        //Gets an array of names
        let namesOfCommentors = slice.comments.reduce((a,d) => {
            if (a.indexOf(d.name) === -1) {
              a.push(d.name);
            }
            return a;
         }, []);
         //Check how many times each name appears
        namesOfCommentors.forEach( name => {
            let count = slice.comments.filter(x => x.name === name).length;
            console.log("It ran")
            commenterWithCount.push({
                commenterName: name,
                commentCount: count 
            })
            
        } )
        //Sort, reverse and slice
        commenterWithCount.sort((a, b) =>{
            return a.commentCount - b.commentCount;
          });
        let modifiedList = commenterWithCount.reverse().slice(0,3);
        return modifiedList;
    }
    
);

export const { loadInitialComments, addNewComment } = commentSlice.actions
export default commentSlice.reducer;