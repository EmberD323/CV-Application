
function ExperienceForm({experience,handleNewForm,handleExperienceSubmit}){
    
    return(
        <ul>
        {console.log(experience)}
        {experience.map((e)=>{
            return(

            <li key={e.id}>
                <form onSubmit={e=>e.preventDefault()} id={e.id}>
                    <div className="company">
                        <label htmlFor="company" >Company</label>
                        <input type="text" id="company" placeholder="Google"/>
                    </div>
                    <div className="role">
                        <label htmlFor="role" >Title</label>
                        <input type="text" id="role"/>
                    </div>
                    <div className="responsibilities">
                        <label htmlFor="responsibilities" >Responsibilities</label>
                        <textarea id="responsibilities"/>
                    </div>
                    <button onClick={handleExperienceSubmit}>Submit</button>
                    <button onClick={handleNewForm}>Add Another</button>
                
                </form>
                
            </li>)
        })}
    
    </ul>

    )
    
}

function ExperienceList({company,role,responsibilities}){
 
    return(
        <>
            <h4 className="company">{company}</h4>
            <div className="role">{role}</div>
            <div className="responsibilities">{responsibilities}</div>
        </>
    )

}
function ExperienceDisplay({experienceArray}){
    return(
    <ul>
            {experienceArray.map((experience)=>{
                return <li key={experience.id}><ExperienceList company={experience.company} role={experience.role} responsibilities={experience.responsibilities} /></li>
            })}
    </ul>)
}

export {ExperienceForm,ExperienceDisplay}
