import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";




export default function Data() {
  const [Data, setData] = useState([]);
  const [SearchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    function getData() {
   
      axois.get("http://localhost:8000/api/student/all")
        .then((res) => {
          
          setData(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getData();
  }, []);


  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  }

  const deleteData = (citizendata) => {
    var result = window.confirm("Do you wont to Delete?",refreshPage());

    if (result === true) {
      axois
        .delete(`http://localhost:8000/api/student/${citizendata._id}`)
        .then((res) => {}).getData()
        .catch((citizendata) => {
          alert(citizendata);
        });
    } else {
      citizendata.preventDefault();
    }
  };

  const [serQuary,setSerQuary]=useState("");

  function searchIncome(event){
        
        setSerQuary(event.target.value);

  }

  console.log(serQuary);

  return (
    <div className="main-container">

        
        <div className="body-container clearfix">

            <div className="order-section-one-container ">
                <div className="order-section-one-left ">
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                      ALL Data
                    </h3>
                </div>
                <div className="order-section-one-right">
                  <input onChange={searchIncome} type="search" placeholder="Search" className="search-box" />
                </div>
            </div>
     
            <div className="order-section-two-container">     
                <table Class = "table">
                    <thead id="app-table">

                      <tr >

                        <th className="order-table-header-col-1" scope="col">#</th>
                        <th className="order-table-header-col-1" scope="col">Citizen ID</th>
                        <th className="order-table-header-col-1" scope="col">Name</th>
                        <th className="order-table-header-col-1" scope="col">NIC</th>
                        <th className="order-table-header-col-1" scope="col">Gender</th>
                        <th className="order-table-header-col-1" scope="col">bod</th>
                        <th className="order-table-header-col-1" scope="col">Action</th>

                      </tr>

                    </thead>

                    <tbody>
                    {Data.map((citizendata, index) =>(
                        <tr className="order-table-row" key = {citizendata._id}>

                            <th className="order-table-col-1" scope="row">{index+1}</th>
                            <td className="order-table-col-1">
                                <a href={'/details/'+citizendata._id} style= {{textDecoration:'none'}}>
                                {citizendata._id}
                                </a>
                            </td>
                            <td className="order-table-col-1">{citizendata.name}</td>
                            <td className="order-table-col-1">{citizendata.nic}</td>
                            <td className="order-table-col-1">{citizendata.gender}</td>
                            <td className="order-table-col-1">{citizendata.bod}</td>
                            <td id="action-button">
                            <a href="">
                                <button id="table-button" className="btn btn-outline-danger btn-sm">
                                  <i className="fas fa-trash-alt"></i>&nbsp;ol result 
                                </button>
                              </a>
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm">
                                  <i className="fas fa-trash-alt"></i>&nbsp;al result
                                </button>
                              </a>
                                
                              <a href={"./update/"+citizendata._id} style={{textDecoration:'none'}}>
                                <button id="table-button" className="btn btn-outline-primary btn-sm" >
                                    <i className="fas fa-edit" ></i>&nbsp;Edit
                                </button>
                              </a>
                              &nbsp;
                              <a href="#">
                                <button id="table-button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteData(citizendata)}}>
                                  <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                </button>
                              </a>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    );
}