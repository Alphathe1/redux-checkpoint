import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask, toggleTask } from '../redux/todoSlice'

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState(task.description)
  const dispatch = useDispatch()

  const handleSave = () => {
    if (!description.trim()) return
    dispatch(editTask({ id: task.id, description: description.trim() }))
    setIsEditing(false)
  }

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={() => dispatch(toggleTask(task.id))} />
      {isEditing ? (
        <>
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  )
}

export default Task
