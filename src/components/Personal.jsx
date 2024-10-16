import { useState } from "react"

function PersonalForm(){
    const[firstName,setFirstName] = useState("");
    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }
    return(
        <div className='personal'>
            <h3 className="heading">Personal Information</h3>
            <form onSubmit={e => e.preventDefault()}>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <br></br>
                    <input type="text" id="name" placeholder="First Name" value={firstName} onChange={handleFirstNameChange}/>
                </div>
                <div className="email">
                    <label htmlFor="email">E-mail</label>
                    <br></br>
                    <input type="email" id="email"/>
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone Number</label>
                    <br></br>
                    <input type="number" id="phone"/>
                </div>
            </form>
        </div>
    )
}
function PersonalDisplay({firstName}){
    return(
    <div className="personal">
          <h3 className="heading">Personal Information</h3>
          <div className="name">{firstName}</div>
          <div className="email"></div>
          <div className="phone"></div>
    </div>)
}
export  {PersonalDisplay, PersonalForm}