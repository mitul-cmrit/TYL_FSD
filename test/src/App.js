import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div class="content-block"><h2>Section 1</h2><p>Some long content goes here...</p></div>
        <div class="content-block"><h2>Section 2</h2><p>More scrollable content...</p></div>
        <div class="content-block"><h2>Section 3</h2><p>Keep scrolling down...</p></div>
        <div class="content-block"><h2>Section 4</h2><p>More and more content...</p></div>
        <div class="content-block"><h2>Section 5</h2><p>Almost there...</p></div>
        <div class="content-block"><h2>Section 6</h2><p>Footer stays fixed at bottom!</p></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
