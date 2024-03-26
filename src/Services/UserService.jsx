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

export const signin = (user) => {
    console.log(user);
    return fetch("http://localhost:8090/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log( response);
        return response.json();
      })
      .catch(error => {
        // Handle error
        console.error("Error:", error);
      });
  };

  export const signOut = ()=>{
    return fetch ("http://localhost:8090/signout",{
        'method':"GET",
    })
    .then((response)=>{
        console.log("success")
        console.log(response)
     return response.json();


    }).catch((err)=>{
    console.log("error",err);
    })

}

export const getUsers = ()=>{
    return fetch ("http://localhost:8090/profiles/users",{
        'method':"GET",
    })
    .then((response)=>{
        console.log("success")
        console.log(response)
     return response.json();


    }).catch((err)=>{
    console.log("error",err);
    })

}

export const getInvestors = ()=>{
    return fetch ("http://localhost:8090/profiles/investors",{
        'method':"GET",
    })
    .then((response)=>{
        console.log("success")
        console.log(response)
     return response.json();
    }).catch((err)=>{
    console.log("error",err);
    })

}

export const getCharity = ()=>{
    return fetch ("http://localhost:8090/profiles/charity",{
        'method':"GET",
    })
    .then((response)=>{
        console.log("success")
        console.log(response)
     return response.json();
    }).catch((err)=>{
    console.log("error",err);
    })
}

export const getProfile= (id)=>{
    return fetch (`http://localhost:8090/profile/${id}`,{
        'method':"GET",
    })
    .then((response)=>{
        
        console.log(response)
     return response.json();
    }).catch((err)=>{
    console.log("error",err);
    })
}