import React, {   useRef, useState } from 'react';
import './Login.css'
import {AiFillGoogleCircle}from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/Firebase.init'
import {  useAuthState,  useSendPasswordResetEmail,  useSignInWithEmailAndPassword,  useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiTwotoneMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import Zoom from 'react-reveal/Zoom';
import ReactLoading from "react-loading";





const Login = () => {
  const [signInWithGoogle, loading1, errorgGoogle] = useSignInWithGoogle(auth);
  const [error4,setError]=useState('')
  const navigate = useNavigate()
  const [signInWithGithub,userGit, loading3, errorGit] = useSignInWithGithub(auth);
  const [signInWithFacebook,userFb, loadingFb, errorFb] = useSignInWithFacebook(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );
  const [
    signInWithEmailAndPassword,
    user1,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const location=useLocation();
  const emailRef=useRef('')
  const from = location.state?.from?.pathname || '/'

  const [user] = useAuthState(auth);

  if(user|| userGit || userFb){
    const url = `https://enigmatic-forest-36010.herokuapp.com/login`
    fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    email:user.email
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("token",data.token)
    navigate(from,{replace: true});
  });
 
  }
  
  const handleSignIn = () =>{
    signInWithGoogle()
  }

  const handleGithubSignIn=()=>{
    signInWithGithub()
    console.log(userGit)
    console.log(errorGit)
}
const handleFacebookSignIn=()=>{
  signInWithFacebook()
  console.log(userFb)
    console.log(errorFb)
}

if(loading || loading1 || loading3 || loadingFb){
 return <ReactLoading className='loading-login' type={"spokes"} color={"crimson"} height={100} width={100}/>
}
 

  const handleLogIn=(event) =>{
    event.preventDefault()
    const email= event.target.email.value;
    const password= event.target.psw.value;
    signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // if(user || userGit){
    //   navigate('/home')
    // }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError('Unauthorized Access')
    // ..
  });
  }


  const handleReset=async()=>{
    const email=emailRef.current.value
    console.log(typeof email)
   if(!email){
    alert("Please Enter Your Email");
   }
   else{
    await sendPasswordResetEmail(email)
    toast("Please Check Your Email");
   }
  }
    return (
        <div className='login-container d-flex'>

<div className="left-login">

<div className="bottom-container">
  Login Here!
</div>

<div className="top-container">
  Login Here!
</div>

</div>



    <Zoom left>

    <div className="login-form">
    <form onSubmit={handleLogIn}>
      <h1>Login</h1>
      <div className="form-group">
        <input required type="email" ref={emailRef}  name="email" placeholder="E-mail Address"/>
        <span className="input-icon" ><AiTwotoneMail></AiTwotoneMail></span>
      </div>
      <div className="form-group">
        <input required type="password" name="psw" placeholder="Password"/>
        <span className="input-icon"><RiLockPasswordFill></RiLockPasswordFill></span>
      </div>      
      <button className="login-btn">Login</button>      
      <button className="reset-psw" onClick={handleReset} >Forgot your password?</button>
      <button className="reset-psw" onClick={()=>navigate('/signup')} >Create Account</button>
      {/* <button className='reset-psw'><Link className="reset-psw" to="/signup">Create Account</Link></button> */}
      
      <div className="seperator"><b>or</b></div>
      <p>Sign in with your social media account</p>
      <p className='text-center fw-bold text-danger'>{error4}</p>	
      <div className="social-icon">
        <button type="button"  onClick={handleSignIn} ><AiFillGoogleCircle className='social-links'></AiFillGoogleCircle></button>
        <button type="button" onClick={handleFacebookSignIn}><BsFacebook className='social-links'></BsFacebook></button>
        <button type="button" onClick={handleGithubSignIn}><BsGithub className='social-links'></BsGithub></button>
      </div>
    </form>
  </div>
    </Zoom>


    <ToastContainer />

      </div>
	
    );
};

export default Login;