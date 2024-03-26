export const getMessages= (userid,messageid)=>{
    return fetch (`http://localhost:8090/chat/get/${userid}/${messageid}`,{
        'method':"GET",
    })
    .then((response)=>{
        
        console.log(response)
     return response.json();
    }).catch((err)=>{
    console.log("error",err);
    })
}

export const sendMessage= (data)=>{
    console.log(data)
    return fetch ("http://localhost:8090/chat",{
        'method':"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=>
        console.log(err))
}

export const getMessageUsers = (id)=>{
    return fetch (`http://localhost:8090/messagedusers/get/${id}`,{
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