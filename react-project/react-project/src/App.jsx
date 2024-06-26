import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step"
        />

        <Todo
          title="Finish Interview Section"
          paragraph="Finish every interview questions in the next 6 weeks."
        />

        <Todo title="Land a $100k Job" paragraph="Apply to 100 jobs." />
      </div>
     { /*<Modal title="Are you sure you want to delete?"/>*/}
     
    </div>
  );
}

export default App;
