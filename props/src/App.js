import './App.css';
import Child1 from './Child1';
import { createContext } from 'react';

// Create, provider, consumer

const pdata = createContext();
function App() {
  const data = "ParentData"
  return (
    <div className="App">
      <pdata.Provider value={data}>
        <Child1 />
      </pdata.Provider>
    </div>
  );
}

export default App;
export {pdata}