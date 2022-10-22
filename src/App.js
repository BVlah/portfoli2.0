import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Body></Body>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
