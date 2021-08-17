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
      
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { setWeather, decrement, incrementByAmount } = weatherSlice.actions

export default weatherSlice.reducer
