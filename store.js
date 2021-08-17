import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./src/redux/reducer/weatherReducer.js";

export const store = configureStore({
    reducer:{
       weather:WeatherReducer,
    },
})
