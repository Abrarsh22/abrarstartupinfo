import { useState } from 'react';
export default function Profile() {
// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [user,setUser]=useState({
  name:"",email:"",sname:"",sugg:""
}) ;

let names,value;
// Handling the change
const handleInputs = (e) => {
console.log(e);
names=e.target.name;
value=e.target.value;
setUser({...user,[names]:value});

};
const PostData =async(e)=>{
  e.preventDefault();
  const {name,email,sname,sugg}=user;

  const res = await fetch("/signup",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,sname,sugg
    })
  });
  const data = await res.json();
  if(res.status===422 || !data){
    window.alert("Something went Wrong");
    console.log("sorry");
  }else{
    window.alert("Your response has been submitted");
    console.log("success");
  }
}


return (
<div className="form">
<div>
<h2>User Suggestion Form</h2>
</div>

<form method='POST' >
{/* Labels and inputs for form data */}
<h3><label className="label">Name*</label></h3>
<input onChange={handleInputs} className="input" name="name" id="name"
value={user.name} type="text" />

<h3><label className="label">Email*</label></h3>
<input onChange={handleInputs} className="input" name="email" id="email"
value={user.email} type="email" />

<h3><label className="label">Start up Name*</label></h3>
<input onChange={handleInputs} className="input" name="sname" id="sname"
value={user.sname} type="text" />

<h3><label className="label">Any Updation Needed*</label></h3>
<textarea onChange={handleInputs} className="input" rows="4" cols="50" name="sugg" id="sugg"
value={user.sugg} placeholder="Any suggestion would be Appreciated" ></textarea><br/>
<span>(Any suggestion would be Appreciated)</span><br/><br/>
<button className="btns" type="submit"onClick={PostData}>Submit</button>
</form>
</div>
);
}