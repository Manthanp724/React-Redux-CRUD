import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateUser } from '../app/Features/userDetailSlice'

const Update = () => {

    const {id} = useParams()

    const dispatch = useDispatch();


    const [updateUserData , setUpdatedUserData] = useState({});

    const {user , loading} = useSelector((state) => state.userDetails); // Get users array from Redux state
    console.log("USER: ", user);
   

    // console.log("updatedUserData" , updateUserData);

    useEffect( () => {
        if(id){
            // here we get a single user  const singleUser = user.filter((ele) => ele.id == id); // we are filtering one user from user array through id and check if the user.id == id then we got the single user.
            const singleUser = user.filter((ele) => ele.id == id); // we are filtering one user from user array through id and check if the user.id == id then we got the single user.
            if(singleUser){
                setUpdatedUserData(singleUser)
            }
            console.log("Single User: ", singleUser[0]); 
        }
    },[user , id])


    const handleInputChange = (e) => {
        setUpdatedUserData({
            ...updateUserData , [e.target.name] : [e.target.value]
        });

    }

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateUserData))
    }


    


  return (
     <>
    <h2 className="my-2 text-center">Update the Data</h2>
      <form className="custom-form" onSubmit={handleSubmitBtn}>
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
            value={updateUserData.name} // Display the user name in the input
            onChange={handleInputChange} // Update state on input change
            // onChange={getAllUserData}
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
            value={updateUserData.email} // Display the user name in the input
            onChange={handleInputChange} // Update state on input change
            // onChange={getAllUserData}
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
            value={updateUserData.age} // Display the user name in the input
            onChange={handleInputChange} // Update state on input change
            // onChange={getAllUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select"
                    aria-label="Gender select" 
                    name="gender" 
                    value={updateUserData.gender} // Display the user name in the input
                    onChange={handleInputChange} // Update state on input change 
            >
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
  )
}

export default Update
