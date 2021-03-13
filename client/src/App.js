import logo from './logo.svg';
import './App.css';
import './workshop-styles.css'
import Navigation from './Components/Navigation'
import Aside from './Components/Aside'
import Main from './Components/Main'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <h1>Soooooooome Heading</h1>
      <Aside></Aside>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
