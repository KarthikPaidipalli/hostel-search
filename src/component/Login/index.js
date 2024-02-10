import { Component } from "react"
import "./index.css"
class Login extends Component{
    state={username:"",password:""}
    enterdpassword = (event)=>{
        this.setState({password:event.target.value})
    }
    enterdinput = (event)=>{
        this.setState({username:event.target.value})
    }
    submitform = (event)=>{
        event.preventDefault();
        const{history}=this.props
        history.replace("/")

    }
    render(){
        return(
            <div className="login-container">
                <form className="form" onSubmit={this.submitform}>
                    <h1 className="heading-signin">Sign in</h1>
                    <label htmlFor="inputelement" className="label-of-signin">USERNAME</label>
                    <br/>
                    <input type="text" id="inputelement" onChange={this.enterdinput}/>
                    <br/>
                    <label htmlFor="passwordelement" className="label-of-signin">PASSWORD</label>
                    <br/>
                    <input type="password" id="passwordelement" onChange={this.enterdpassword}/>
                    <br/>
                    <div className="button-align-sumbit">
                    <button type="submit" className="button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login