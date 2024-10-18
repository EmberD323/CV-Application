
import { useState } from "react";
import { EducationObject } from "./data"
let educationArray = [];
function EducationForm({myClassName,handleEducationReveal}){
    const[school,setSchool] = useState("")
    const[year,setYear] = useState("")
    const[degree,setDegree] = useState("")
    function handleSchoolChange(e){
        setSchool(e.target.value);
    } 
    function handleYearChange(e){
        setYear(e.target.value);
    }
    function handleDegreeChange(e){
        setDegree(e.target.value);
    }  

    function handleEducationSubmit(){
        let newEducation =  new EducationObject(school,year,degree)
        educationArray.push(newEducation);
        handleEducationReveal();
    }
    return(
    <form onSubmit={e => e.preventDefault()} className = {myClassName} id="education">
            <div className="school">
                <label htmlFor="school" >School Name</label>
                <input type="text" id="school" value={school} placeholder="Havard" onChange={handleSchoolChange}/>
            </div>
            <div className="year">
                <label htmlFor="year">Year of Completion</label>
                <input type="number" id="year" value={year} placeholder="2014" min="1900" max="2035" onChange={handleYearChange}/>
            </div>
            <div className="degree">
                <label htmlFor="degree">Course Name</label>
                <input type="text" id="degree" value={degree} placeholder="Bachelors of Science" onChange={handleDegreeChange}/>
            </div>
        <button onClick={handleEducationSubmit}>Submit</button>
  </form>
  
)
    
}
function EducationList({school,year,degree}){
 
    return(
        <>
            <div className="school">{school}</div>
            <div className="year">{year}</div>
            <div className="degree">{degree}</div>
        </>
    )

}
function EducationDisplay(){
    return(
    <ul>
            {educationArray.map((education)=>{
                return <li key={education.id}><EducationList school={education.school} year ={education.year} degree={education.degree}/></li>
            })}
    </ul>)
}


export  {EducationForm,educationArray,EducationDisplay}