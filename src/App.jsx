import { useState, useEffect } from 'react'
import Form from './Form'
import './App.css'
import Select, { } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const tasksFromApi = [{ title: "wake up", description: "out of bed", priority: "low" },
{ title: "eat", description: "at table", priority: "medium" }]
function App() {
  const options = ["", "low", "medium", "high"]
  const [tasks, setTasks] = useState(tasksFromApi)
  const [filteredTasks, setFilteredTasks] = useState(tasksFromApi)
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedOption === '') {
      setFilteredTasks(tasks)
    }
    else {
      const filtered = tasks.filter(task => task.priority === selectedOption)
      setFilteredTasks(filtered)
    }
  }, [selectedOption, tasks])

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={123}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}

        {selectedOption}
        <Select
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}>
          {options.map(o => (
            <MenuItem key={o} value={o}>{o}</MenuItem>
          ))}
        </Select>
        <ul>
          {filteredTasks.map(task => <li>{task.title} {task.description} {task.priority}</li>)}
        </ul>

        <Form setTasks={setTasks} tasks={tasks} />
      </div>
    </>
  )
}

export default App
