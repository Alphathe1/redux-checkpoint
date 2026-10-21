import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    filter: 'all', // 'all' | 'done' | 'notDone'
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), description: action.payload, isDone: false })
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload)
      if (task) task.isDone = !task.isDone
    },
    editTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id)
      if (task) task.description = action.payload.description
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTask, editTask, setFilter } = todoSlice.actions
export default todoSlice.reducer
