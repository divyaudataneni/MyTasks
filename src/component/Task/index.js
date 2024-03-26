import './index.css'

const Task = props => {
  const {tasks} = props
  const {tag, task} = tasks
  return (
    <div className="task-cont">
      <h1 className="task-h1">{task}</h1>
      <p className="task-p">{tag}</p>
    </div>
  )
}

export default Task
