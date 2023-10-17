let form1=document.querySelector("#form");
let userName=document.querySelector("#UserName");
let email=document.querySelector("#Email");
let password1=document.querySelector("#Password1");
let cpassword=document.querySelector("#CPassword");


form1.addEventListener("submit",(e)=>{
    
	e.preventDefault();
	validateInput();
})

function validateInput(){
	let userNameVal = userName.value.trim();
	let emailVal = email.value.trim();
	let PasswordVal = Password1.value.trim();
	let cpasswordVal = cpassword.value.trim();
	// let success=true;
	
	if(userNameVal===""){
		// success=false;
		setError(userName,"userName is required");
	}
	else{
		setSuccess(userName,"valid")
	}
	
	
	if(emailVal===""){
		// success=false;
		setError(email,"Email is required");
	}
	// else if(!validateEmail(emailNameval)){
		
		// success=false;
		// setError(email,"Please enter the validate email");
	// }
	else{
		setSuccess(email ,"valid")
	}
	
	
	
	
	if(PasswordVal===""){
		// success=false;
		setError(Password1,"Password is required");
	}
	else if(PasswordVal.length<8){
		// success=false;
		setError(password1,"Password must contain atleast 8 charector");
	}
	else{
		setSuccess(Password1,"valid")
	}
	
	
	if(cpasswordVal===""){
		// success=false;
		setError(cpassword," Confirm Password is required");
	}
	else if(cpasswordVal!==PasswordVal){
		// success=false;
		setError(cpassword,"Password does not match");
	}
	else{
		setSuccess(cpassword,"valid")
	}
	
    // return success;
}


function setError(element1,message){
	let inputGroup=element1.parentElement;
 	let errorElement=inputGroup.querySelector(".error");
	
	errorElement.innerText=message;
	// console.log(message);
	
	inputGroup.classList.add("error")
	inputGroup.classList.remove("success")
	
}
function setSuccess(element1,message){
	let inputGroup=element1.parentElement;
	let errorElement=inputGroup.querySelector(".error");
	
	errorElement.innerText=message;
	inputGroup.classList.add("success")
	inputGroup.classList.remove("error")
	
}


// let validateEmail=(email)=>{
	// return string(email)
	// .toLowerCase()
	// .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// )
	
// };