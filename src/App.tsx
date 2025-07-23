import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import ToDoApp from './components/ToDoList';

// List of problems/tasks
const problems = [
  { id: 'ToDoApp', title: 'To Do App' },
  { id: 'Problem2', title: 'Problem 2' },
  // Add more problems here
]

function Problem2() {
  return <div><h2>Problem 2</h2><p>This is Problem 2.</p></div>
}

function ProblemsList() {
  return (
    <div>
      <h1>Problems List</h1>
      <ul>
        {problems.map((p) => (
          <li key={p.id}>
            <Link to={`/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProblemsList />} />
        <Route path="/ToDoApp" element={<ToDoApp />} />
        <Route path="/Problem2" element={<Problem2 />} />
        {/* Add more routes for other problems */}
      </Routes>
    </BrowserRouter>
  )
}

export default App