import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

const INITIAL_VALUES ={
  initialInvestment:10000,
  annualInvestment:999,
  expectedReturn:6,
  duration:10
}


function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUES)
  const handleChange =(inputIdentifier,newValue) =>{
    setUserInput(prevInput =>{
        const updatedInput ={...prevInput,[inputIdentifier]: +newValue}
        return updatedInput;
    })
  }
  
  const inputIsValid = userInput.duration >=1;
  return (
    <>
    <Header/>
    <UserInput handleChange={handleChange} userInput={userInput}/>
    {inputIsValid ? <Result input={userInput}/> : <p className="center">Please enter duration greater than 0</p>}
    </>
  )
}

export default App
