import React from 'react'

export default function SignUp(props) {

  const click=()=>{
    const object=[
      ...props.card,
      {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('mail').value,
        date: document.getElementById('dob').value,
        phone: document.getElementById('phone').value,
        key: document.getElementById('firstname').value+document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zipcode: document.getElementById('zipcode').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value,
        password: document.getElementById('password').value,
        confirmpassword: document.getElementById('cpassword').value
    }]
    props.setCard(object)
  }
  return (
    <div className="container h-50 w-50 p-4 shadow mb-4 bg-body-tertiary rounded">
    <h3 className="text-center mb-4"><b>REGISTRATION</b></h3>
    <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>Email</span>
  <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="xyz@gmail.com" id="mail"/>
   </div>
   <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>First Name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="firstname"/>
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Last Name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="lastname"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>Date of Birth</span>
  <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="dob"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Address</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="address"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>City</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="city"/>
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>Zipcode</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="zipcode"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>State</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="state"/>
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Country</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="country"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>Contact No.</span>
  <input type="tel" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="eg:- +91 9999999999" id="phone"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Password</span>
  <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="password"/>
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Confirm Password</span>
  <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="cpassword"/>
</div>
<div className="text-center mt-5">
<button type="submit" className="btn btn-dark mx-5" onClick={click}>Submit</button>
</div>
</div>
);
}