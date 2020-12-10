import { createSlice } from "@reduxjs/toolkit";
import getLoginClient from "../../apiAuth/loggedInClient";
import { showMessage, hideMessage } from "react-native-flash-message";
import { news } from "../../constants";


export const newsSlice = createSlice({
    name: 'news',
    initialState: news,
    reducers: {
        update(state, action){
            const {blogs} =  action.payload;
            return [
                ...state,
                ...blogs
            ];
        },
    }
});

export const {update} = newsSlice.actions;

export default newsSlice.reducer;

export const updateAsync = area => async dispatch => {
    const client = await getLoginClient();
    try{
        const {data: {data, msg}, status} = await client.get(`blogs/`);
        
        if (status === 201 || status === 200 ){
            dispatch(update({blogs: data}));
            return;
        }
        showMessage({
            type: 'danger',
            message: msg,
            icon: 'auto',
            duration: 3000,
        });
        return
    }catch(err){
        console.log(err)
        showMessage({
            type: 'danger',
            message: err.message,
            icon: 'auto',
            duration: 3000,
        })
    }
}