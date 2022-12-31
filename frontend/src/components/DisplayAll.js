import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";




function DisplayAll(){
    const [listOfresults, setlistOfresults] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/student/all").then((response) => {
            setlistOfresults(response.data);
  
  
        });
      }, [])

      



    return(
<div>
<h1>chatudu</h1>
<div className="table-responsive">
                            <table className="table" id="assignLabsTable">
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
                                                            
                                <td className="crs-td">{student.olsubject1}</td>
                                <td className="crs-td">{student.olresult1}</td>
                                <td className="crs-td">{student.olsubject2}</td>
                                <td className="crs-td">{student.olresult2}</td>
                                <td className="crs-td">{student.olsubject3}</td>
                                <td className="crs-td">{student.olresult3}</td>
                                <td className="crs-td">{student.olsubject4}</td>
                                <td className="crs-td">{student.olresult4}</td>
                                <td className="crs-td">{student.olsubject5}</td>
                                <td className="crs-td">{student.olresult5}</td>
                               
                                </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>






</div>




    )



}


export default DisplayAll;