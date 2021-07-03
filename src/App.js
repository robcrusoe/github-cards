import './App.css';
import List from './components/List/List';

const App = (props) => {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <List />
    </div>
  );
}

export default App;
