import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import { Form, Link,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Input,Button,Logo} from "./index"
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useForm } from 'react-hook-form'
function Signup() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [error, seterror] = useState("")
    const {register,handleSubmit}=useForm()
    const create =async(data)=>{
        seterror("")
        try {
              const userData = await authService.createAccount(data)
              if(userData){
                dispatch(login(userData))
              }
              navigate("/")
        } catch (error) {
            seterror(error)
        }
    }
  return (
    <div>
      <div>
        <Logo />
        <h2>Sign up to create account</h2>
        <p>Already have an account?
          <Link to="/login">
          signin
          </Link>
        </p>
        {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(create)}>
        <div>
          <Input
            label = "Full Name : "
            placeholder = "enter your full Name : "
            {...register("name",{
              required: true
            })}
          />
           <Input 
              label="Email : "
              placeholder = "Enter your Email : "
                type="email"
                {...register("email",{
                  required : true,
                  validate : {
                      matchPatern : (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email adress not valid"
                  }
                })}
              />
            <Input 
                label="password"
                placeholder="enter password"
                type="password"
                {...register("password",{
                    required:true
                })}
                />
                <Button
                  type='submit'
                >Create Account</Button>
        </div>
      </form>
      </div>
    </div>
  )
}


export default Signup
