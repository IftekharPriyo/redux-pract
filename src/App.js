import './App.css';
import PatientReducer from './components/PatientReducer/PatientReducer';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientReducer></PatientReducer>
    </div>
  );
}

export default App;
