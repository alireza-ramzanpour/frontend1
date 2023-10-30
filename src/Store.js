import { configureStore } from "@reduxjs/toolkit";
import StudentsSlice from "./StudentsSlice";


export default configureStore({
    reducer: {
        students: StudentsSlice
    }
})