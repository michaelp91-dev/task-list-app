//  Dependencies
import React from 'react'

//	Styles


//	Component
const Table = ({tasks}) => {

	const TaskMap = tasks.map(i => {
		return (
			<tr>
				<td>{i.task}</td>
				<td>{i.finishBy}</td>
				<td>{i.category}</td>
				<td>
					<button>Edit</button>
					<button>Delete</button>
				</td>
			</tr>
		)
	})

	return (
		<table>
			<thead>
				<tr>
					<th>Task</th>
					<th>Finish by:</th>
					<th>Category</th>
					<th>Edit/Delete</th>
				</tr>
			</thead>
			<tbody>
				{tasks.length > 0 ? (
					tasks.map(task => {
						return (
							<tr key={task.id}>
								<td>{task.task}</td>
								<td>{task.finishBy}</td>
								<td>{task.category}</td>
								<td>
									<button>Edit</button>
									<button>Delete</button>
								</td>
							</tr>
						)
					})
				) : (
					<tr>
						<td colSpan={4}>No tasks</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default Table