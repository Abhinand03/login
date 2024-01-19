
login=()=>{
    let user=uname.value
    let pass=pwd.value
    if(!user || !pwd)
    {
        alert("Enter User name or Password !!!!")
    }
    else
    {
        localStorage.setItem("username",uname.value)
        console.log(`username:${user} password:${pass}`);
        window.location="dashbord.html"
    }

}
