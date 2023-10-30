import { createSlice } from "@reduxjs/toolkit"

export const StudentSlice = createSlice({
    name: 'students',
    initialState : {
        students: [
          { id: 1001, name: "ali", family: "rezaei" },
          { id: 1002, name: "reza", family: "alinia" },
          { id: 1003, name: "ahmad", family: "hassani" },
        ]
      }
})

export const students = (state) => state.students.students
export default StudentSlice.reducer;