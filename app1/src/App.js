import Child1 from './Child1';
import Footer from './Footer';
import Header from './Header';

function App() {
  const data = "Data passed from Parent Component";
  return (
    <div className="App" style={{textAlign: 'center'}}>
      {/* <Header  a="First" b="Second" />
        <h1>Content Data</h1>
      <Footer /> */}
    <Child1 parentData = {data}/>
    </div>
  );
}

export default App;
