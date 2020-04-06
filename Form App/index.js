//console.log(document.querySelector(".main-content"))
let addQns = document.querySelector("#addQns") ;
let xtraQns = document.querySelector("#xtraQns") ;
//console.log(addQns);
//console.log(xtraQns)
	
//i want the additional questions to be hidden until they are put a certain option is picked
addQns.style.display ="none";
xtraQns.style.display ="none";

//this code ensures the functionality of the occupaation button to deliver 
//different questions based on an option selected
//acquire different options
let occupations = document.querySelector("#occupations");
//add an event listenener on the select element
occupations.addEventListener("click",()=>{
	//this occupation refers to the different options
let  occupation = occupations.value;
//console.log(occupation)
//id the user clicks on employed
	if(occupation ==="Employed"){
		//console.log("employed");
		addQns.style.display ="block";

		xtraQns.style.display="none"
	}
	//if the user is self-employed
	 if(occupation === "Self-Employed"){
	 	//if the user changes from employed to self -employed we ahve to firts hide questions of the 
	 	//employed and them display for self-employed
        addQns.style.display="none";

        xtraQns.style.display ="block";

	}
	//if the user is a student
	if(occupation ==="student"){
		xtraQns.style.display ="none";
		addQns.style.display ="none";


	}
})

//i need to pick some answers from here to put in my template
//this is for the gender
var gender = document.querySelector("#gender").querySelectorAll("input");
//console.log(gender);
//converting a node list to array
var options = Array.from(gender)
console.log(options)
options.forEach(option =>{
	option.addEventListener("click",()=>{
		console.log(option.value)
	})

})

//this is the answer for if they save or not
var save = document.querySelector("#save").querySelectorAll("input");
console.log(save);
//converting a node list to array
var options = Array.from(save)
console.log(options)
options.forEach(option =>{
	option.addEventListener("click",()=>{
		console.log(option.value)
	})

})
//this event listener catches the text for the reason why they save
var textArea1 = document.querySelector("#textarea1");
textArea1.addEventListener("keyup",(e)=>{
	var text = e.target.value;
	console.log(text);

})

//this event listener catches the text for the reason why they save
var textArea1 = document.querySelector("#textarea1");
textArea1.addEventListener("keyup",(e)=>{
	var text = e.target.value;
	console.log(text);

})



//this is the answer for if they invest or not
var invest = document.querySelector("#invest").querySelectorAll("input");
console.log(save);
//converting a node list to array
var options = Array.from(invest)
console.log(options)
options.forEach(option =>{
	option.addEventListener("click",()=>{
		console.log(option.value)
	})

})




//this event listener catches the text for the reason why they save
var textArea2 = document.querySelector("#textarea2");
textArea2.addEventListener("keyup",(e)=>{
	var text = e.target.value;
	console.log(text);

})

























//initialise the submit button after fulfilling some conditions 
//I am going to put below
const btn = document.querySelector("#submit")
//add an eventListener
btn.addEventListener("click", (e)=>{
	e.preventDefault();

//acquring variables to put in output for the modal
const firstName = document.querySelector("#first_name").value;
const lastName = document.querySelector("#last_name").value;
const age = document.querySelector("#age").value;
const residence = document.querySelector("#residence").value;
const contact = document.querySelector("#contact").value;


//this if stattement ensures that the required fields are filled
if(firstName.length>0 && lastName.length>0 && age.length>0 && residence.length>0 && contact.length>0){
//for each of the different options on occupation,different questions will pop up



//code for the modal
const modal = document.querySelector("#modal");
//the modal only opens when the required fields are filled
//this is the text that is in the modal
let output = `My name is ${firstName} ${lastName}.I am ${age} years old. I live in ${residence}. `;
console.log(output);
document.querySelector("#modalContent").insertBefore(document.createTextNode(output),document.querySelector("#modalFooter"))
 //on clicking the btn is adding a modal
 modal.style.display ="block"

 //if this modal opens the errorMsg cant be displayed
document.querySelector("#errorMsg").style.display ="none"

//code for removing the modal
window.addEventListener("click",(e)=>{
	if(e.target === modal){
		modal.style.display ="none"
		
	}
})
}else{
	//i want to create a paragraph containing the error text
	const error = document.createElement("p");
	error.innerHTML = "Please fill in all fields !";
	//style my error to message
	error.style.color ="red";
	
	error.style.padding ="10px"
	
	var errorMsg = document.querySelector("#errorMsg");
	//i want the error msg to show up only once
    //without it the error msg will keep replaying
	if(errorMsg.children.length === 0){
     //console.log("error")
     errorMsg.appendChild(error)
	}

	//error.style.display ="none"

}

})



//practise

