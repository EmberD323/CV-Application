function PersonalForm({myClassName,name,handleNameChange,email,handleEmailChange,phone,handlePhoneChange}){
    return(
    <form onSubmit={e => e.preventDefault()} className = {myClassName}>
        <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" value={name} onChange={handleNameChange}/>
        </div>
        <div className="email">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email"placeholder="E-mail@email.com" value={email} onChange={handleEmailChange}/>
        </div>
        <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone"placeholder="000-0000000" value={phone} onChange={handlePhoneChange}/>
        </div>
    </form>)
}
export {PersonalForm}