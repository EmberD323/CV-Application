import { useState } from 'react'
import './style/App.css'
import { EducationDisplay, EducationForm} from './components/Education.jsx'
import { PersonalForm } from './components/Personal.jsx';
import { ExperienceDisplay, ExperienceForm} from './components/Experience.jsx';


function App() {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
  const[personalSubmit,setPersonalSubmit] = useState(false);
  const[educationRevealed,setEducationReveal] = useState(false);
  const[experienceRevealed,setExperienceReveal] = useState(false);
  let experienceArray=[
    {   id:crypto.randomUUID(),
        company:"",
        role:"",
        responsibilities:"",
        
    }];
  const[experience,setExperience] = useState(experienceArray)


  function handleNameChange(e){
    setName(e.target.value);
  } 
  function handleEmailChange(e){
    setEmail(e.target.value);
  } 
  function handlePhoneChange(e){
    setPhone(e.target.value);
  } 
  function handlePersonalChange(){
    setPersonalSubmit(!personalSubmit);
  }
  function handleEducationReveal(){
    setEducationReveal(!educationRevealed);
  }
  function handleExperienceReveal(){
    setExperienceReveal(!experienceRevealed);
  }
  function handleNewForm(){
    let newRole =
        {   id:crypto.randomUUID(),
            company: "",
            role:"",
            responsibilities:"",
        }
    
    let experienceCopy =[...experience] ;
    experienceCopy.push(newRole);
    setExperience(experienceCopy);
    
    
}
function handleExperienceSubmit(e){
  let FormDOM = e.target.parentNode.childNodes
  console.log(FormDOM[0])
  let NewId = e.target.parentNode.id;
  let NewCompany = FormDOM[0].childNodes[1].value;
  let NewRole = FormDOM[1].childNodes[1].value;
  let NewResponsibilities = FormDOM[2].childNodes[1].value;
  //filter experience array by 
  for(let i=0;i<experience.length;i++){
      if(experience[i].id == NewId){
          experience[i].company = NewCompany;
          experience[i].role = NewRole;
          experience[i].responsibilities = NewResponsibilities;
      }
  }
  console.log(experience)
  let experienceCopy =[...experience]
  setExperience(experienceCopy);
}
 
  return (
    <>
    <h1>CV Generator</h1>
    <div className="container">
      <div className ="formContainer">
        <div className='personal'>
              <h3 className="heading">Personal Information</h3>
              <PersonalForm myClassName={personalSubmit===false ? "open":"closed"} name={name} handleNameChange = {handleNameChange}
              email = {email} handleEmailChange = {handleEmailChange} phone = {phone} handlePhoneChange= {handlePhoneChange}/>
              <button onClick={handlePersonalChange}>{personalSubmit===false ? "Submit":"Edit"}</button>
        </div>
        <div className="education">
          <h3 className="heading">Education</h3>
          <button onClick={handleEducationReveal}>{educationRevealed===false ? "Edit":"Close"}</button>
          <EducationForm myClassName ={educationRevealed===true ? "open":"closed"} handleEducationReveal={handleEducationReveal}/>
          
            
            
            
        </div>
        <div className="experience">
          <h3 className="heading">Experience</h3>
          <button onClick={handleExperienceReveal}>{experienceRevealed===false ? "Edit":"Close"}</button>
          <div className ={experienceRevealed===true ? "open":"closed"} id="form container">
            
            <ExperienceForm experience={experience} handleNewForm={handleNewForm} handleExperienceSubmit={handleExperienceSubmit}/>
          </div>
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
          <EducationDisplay />

        </div>
        <div className="experience">
          <h3 className="heading">Experience</h3>
          <ExperienceDisplay experienceArray={experience} ></ExperienceDisplay>
          
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
