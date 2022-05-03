import { useContext, useState } from 'react';
import { UserContext, LogInContext } from '../context/user';
import { useHistory } from 'react-router-dom';

function LogIn() {

    const [formData, setFormData] = useState("")
    const [user, setUser] = useContext(UserContext);
    const [logIn, setLogIn] = useContext(LogInContext);
    const history = useHistory();

    function handleChange(e) {
        let targetValue = e.target.value;
        setFormData(targetValue);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUser(formData)
        setLogIn(true)
        history.push('/cats')
    }
    
    return(
        <div className="UserArea">
               <form onSubmit={handleSubmit}>
                        <input type="text"  placeholder="Username" name="username" onChange={handleChange} className='shadow-box' />
                        <input type="submit" ></input>
                    </form>
        </div>
    )
}

export default LogIn