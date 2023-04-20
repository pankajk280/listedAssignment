import "./Style.css";
import apple from './Images/apple.png'
import google from './Images/google.png'
import {gapi} from 'gapi-script';
import {GoogleLogout} from 'react-google-login'
import dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
const clientId="731427161151-juut682klgo1nnn55mocekm1criu5lt7.apps.googleusercontent.com";

export default function Signin() {

  const navigate=useNavigate();

  return (
    <div className="mainContainer">
      <div className="blackbar">
        <h1 className='boardSign'>Board.</h1>
      </div>
      <div className="signinPanel">
        <div className="signinHeader">
          <h2>Sign In</h2>
          <p>Sign in to your account</p>
          <div style={{"display":"flex"}}>
            <div style={{"background-color":"white","margin-right":"15px","padding-left":"10px","border-radius":"10px"}}>
            <img src={google}></img>
          <button className="btng">Sign in with Google</button>
            </div>
            <div style={{"background-color":"white","margin-right":"15px","padding-left":"10px","border-radius":"10px"}}>
            <img src={apple}></img>
          <button  className="btng">Sign in with Apple</button>
            </div>
          </div>
          
          
        </div>
        <div className="signinContent">
          <form>
          <label>Email</label>
          <input id="input1" type="email" required />
          <label>Password</label>
          <input id="input2" type="password" required/>
          <br/>
          <a><span className="fgp">Forgot Password?</span></a>
          <button className="signinbtn" 
           onClick={
            ()=>{
              navigate('/dashboard')
            }           }
          >Sign In</button>
          </form>
        </div>
        <span className='acc'>Don't have an account? </span> <a href="#" style={{"text-decoration":"none"}}>Register here</a>
      </div>
    </div>
  );
}
