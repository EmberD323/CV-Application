import { useState } from 'react'
import './style/App.css'
import {PersonalForm,PersonalDisplay} from './components/Personal.jsx'


function App() {
  const[name,setName] = useState("Ember Doyle");
  const[email,setEmail] = useState("doyle.ember@gmail.com");
  const[phone,setPhone] = useState("08525779");
  function handleNameChange(e){
    setName(e.target.value);
  } 
  function handleEmailChange(e){
    setEmail(e.target.value);
  } 
  function handlePhoneChange(e){
    setPhone(e.target.value);
  } 

  return (
    <>
    <h1>CV Generator</h1>
    <div className="container">
      <div className ="formContainer">
        <div className='personal'>
              <h3 className="heading">Personal Information</h3>
              <form onSubmit={e => e.preventDefault()}>
                  <div className="name">
                      <label htmlFor="name">Name</label>
                      <br></br>
                      <input type="text" id="name" placeholder="Name" value={name} onChange={handleNameChange}/>
                  </div>
                  <div className="email">
                      <label htmlFor="email">E-mail</label>
                      <br></br>
                      <input type="email" id="email"placeholder="E-mail@email.com" value={email} onChange={handleEmailChange}/>
                  </div>
                  <div className="phone">
                      <label htmlFor="phone">Phone Number</label>
                      <br></br>
                      <input type="number" id="phone"placeholder="000-0000000" value={phone} onChange={handlePhoneChange}/>
                  </div>
              </form>
        </div>
        <div className="education">
          <h3 className="heading">Education</h3>
        </div>
        <div className="experience">
          <h3 className="heading">Experience</h3>
        </div>
      </div>
      <div className ="cvContainer">
        <h2>My CV</h2>
        <div className="personal">
          <h3 className="heading">Personal Information</h3>
          <div className="name">{name}</div>
          <div className="email">{email}</div>
          <div className="phone">{phone}</div>
        </div>
        <div className="education">
          <h3 className="heading">Education</h3>
        </div>
        <div className="experience">
          <h3 className="heading">Experience</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
