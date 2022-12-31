import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import "../components/StudentStyle.css";




function StudentCreate(){

        const [ alsubject1, setalsubject1] = useState("");
        const [ alsubject2,setalsubject2] = useState("");
        const [ alsubject3, setalsubject3] = useState("");
        const [ alsubject4, setalsubject4] = useState("");
        const [ alsubject5, setalsubject5] = useState("");
        const [ alresult1, setalresult1] = useState("");
        const [ alresult2,setalresult2] = useState("");
        const [ alresult3, setalresult3] = useState("");
        const [alresult4, setalresult4] = useState("");
        const [ alresult5, setalresult5] = useState("");
        const [listOfresults, setlistOfresults] = useState([]);


    const createresult = () => {
        Axios.post("http://localhost:8000/api/student/", {
            alsubject1,
            alsubject2,
            alsubject3,
            alsubject4,
            alsubject5,
            alresult1,
            alresult2,
            alresult3,
            alresult4,
            alresult5,

        }).then((response) => {
            setlistOfresults([
            ...listOfresults,
            {   alsubject1,
                alsubject2,
                alsubject3,
                alsubject4,
                alsubject5,
                alresult1,
                alresult2,
                alresult3,
                alresult4,
                alresult5,
            },
          ]);
        });

        alert("Successfully Result Added");
        
      };


return(

<div>




<form>
      <h1>Enter Student A/L</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">sub 1:</label>
          <input type="text"  onChange={(event) => {setalsubject1(event.target.value);}} />          
        </div>



       



       <div class="form-group">
            <label for="exampleInputEmail1">result1:</label>
            <input type="text" onChange={(event) => {setalresult1(event.target.value);}}/>            
          </div>



         



         <div class="form-group">
            <label for="exampleInputEmail1">sub 2:</label>
            <input type="text" onChange={(event) => {setalsubject2(event.target.value);}}/>           
          </div>



        



         <div class="form-group">
            <label for="exampleInputEmail1">result2:</label>
            <input type="text" onChange={(event) => {setalresult2(event.target.value);}}/>  
          </div>



         



         <div class="form-group">
            <label for="exampleInputEmail1">sub3</label>
            <input type="text" onChange={(event) => {setalsubject3(event.target.value);}}/>  
          </div>



         



         <div class="form-group">
            <label for="exampleInputEmail1"> result3:</label>
            <input type="text" onChange={(event) => {setalresult3(event.target.value);}} />  
          </div>



         



         <div class="form-group">
            <label for="exampleInputEmail1">sub 4:</label>
            <input type="text" onChange={(event) => {setalsubject4(event.target.value);}}/>  
          </div>



         



         <div class="form-group">
            <label for="exampleInputEmail1">result:</label>
            <input type="text" onChange={(event) => {setalresult4(event.target.value);}}/>  
          </div>



         



         <div class="form-group">
            <label for="exampleInputEmail1">sub5:</label>
            <input type="text" onChange={(event) => {setalsubject5(event.target.value);}}/>  
          </div>



         <div class="form-group">
            <label for="exampleInputEmail1">resullt 5:</label>
            <input type="text" onChange={(event) => {setalresult5(event.target.value);}}/>  
          </div>



       





       <button type="submit" class="btn btn-primary" onClick={createresult}>Submit</button>
      </form>





</div>



);






}


export default StudentCreate;