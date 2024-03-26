import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

import Tag from './component/Tag'
import Task from './component/Task'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here

class App extends Component {
  state = {inputText: '', tagName: tagsList[0].optionId, tasksList: []}

  onEnterInput = event => {
    this.setState({inputText: event.target.value})
  }

  onChnagetag = event => {
    this.setState({tagName: event.target.value})
  }

  onAddTask = () => {
    const {inputText, tagName, tasksList} = this.state
    const newTasks = {
      id: uuidv4(),
      task: inputText,
      tag: tagName,
    }
    this.setState({
      tasksList: [...tasksList, newTasks],
      inputText: '',
      tagName: tagsList[0].optionId,
    })
  }

  onSelectTags = optionId => {
    const {tasksList} = this.state
    const updatedTasks = tasksList.filter(each => each.tag === optionId)
    console.log(updatedTasks)
    this.setState({tasksList: updatedTasks})
  }

  render() {
    const {inputText, tagName, tasksList} = this.state

    return (
      <div className="bg-cont">
        <div className="tasks-cont">
          <h1>Create a task</h1>
          <label htmlFor="inputtext">Task</label>
          <input
            type="text"
            placeholder="Enter the task here"
            id="inputText"
            className="inputText"
            onChange={this.onEnterInput}
            value={inputText}
          />
          <label htmlFor="tags">Tags</label>
          <select
            id="tags"
            className="tags"
            onChange={this.onChnagetag}
            value={tagName}
          >
            {tagsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
          <button type="button" className="btn" onClick={this.onAddTask}>
            Add Task
          </button>
        </div>
        <div className="display-cont">
          <h1>Tags</h1>
          <ul>
            {tagsList.map(each => (
              <Tag
                tag={each}
                key={each.optionId}
                tagsSelected={this.onSelectTags}
              />
            ))}
          </ul>
          <h1>Tasks</h1>
          {tasksList.length !== 0 ? (
            <ul>
              {tasksList.map(each => (
                <Task key={each.id} tasks={each} />
              ))}
            </ul>
          ) : (
            <h1>No Tasks Added Yet</h1>
          )}
        </div>
      </div>
    )
  }
}

export default App
