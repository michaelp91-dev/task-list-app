//  Dependencies
import React, {useState} from 'react'

//  Styles


// Components
const AddTaskForm = ({tasks, onClick}) => {

  const initialTaskForm = {id: null, name: '', finishBy: '', category: ''}
  const [task, setTask] = useState(initialTaskForm)

  const handleInputChange = (e) => {
    const 
  }

  return (
    <form>
      <label>Task</label>
      <input type='text' onChange={(e) => setNewTask(e.target.value)}/>
      <label>Finish by:</label>
      <input type='text' onChange={(e) => setFinishBy(e.target.value)} />
      <label>Category</label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option disabled selected value>(select an option)</option>
        <option value='house'>House</option>
        <option value='errands'>Errands</option>
        <option value='vehicle'>Vehicle</option>
        <option value='work'>Work</option>
        <option value='other'>Other</option>
      </select>
      <input type='button' value='Enter Task' onClick={onClick}/>
    </form>
  )
}

export default AddTaskForm