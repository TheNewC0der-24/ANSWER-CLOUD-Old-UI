import React, { useState } from 'react';
import styles from './ForgetPassword.module.css';
import { useNavigate } from 'react-router-dom';

import password from '../../assets/Images/password.png';

import axios from 'axios';

const ForgetPassword = () => {
    const navigate = useNavigate();

    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);
    const [create, setCreate] = useState({password: "", confirmPassword: "",});

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/login');
        setCreate({password: "", confirmPassword: ""});

    //     axios.post("https://jsonplaceholder.typicode.com/todos/1", {
    //       method: "POST",
    //     headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       data:(create.detail,create.job,create.positionCode)
    //   })
    //       .then(res => {
    //         console.log(res.data);
    //         setNotes(notes.concat(res.data));
    //       })

          
            const note = {"id": "61322f195153781a8ca8d0e06",
              "password":   create.password,
              "confirmPassword": create.confirmPassword
          };
              console.log(note);
              setNotes(notes.concat(note));
              console.log("Adding a new one data")
              console.log(notes.concat(note));
          
              console.log("Adding a new data")
              console.log(notes);
        }
        
    const handleOnChange = (e) => {
        setCreate ({...create, [e.target.name]: e.target.value});
    }
        
    return (
        <>
            <div className="container">
                <div className="d-grid col-md-6 mt-5 mx-auto">
                    <div className="card border-dark">
                        <h3 className={`${styles.cardHeader} card-header bg-dark text-white text-center`}>Create New Password</h3>
                        <div className="card-body">
                            <img src={password} className={`${styles.img} d-flex justify-content-center mx-auto mt-3 img-fluid p-3`} alt="forget password" width={"150px"} />
                            <h5 className="text-center my-3">Your New Password Must Be Different <br />from Previously Used Password.</h5>
                            <form>
                                <div className="mb-3">
                                    <input type="password" className='form-control' id="password" onChange={handleOnChange} name='password' value={create.password} placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className='form-control' id="confirmPassword" onChange={handleOnChange} name='confirmPassword' value={create.confirmPassword} placeholder="Confirm Password" />
                                </div>
                                <div className='d-flex justify-content-center mx-auto'>
                                    <button onClick={handleClick} className='btn btn-dark'>Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword;