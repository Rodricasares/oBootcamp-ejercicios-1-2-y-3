import logo from './logo.svg';
import './App.css';

import TaskListComponent from './components/container/task_list';
import ComponetA from './components/container/componetA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Curso React
          {/*<Greeting
          name={"Paco" }/> 
          <GreetingF
          name="Paco"  />*/}
          {/*Componente de listado de tareas*/}
          {/*<TaskListComponent />*/}
          <ComponetA />
        </p>
      </header>
    </div>
  );
}

export default App;
