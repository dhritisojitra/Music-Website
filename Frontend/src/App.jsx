
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
const buttonClicker = async()=> {
 try{
  const response = await axios.post("http://localhost:5000/message", {message: "hello"})
  console.log(response.data)
 }
 catch(error){
  console.error(error)
 }
}
function App(){
  return (
    <div>
     <Navbar/>
        <h1> Welcome to the Music Website </h1>
        <button onClick={buttonClicker}>Click me</button>
    </div>
  );
};

export default App;
