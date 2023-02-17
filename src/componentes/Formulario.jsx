const Formulario = (props) => {

    const {entrada, setEntrada} = props;
    const change = (e) => {setEntrada ({
        ...entrada,
      [e.target.name]: e.target.value
      
      }
    );
}


const  err = (e) => {
    if (e.length <= 0){
        return ""
    } else if (e.length < 3){
        return <p className="error">Must be least 2 characters</p>
    } else {
        return ""
    }
}

    const  error = (e) => {
        if (e.length <=0){
        return ""
        } else if(e.length < 6){
        return <p className="error">Must be least 5 characters</p>
        } else{
            return ""
        }
    }

    const  errorPassword = (e) => {
    if (e.length <= 0){
        return ""
    } else if (e.length < 8)
    return <p className="error">Must be least 8 characters</p>
    else{
        return ""
    } 
}

const  errorconfirmPassword = (e) => {
    if (e.length <= 0){
    return ""
    } else if (e.length < 8)
    return <p className="error">Must be least 8 characters</p>
    else{
    return ""
    } 
}

const  same = (e) => {
    if (entrada.confirmPassword.length === 0){
        return ""
    }  else if (entrada.confirmPassword !== entrada.password){
        return <p className="error"> Password must match </p>
    } else{
        return ""
    }
}
return (
    <>
    <form>
        <div className='Formulario'>
            <label>Name</label>
            <input type="text" name="name" onChange={change} value= {entrada.name}/>
        </div>
        {err(entrada.name)}
        <div>
            <label>Last Name</label>
            <input type="text" name= "lastName" onChange={change} value= {entrada.lastName} />
        </div>
        {err(entrada.lastName)}
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name= "email" onChange={change} />
        </div>
        {error(entrada.email)}
        
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name= "password" onChange={change} />
        </div>
        {errorPassword(entrada.password)}
            
        <div>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name= "confirmPassword" onChange={change} />
        </div>
        {errorconfirmPassword(entrada.confirmPassword)}
        {same(entrada.confirmPassword)}
        </form>
    </>
    )
}
  
export default Formulario