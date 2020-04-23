
console.log("js is working");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function validate()
{
    let email=document.getElementById("email").value;
    let pwd=document.getElementById("psw").value;
    let lbl=document.getElementById("error");

    if(email.trim()==""||pwd.trim()=="")
    {
        lbl.innerText="Email and Password should be filled";
        lbl.style.color="red";
        lbl.style.border="solid red 3px";
        return false;
    }
   else if(!mailformat.test(email))
    {
        lbl.innerText="Enter a valid Email address";
        lbl.style.color="red";
        lbl.style.border="solid red 3px";
        return false;
        console.log("email format is not correct")
    }

    else if(pwd.length<=5)
    {
    
        lbl.innerText="Password is too short";
        lbl.style.color="red";
        lbl.style.border="solid red 3px";
        return false;
    }
    else{
        return true;
    }
}
    
function signupvalidate()
{
    let userid=document.getElementById("userid").value;
    let mail=document.getElementById("mailid").value;
    let pswd=document.getElementById("psw").value;
    let repswd=document.getElementById("pswrepeat").value;
   
    if(userid.trim()=="")
    {
        let lbl=document.getElementById("errorname");
        lbl.innerText="Name cannot be keep blank";
        lbl.style.color="red";
        lbl.style.border="solid red 3px";
        return false;
    }

    else if(!mailformat.test(mail))
    {  let lbl=document.getElementById("errormail");
        lbl.innerText="Enter a valid Email address";
        lbl.style.color="red";
        lbl.style.border="solid red 3px";
        console.log("email format is not correct")
        return false;
        
    }
    else if(pswd.trim()!="" && pswd.length<=5)
    {
        let lbl=document.getElementById("errorpsw");
        lbl.innerText="Password must be strong";
        lbl.style.color="red";
        lbl.style.border="solid red 3px";
        return false;
    }
    else if(repswd.trim()=="") 
    {
        let lbl=document.getElementById("reerrorpsw");
        lbl.innerText="password cannot be empty";
        lbl.style.color="red";
        lbl.style.border="solid red 3px";
        return false;
    }
    else if(repswd != pswd)
    {
        let lbl=document.getElementById("reerrorpsw");
        lbl.innerText="Enter the same password";
        lbl.style.color="red";
        lbl.style.border="solid red 3px";
        return false;
    }
    else{
        return true;
    }
    
}
function cancel()
{
    document.getElementById("userid").value="";
    document.getElementById("mailid").value="";
    document.getElementById("psw").value="";
    document.getElementById("pswrepeat").value="";

}