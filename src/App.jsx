import { useState, useEffect } from 'react'
import Form from './Form'
import './App.css'

const tasksFromApi = [{ title: "wake up", description: "out of bed", priority: "low" },
{ title: "eat", description: "at table", priority: "medium" }]
function App() {
  const options = ["", "low", "medium", "high"]
  const [tasks, setTasks] = useState(tasksFromApi)
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedOption === '') {
      setTasks(tasksFromApi)
    }
    else {
      const filtered = tasksFromApi.filter(task => task.priority === selectedOption)
      setTasks(filtered)
    }
  }, [selectedOption])

  return (
    <>
      <div>
        <select
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}>
          {options.map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ul>
          {tasks.map(task => <li>{task.title} {task.description} {task.priority}</li>)}
        </ul>

        <Form setTasks={setTasks} tasks={tasks} />
      </div>
    </>
  )
}

export default App
