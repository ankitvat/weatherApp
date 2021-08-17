import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  description:[],
  temp:[],
  city:'',
  day:[],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state,action) => {
      
      state.description = action.payload.desc;
      state.temp = action.payload.temps;
      state.city = action.payload.city;
      state.day = action.payload.days;
    },
    
    
  },
})

export const { setWeather} = weatherSlice.actions

export default weatherSlice.reducer
