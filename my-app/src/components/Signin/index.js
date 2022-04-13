import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './index.css'
import { toast } from 'react-toastify';
import axios from 'axios'


import { URL } from '../../config'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   
    const history = useHistory();

    const signinUser = () => {
        if (email.length == 0) {
            toast.error("please enter email")
        } else if (password.length == 0) {
         toast.error('please enter password')
        } else {
            const body = {
                email,
                password,
            }

           
            const url = `${URL}/user/signin`

           
            axios.post(url, body).then((response) => {
                
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                     toast.success('Welcome to the application')

                   
                    const { id, firstName, lastName } = result['data']

                    
                    sessionStorage['id'] = id
                    sessionStorage['firstName'] = firstName
                    sessionStorage['lastName'] = lastName
                    sessionStorage['loginStatus'] = 1

                   
                    if(email == 'admin@gmail.com'){
                        history.push("/home")
                    }else{
                        history.push("/employeeshome");

                    }
                   
                } else {
                    toast.error('Invalid user name or password')
                }
            })
        }
    }

    return (
        <div>
            <center><img src="../../images/icon.jpeg" alt="centered image" height="200" width="300"></img></center>
            <h1 className="title">Signin</h1>

            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Email address
              </label>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Password
              </label>
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                type="password"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                           
                            <button onClick={signinUser} className="btn btn-primary">
                                Signin
              </button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Signin
