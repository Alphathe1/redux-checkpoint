import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/todoSlice'
import Task from './Task'

function ListTask() {
  const { tasks, filter } = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone
    if (filter === 'notDone') return !task.isDone
    return true
  })

  return (
    <div>
      <div className="filters">
        <button onClick={() => dispatch(setFilter('all'))} disabled={filter === 'all'}>All</button>
        <button onClick={() => dispatch(setFilter('done'))} disabled={filter === 'done'}>Done</button>
        <button onClick={() => dispatch(setFilter('notDone'))} disabled={filter === 'notDone'}>Not done</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}

export default ListTask
