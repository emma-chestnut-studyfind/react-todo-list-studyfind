import './App.css';
import { AddTask } from './components/AddTask';
import { Clear } from './components/Clear';
import { DisplaySettings } from './components/DisplaySettings';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="todo-grid">
        <Header />
        <AddTask />
        <DisplaySettings />
        <Clear />
        <TaskList />
      </div>
    </GlobalProvider>
  );
}

export default App;
