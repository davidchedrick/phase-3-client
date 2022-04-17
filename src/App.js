
import './App.css';
import Header from './Header';
import Nav from './Nav';
import StatsArea from './StatsArea';
import TaskArea from './TaskArea';

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <TaskArea />
        <StatsArea />
    </div>
  );
}

export default App;
