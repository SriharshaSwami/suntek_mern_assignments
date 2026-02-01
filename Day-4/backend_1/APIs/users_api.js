import exp from 'express'
//create mini express application (Seperate Route)
export const userApp = exp.Router()

//For now, lets maintain users in the application itself
let users = []

//create API (get, post, put, delete, etc.) request handlers - route
//get request handling route
userApp.get('/users', (req, res) => {
    //send res to clent
    res.json({message: "All users", payload: users});
})

//post request handling route
userApp.post('/users', (req, res) => {
    //resources are available in the body property of request object
    let newUser = req.body
    //insert the new user into the array
    users.push(newUser)
    res.status(201).json({message: "User created"})
})

//put request handling route
userApp.put('/users', (req, res) => {
    //get modified user from req
    let upUser = req.body
    //find the user with the id exits in array
    let upIndex = users.findIndex(user => user.id === upUser.id)
    
    //if not found send res as "User not found"
    if(upIndex === -1){
        res.status(404).json({message: "User not found"})
        return res
    }
    
    //if found send, then modify user and res "User modified"
    let delUser = users.splice(upIndex, 1, upUser)
    res.status(200).json({message: "User found", prevUser: delUser})
})

//read user by id i.e passed as url parameter
userApp.get('/users/:id', (req, res) =>{
    let userId = Number(req.params.id)
    let user = users.find(userObj => userObj.id === userId)
    if(!user){
        //Send res i.e not found
        res.status(404).json({message: "User not found"})
    }
    else{
        //Send res i.e found
        res.status(200).json({message: "User found", payload: user})
    }
})

//delete request handling route
userApp.delete('/users/:id', (req, res) => {
    //send res to client
    let delId = req.params.id
    let delIndex = users.findIndex((user) => user.id === delId)
    //check if index found or not and send res
    if(delIndex == -1){
        return res.json({message: "User not found"})
    }
    //splice returns array of deleted resources
    users.splice(delIndex, 1)
    res.status(200).json({message: "User deleted"})
})