import { createSlice } from "@reduxjs/toolkit";
import getLoginClient from "../../apiAuth/loggedInClient";
import { showMessage, hideMessage } from "react-native-flash-message";


export const propertySlice = createSlice({
    name: 'property',
    initialState: [],
    reducers: {
        update(state, action){
            const {properties} =  action.payload;
            return [
                ...state,
                ...properties
            ];
        },
    }
});

export const {update} = propertySlice.actions;

export default propertySlice.reducer;

export const updateAsync = area => async dispatch => {
    const client = await getLoginClient();
    try{
        const {data: {data, msg}, status} = await client.get(`properties/${area}`);
        
        if (status === 201 || status === 200 ){
            dispatch(update({properties: data}));
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