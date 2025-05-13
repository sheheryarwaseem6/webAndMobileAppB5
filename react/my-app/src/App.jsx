
import './App.css'
import Header from './components/Header/Header'
import image from './assets/image.jpg'

function App() {
  const click = (a)=>{
   console.log("clicked" , a);
  }
  const myName = "Sheheryar";
  return (
    <div>
    <Header/>
    <img src={image} alt="" />
    <h1>{myName}</h1>
    <button onClick={click}>Click me</button>
    <h1>footer</h1>
    </div>
  )
}

export default App
