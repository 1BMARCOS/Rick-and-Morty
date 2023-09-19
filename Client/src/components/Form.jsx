import { useState } from "react";
import validation from "./Validation/Validation";



const Form = ({login}) => {
    const [errors, setError] = useState ({})
    const [userData, setUserData] = useState ({
        email: '',
        password: ''
    });
   
    const handleSubmit = (event) => {
        event.preventDefault ()
        login (userData)
    }
    const handleChange = (event) => {
        
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        setError(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
      };
    return (
    
    <div>

        <img src="https://cdn.vox-cdn.com/thumbor/5w9FJ8Fimki197z9orQZnJ3CyMo=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/24415978/rick_and_morty_s4_image.png" alt="" width= "500px" style={{borderRadius:"50%"}}/>
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email: </label>
                <input type="email" name = "email" value = {userData.email} onChange={handleChange}/>
                {
                    errors.email? <p>{errors.email}</p>:null 
                }

                    <hr />
            <label htmlFor="password">Password: </label>
                <input type="password" name = "password" value = {userData.password} onChange={handleChange} />
                {
                    errors.password? <p>{errors.password}</p>:null
                }
                    <hr />
            <button type = "submit">Submit</button>
        </form>
    </div>
    
    )

}

export default Form;