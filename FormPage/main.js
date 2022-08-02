document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault()
    const first = document.getElementById('fname').value
    console.log(first)
    const last = document.getElementById("lname").value
    const email = document.getElementById("Email").value
    const phone = document.getElementById("password").value
    // const Gender = document.getElementById("gender").value
    // const Message = document.getElementById("message").value



    const myObject = new Object()
    myObject.first_name = first;
    myObject.last_name = last;
    myObject.Email = email;
    myObject.Phonenumber= phone;
    // myObject.Message= 
    console.log(myObject)
    history.back();

})