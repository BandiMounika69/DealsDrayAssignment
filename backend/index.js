import express from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import { PORT, mongoDBURL } from './config.js'
import { Employee, User } from './models/employeeModels.js'

const app = express()

//middlewares
app.use(cors())
app.use(express.json())


//database connection
mongoose.connect(mongoDBURL).then(() => {
    console.log("MongoDB is connected")
    app.listen(PORT, () => {
        console.log(`app is listening to port ${PORT}`)
    })
}).catch(() => {
    console.log("mongoDB is not connected");
})

//For Employee lists
//Http pose request
app.post('/employee/create', async (req, res) => {
    try {
        const { name, email, mobile, designation, gender, course } = req.body
        console.log(name)
        if (!name || !email || !mobile || !designation || !gender || !course) {
            res.send({
                message: "send all the required fields"
            })
        }
        const newEmployee = {
            name: name,
            email: email,
            mobile: mobile,
            designation: designation,
            gender: gender,
            course: course
        }
        const employee = await Employee.create(newEmployee)
        res.status(200).send(employee)
    } catch (error) {
        console.log({
            message: error
        })
    }
})

//Http delete request 
app.delete('/employee/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await Employee.findByIdAndDelete(id)
        if (!result) {
            res.status(400).send({
                message: "Employee Not Found"
            })
        }
        res.status(200).send({
            message: "Employee Deleted Successfully"
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).send({
            message: error.message,
        })
    }
})

//Http edit request
app.put('/employee/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Employee.findByIdAndUpdate(id, req.body);
        if (!result) {
            res.status(404).send({ message: 'Employee not Found' });
        }
        res.status(200).send({ message: 'Employee updated succesfully' })
    } catch (error) {
        console.log(error.message)
        res.status(400).send({
            message: error.message,
        })
    }
})

//Http get all request
app.get('/employee', async (req, res) => {
    try {
        const Employees = await Employee.find({});
        res.status(200).send({
            count: Employees.length,
            data: Employees,
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ message: 'Employee not found' })
    }
})

//Http ger by id request
app.get('/employee/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id);
        res.status(200).send(employee);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ message: error.message })
    }
})

//user details
app.post('/user/create', async (req, res) => {
    try {
        const { userName, userEmail, password } = req.body
        if (!userName || !userEmail || !password) {
            res.send({
                message: "failure"
            })
        }
        const newUser = {
            userName: userName,
            userEmail: userEmail,
            password: password
        }
        const user = await User.create(newUser)
        res.status(200).send(user)
    } catch (error) {
        console.log({
            message: error
        })
    }
})

app.post('/user', async (req, res) => {
    try {
        const { userName, password } = req.body
        const user = await User.find({
            userName: userName,
            password: password
        });
        console.log(user)
        if (!user[0]) {
            res.status(400).send({
                message: "failure"
            })
        }
        res.status(200).send({
            message: "success"
        })
        console.log(user[0])
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ message: 'failure' })
    }
})