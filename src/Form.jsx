import { useState, useEffect } from 'react'

function Form({ setTasks, tasks }) {
    const options = ["", "low", "medium", "high"]
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = { title, description, priority }
        console.log("🚀 ~ handleSubmit ~ newTask:", newTask)
        setTasks(tasks => [...tasks, newTask])
    }

    return (<form onSubmit={handleSubmit}>
        <label>Title</label> <input type="text" onChange={e => setTitle(e.target.value)}></input>
        <label>Description</label> <input type="text" onChange={e => setDescription(e.target.value)}></input>
        <select
            value={priority}
            onChange={e => setPriority(e.target.value)}>
            {options.map(o => (
                <option key={o} value={o}>{o}</option>
            ))}
        </select>
        <input type="submit" value="Add item"></input>
    </form>
    )
}

export default Form