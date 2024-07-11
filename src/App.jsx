import './App.css'
import { NavBar } from './components/layout/navbar';
import { Banner } from './components/layout/banner';
import Articles from './components/layout/articles';
import About from './components/layout/about';
import Footer from './components/layout/footer';

function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <Articles/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
