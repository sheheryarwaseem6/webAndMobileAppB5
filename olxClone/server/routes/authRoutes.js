import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router = express.Router()
import { client } from '../dbConfig.js';
import { ObjectId } from 'mongodb';
const myDB = client.db("olxClone");
const Users = myDB.collection("users");

router.post('/register', async (req, res) => {
    try{
        if (!req.body.firstName || !req.body.lastName || !req.body.phone || !req.body.email || !req.body.password) {
            res.send('please fill out complete form')
        } else {
            let email = req.body.email.toLowerCase()
            const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
            if (email.match(emailFormat) && req.body.password.match(passwordValidation)) {
                const checkUser = await Users.findOne({ email: email })
                if (checkUser) {
                    return res.status(400).send({
                    status: 0,
                    message: "Email already exist"
                })
                } else {
                    const hashedPassword = await bcrypt.hashSync(req.body.password)
                    const user = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: email,
                        password: hashedPassword,
                        phone: req.body.phone,
                        isVerified: false,
                    }
    
                    const response = await Users.insertOne(user)

                    if(response.insertedId){
                        const findUser = await Users.findOne({_id:new ObjectId(response.insertedId)}, {password : 0})
                        return res.send({
                            status: 1,
                            message : "user registered succesfully",
                            data : findUser
                        })
                    }
                }
            } else {
                return res.send({
                    status : 0,
                    message : "invalid data"
                })
            }
        }
    }catch(error){
        return res.status(500).send({
            status : 0,
            message : "Internal Server Error"
        })
    }
})

router.post('/signIn', async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({
                status: 0,
                message: "Email or Password is required"
            })
        }
        let email = req.body.email.toLowerCase()
        const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!email.match(emailFormat)) {
            return res.send({
                status: 0,
                message: "Email is Invalid"
            })
        }
        const user = await Users.findOne({ email })
        if (!user) {
            return res.status(404).send({
                status: 0,
                message: "Email is not registered!"
            })
        }
        const matchPassword = await bcrypt.compareSync(req.body.password, user.password)
        if (!matchPassword) {
            return res.status(400).send({
                status: 0,
                message: "Email or Password is incorrect"
            })
        }
        const token = await jwt.sign({
            _id: user._id,
            email,
            firstName: user.firstName,
        }, process.env.SECRET, { expiresIn: '5h' })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true
        })

        return res.send({
            status: 1,
            message: "Login Successful",
            data: {
                firstName: user.firstName,
                email: user.email,
            }
        })
    } catch (error) {
        return res.send({
            status: 0,
            error: error,
            message: "Something Went Wrong"
        })
    }
})


export default router;