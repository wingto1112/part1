import React, { useState } from 'react'

const Statistic = ({text, value}) => (<tr><td>{text}</td><td>{value}</td></tr>)

const Buttons = ({onClick,text}) => (<button onClick = {onClick}>{text}</button>)

const Statistics = ({good, neutral, bad}) => {
  const all = () => (good + neutral + bad)
  const average = () => ((good-bad)/all())
  const positive = () => (good/all()*100 +'%')
  if (all() === 0){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>       
          <Statistic text ="good" value = {good} />
          <Statistic text ="neutral" value = {neutral} />
          <Statistic text ="bad" value = {bad} />
          <Statistic text ="All" value = {all()}/>
          <Statistic text ="average" value = {average()}/>
          <Statistic text ="positive" value = {positive()}/>         
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => (setGood(good+1))
  const setToN = () => (setNeutral(neutral + 1))
  const setToBad = () => (setBad(bad + 1))


  return (
    <div>
      <h1>give feedback</h1>
      <Buttons onClick = {setToGood} text = 'good' /> 
      <Buttons onClick = {setToN} text = 'neutral' />
      <Buttons onClick = {setToBad} text = 'bad' />
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>    
  )
}

export default App
