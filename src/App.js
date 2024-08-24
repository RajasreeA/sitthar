import './App.css';
import PrimarySearchAppBar from './components/AppBar';
import MediaControlCard from './components/Card';
import DataGridDemo from './components/DataGrid';
import ListView from './components/ListView';
import CompactListView from './pages/CompactListView';
import SpacingGrid from './pages/GridView';

function App() {
  return (
    <div className="App">
      {/* <CompactListView/> */}
      {/* <PrimarySearchAppBar/> */}
      {/* <MediaControlCard/> */}
      <SpacingGrid/>
      {/* <DataGridDemo/> */}
      {/* <ListView/> */}
      {/* <DataGridDemo/> */}
      {/* <ListView/> */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
