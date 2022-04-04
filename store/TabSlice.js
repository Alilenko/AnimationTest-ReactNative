import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    selectedTab: "Home"
}

const tabSlice = createSlice({
    name: 'tab',
    initialState,   
    reducers:{
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload
        }
    }
})

const {actions, reducer} = tabSlice;
export default reducer;
export const {
    setSelectedTab
} = actions