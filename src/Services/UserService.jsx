import React from 'react'

export const  registerUser=(user)=> {
    return fetch("http://localhost:8090/user",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"

        },
        body:JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=>
        console.log(err))
}

export const signin =(user) =>{
    console.log(user)
    const formData = new FormData()
    
    for(const name in user){

        formData.append(name,user[name])
        console.log(formData)
    }
  
    console.log(formData.get("email"))
    return fetch("http://localhost:8090/signin", {
  method: "POST",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"

},
  body: JSON.stringify(user)
 
})
.then(response => {
  console.log("SUCCESS", response);
  return response.json();
})
.catch(err => {
  console.log(err);
});}