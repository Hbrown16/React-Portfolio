import NavBar from './components/Nav/NavBar'
import Home from './components/Home/home'
import About from './components/About/aboutme'
import Skills from './components/Skills/Skills'
import Youtube from './components/Youtube/youtube'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div className="App">
     < NavBar />
     < Home />
     < About />
     < Skills />
     < Youtube />
     < Contact />
    </div>
  );
}

export default App;
