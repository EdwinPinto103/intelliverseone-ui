
import { useState, useEffect } from 'react'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('projects')) || []
    setProjects(stored)
  }, [])

  const addProject = () => {
    const newProject = `Proyecto #${projects.length + 1}`
    const updated = [...projects, newProject]
    setProjects(updated)
    localStorage.setItem('projects', JSON.stringify(updated))
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>IntelliVerseOne</h1>
      <button onClick={addProject}>Nuevo Proyecto</button>
      <div style={{ marginTop: '2rem' }}>
        {projects.map((p, i) => (
          <div key={i} style={{ padding: '1rem', border: '1px solid #ccc', marginBottom: '1rem' }}>{p}</div>
        ))}
      </div>
    </div>
  )
}

export default App
