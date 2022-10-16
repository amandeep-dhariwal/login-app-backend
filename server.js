const express = require('express');
const app = express();
app.use(express.json());

const users = [
    {
        email: "a@gmail.com", 
        password: "p1", 
        name: "a"
    },
    {
        email: "b@gmail.com", 
        password: "p", 
        name: "b"
    },
];
// console.log(users);

app.post('/users', (req, res) =>{
    let result = users.find(user => user.email == req.body.email);
    if(result){
        if(result.password == req.body.password){
            res.status(200).send({
                message: "Successful Login"
            })
        }else{
            res.status(401).send({
                message: "Incorrect Password"
            })
        }
    }else{
        res.status(401).send({
            message: "User not found"
        })
    }
})

app.patch('/users', (req, res) =>{
    let result = users.find(user => user.email == req.body.email);
    if(result){
        console.log('already added')
        res.send({
            message: "users already in database"
        })
    }
    else{
    const user = {email: req.body.email, password: req.body.password}
    users.push(user)
    console.log(users);
    res.status(200).send({
        message: "user added"
    })}
})

// app.post('/users', (req, res) =>{
//     res.send('welcome to backend');
// })

app.listen(3000);