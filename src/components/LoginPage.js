import React, { Component } from 'react'

class LoginPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
        
                <form>
                    <div>
                <h2>Login Page</h2>
                {/* <br></br><br></br> */}

                <label for="uname"><b>Username</b></label>
        <input type="text" 
           placeholder="Enter Username" 
           name="uname" required>
        </input>

        <br></br>

    <label for="psw"><b>Password</b></label>
    <input type="password" 
        placeholder="Enter Password" 
        name="psw" required>
        </input>

        <br></br>

    <button type="submit">Login</button>
    <label></label>
    <br></br>

    <div><input type="checkbox" /> Remember Me</div>

    
                    </div>
     
    
            </form>
        )
    }
}

export default LoginPage
