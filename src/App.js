import logo from './logo.svg';
import './App.css';
import {Brand,Navbar,CTA,Feature,Article} from './components'
import {Features,Blog,Footer,GPT3,Header,Possibility} from './containers'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <GPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
