//  Dependencies
import React, {useState} from 'react'
import styled from 'styled-components'
import AddTaskForm from '../forms/AddTaskForm'
import Table from '../tables/Table'

//  Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
`

//  Components
const TaskApp = () => {

  const TaskData = [
    {id: 1, task: 'Take out trash', finishBy: 'Today', category: 'House'},
    {id: 2, task: 'Clean cars', finishBy: 'Friday', category: 'Vehicles'}
  ]

  const [tasks, setTasks] = useState(TaskData)

  const addTask = (task) => {
    task.id = tasks.length + 1
    setTasks(([...tasks, task]))
  }

  return (
    <Wrapper>
      <Table tasks={TaskData} />
      <AddTaskForm />
    </Wrapper>
  )
}

export default TaskApp