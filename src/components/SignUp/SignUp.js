import React,{useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './SignUp.css'
import { getAuth, } from "firebase/auth";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Zoom from 'react-reveal/Zoom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import ReactLoading from "react-loading";

const SignUp = () => {
  const[error1,setError]=useState('');
  const [checked,setChecked]=useState('false')
  const navigate= useNavigate()
const auth = getAuth();
const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

const [sendEmailVerification, sending, error3] = useSendEmailVerification(auth);




  const handleChange = () => { 
    setChecked(!checked); 
  }; 

  if(user){
    sendEmailVerification()
    navigate('/home')
  }

  if(loading){
    return  <ReactLoading className='loading-login' type={"spinningBubbles"} color={"crimson"} height={100} width={100}/>
  }

 const handleSignIn= async (event)=>{
   event.preventDefault()
   const email = event.target.email.value;
   const password = event.target.password.value;
const confirmPassword = event.target.confirmPassword.value;

   if(password !== confirmPassword ){
    setError('password did not match')
    event.target.reset()
  }
  else if(password.length<6){
    setError('password must be 6 character')
    event.target.reset()
  }
  else if(checked==='false'){
    setError('Please Accept Terms of service')
  }
    else{
      const url = `https://enigmatic-forest-36010.herokuapp.com/login`
      fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email:email
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("token",data.token)
    });
     
      createUserWithEmailAndPassword(email, password);
    
    }
 }
    return (
        <div className='signup d-flex'>
           <Zoom right>

<section className="vh-100 signup-container">
<div className="w-40 d-flex align-items-center h-100">
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
<div className="col-12 col-md-9 col-lg-7 col-xl-6">
<div className="card form-container">
<div className="card-body  py-0">
  <h2 className="text-uppercase text-center mb-2">Create an account</h2>

  <form onSubmit={handleSignIn}>

    <div className="form-outline mb-2">
    <label className="form-label">Your Name</label>
      <input type="text" name='name' id="form3Example1cg" className="form-control form-control-lg" required />
    
    </div>

    <div className="form-outline mb-2">
    <label className="form-label text-black" >Your Email</label>
      <input type="email" name='email'  className="form-control form-control-lg" required  />
      
    </div>

    <div className="form-outline mb-2">
    <label className="form-label" >Password</label>
      <input type="password" name='password' id="form3Example4cg" className="form-control form-control-lg" required />
     
    </div>

    <div className="form-outline mb-2">
    <label className="form-label">Confirm Password</label>
      <input type="password" name='confirmPassword' id="form3Example4cdg" className="form-control form-control-lg" required />

    </div>

    <p className='text-center fw-bold text-danger'>{error1}</p>	

    <div className="form-check d-flex justify-content-center mb-2">
      <input onClick={handleChange} className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
      <label className="form-check-label" >
        I agree all statements in <a href="#!" className="text-body"><u className='text-primary'>Terms of service</u></a>
      </label>
    </div>

    <div className="d-flex justify-content-center">
    <button  type="submit" 
        className="btn btn-success btn-block btn-lgtext-body btn-register ">Register</button>
    </div>
    <button className="mt-2 mb-2 ms-4 btn-sign-login" onClick={()=>navigate('/login')} >Have an Account?Login Here</button>
    {/* <p className="text-center text-muted mt-2 mb-0">Have already an account? <Link to='/login'
        className="fw-bold text-body"><u>Login here</u></Link></p> */}
  </form>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


</Zoom>
<ToastContainer />
 </div>
    );
};

export default SignUp;