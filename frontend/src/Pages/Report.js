import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin7Line } from "react-icons/ri";
import "./Table.css";
// import { setDataProduct } from "../redux/productSlice";

const Report = (useData) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/statusData")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/items")
      .then((user) => setUser(user.data))
      .catch((err) => console.log(err));
  }, []);
  
  const [usee, setUsee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/user")
      // .then((usee) => console.log(usee.data))
      .then((usee) => setUsee(usee.data))
      .catch((err) => console.log(err));
    }, []);
  
  return (
    <div className="mt-4 m-2 mr-2 mb-10">
    <div className="mb-10 bg-slate-200 w-full vh-100 d-flex justify-content-center align-items-center rounded">
         <div className="w-full p-9">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 pb-5 text-center">
          User Report 
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              {/* <th>File</th> */}
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {usee.map((us) => {
              return (
                <tr>
                  <td>{us.firstName}</td>
                  <td>{us.lastName}</td>
                  <td>{us.email}</td>
                  {/* <td>{us.file}</td> */}
                  {/* <td><RiDeleteBin7Line onClick={() => deleteItems(users.name)}/></td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <br/>
        <br/> */}
        </div>
        {/* <div className="w-full p-9">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 pb-5 text-center">
          Items Report 
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Semester</th>
              <th>Unit</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {user.map((users) => {
              return (
                <tr>
                  <td>{users.name}</td>
                  <td>{users.category}</td>
                  <td>{users.price}</td>
                  <td>{users.file}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br/>
        <br/>
      </div> */}
        {/* <div className="w-full p-9">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 pb-5 text-center">
          Status Report 
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Pen Name</th>
              <th>Email</th>
              <th>readed</th>
              <th>read</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.readed}</td>
                  <td>{user.read}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
        <br/>
        <br/>
        <br/>
          <br />
        </div> */}
    </div>
     <div className="mb-10 bg-slate-200 w-full vh-100 d-flex justify-content-center align-items-center rounded">
      <div className="w-full p-9">
        
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 pb-5 text-center">
          Items Report 
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Semester</th>
              <th>Unit</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {user.map((users) => {
              return (
                <tr>
                  <td>{users.name}</td>
                  <td>{users.category}</td>
                  <td>{users.price}</td>
                  <td>{users.file}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br/>
        <br/>
      </div>
      </div>
    <div className="mb-10 bg-slate-200 w-full vh-100 d-flex justify-content-center align-items-center rounded">
         
        <div className="w-full p-9">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 pb-5 text-center">
          Status Report 
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Pen Name</th>
              <th>Email</th>
              <th>readed</th>
              <th>read</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.readed}</td>
                  <td>{user.read}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
        <br/>
        <br/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
  );
};

export default Report;

// });
  // const getAllItems = () => {
  //   fetch(`http://localhost:8000/items`, {
  //     method : "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((user) => {
  //       // console.log(user, "itemsData");
  //       setUser(user.data)
  //   })
  // }

  //deleteItems
  // const deleteItems = (name) => {
  //   if (window.confirm(`Are you sure you want to delete ${name}`)) {
  //     fetch("http://localhost:8000/items", {
  //       method: "POST",
  //       crossDomain: "true",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         name: name,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         alert(data.data);
  //         //  user();
  //       })
  //   } else {
  //   }
  // };
