
import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Job from './components/Job.jsx'

function App() {
  return (
    <div className="App">
     <Title/>
     <div className="todo__wrapper">
     <Todo/> 
     <Job/> 
     <Todo/> 
     </div>
      
    </div>
  );
}

export default App;
