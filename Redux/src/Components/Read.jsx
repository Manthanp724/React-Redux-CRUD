import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserData, handleDelete } from "../app/Features/userDetailSlice";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userDetails);


  useEffect(() => {
    dispatch(getAllUserData());
  }, [dispatch]);

  if (loading) return <h2>loading</h2>;

  return (
    <>
      <h1 className="my-4 text-center">All Data</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {user && user.length > 0 ? (
          user.map((userData) => (
            <div
              key={userData.id}
              className="card shadow m-2"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h2 className="card-title mb-4">Name: {userData.name}</h2>
                <h6 className="card-subtitle mb-2 text-muted">
                  Email: {userData.email}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Age: {userData.age}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Gender: {userData.gender}
                </h6>
              </div>
              <Link className="card-link" role="button" to={`/edit/${userData.id}`}>
                Edit
              </Link>
              {/* Fixed Delete Button */}
              <Link
                className="card-link"
                onClick={() => dispatch(handleDelete(userData.id))}
                role="button"
              >
                Delete
              </Link>
            </div>
          ))
        ) : (
          <h1 className="text-center">User not Found</h1>
        )}
      </div>
    </>
  );
};

export default Read;
