import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/todoSlice'

function AddTask() {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description.trim()) return
    dispatch(addTask(description.trim()))
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTask
