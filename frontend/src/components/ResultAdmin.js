import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import "../components/StudentStyle.css";



function ResultAdmin(){
    const [listOfresults, setlistOfresults] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/student/all").then((response) => {
            setlistOfresults(response.data);
  
  
        });
      }, [])

      



    return(
<div>

<div className="table-responsive">
                            <table className="table table-striped custom-table" id="assignLabsTable">
                                <thead>
                                <tr>
                                    <th scope="col">Student ID</th>
                                    <th scope='col'>Subject Name1</th>
                                    <th scope="col">Subject Result1</th>
                                    <th scope='col'>Subject Name2</th>
                                    <th scope="col">Subject Result2</th>
                                    <th scope='col'>Subject Name3</th>
                                    <th scope="col">Subject Result3</th>
                                    <th scope='col'>Subject Name4</th>
                                    <th scope="col">Subject Result4</th>
                                    <th scope='col'>Subject Name5</th>
                                    <th scope="col">Subject Result5</th>
                                    <th scope="col">Action</th>

                                
                                </tr>
                                </thead>
                                <tbody>
                                {listOfresults && listOfresults.map((student, i) => (
                                <tr class="crs-tr" data-status="active">

                                <td className="crs-td">{student._id}</td>
                                                            
                                <td className="crs-td">{student.alsubject1}</td>
                                <td className="crs-td">{student.alresult1}</td>
                                <td className="crs-td">{student.alsubject2}</td>
                                <td className="crs-td">{student.alresult2}</td>
                                <td className="crs-td">{student.alsubject3}</td>
                                <td className="crs-td">{student.alresult3}</td>
                                <td className="crs-td">{student.alsubject4}</td>
                                <td className="crs-td">{student.alresult4}</td>
                                <td className="crs-td">{student.alsubject5}</td>
                                <td className="crs-td">{student.alresult5}</td>
                               
                                </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>






</div>




    )



}


export default ResultAdmin;