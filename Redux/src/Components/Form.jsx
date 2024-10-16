import React, { useState } from "react";
import "../CSS/Form.css" 
import {useDispatch} from "react-redux"
import { createUser } from "../app/Features/userDetailSlice";
import { useNavigate } from "react-router-dom";


const Form = () => {

    // this become old way to take values

    // const [name, setname] = useState()
    // const [email , setEmail] = useState()

    // New Method to use useState()

    const navigate = useNavigate()

    const[ users , setUsers] = useState({}) // initialize with an empty object

    const getAllUserData = async (e) => {
        setUsers({...users , [e.target.name] : e.target.value}) // in the place of value in old method we write here name for every field
    }

    const dispatch = useDispatch()

    const submitFormHandlar = async (e) => {
        e.preventDefault()
        console.log("Users..",users);
        dispatch(createUser(users))
        navigate("/read")  
    }

  return (
    <>
    <h2 className="my-2 text-center">Fill the Data</h2>
      <form className="custom-form" onSubmit={submitFormHandlar}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter your name"
            name="name"
            onChange={getAllUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            name="email"
            onChange={getAllUserData}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="ageInput" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="ageInput"
            placeholder="Enter your age"
            name="age"
            onChange={getAllUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" aria-label="Gender select" name="gender" onChange={getAllUserData}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary custom-submit-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
