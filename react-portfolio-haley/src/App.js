import NavBar from './components/Nav/NavBar'
import Home from './components/Home/home'
import About from './components/About/aboutme'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div className="App">
     < NavBar />
     < Home />
     < About />
     < Skills />
     < Projects/>
     < Contact />
    </div>
  );
}

export default App;
