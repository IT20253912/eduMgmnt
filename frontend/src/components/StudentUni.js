import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import "../components/StudentStyle.css";




function StudentCreate(){

        const [ unisubject1, setunisubject1] = useState("");
        const [ unisubject2,setunisubject2] = useState("");
        const [ unisubject3, setunisubject3] = useState("");
        const [ unisubject4, setunisubject4] = useState("");
        const [ uniresult1, setuniresult1] = useState("");
        const [ uniresult2, setuniresult2] = useState("");
        const [ uniresult3,setuniresult3] = useState("");
        const [ uniresult4, setuniresult4] = useState("");
        const [listOfresults, setlistOfresults] = useState([]);


    const createresult = () => {
        Axios.post("http://localhost:8000/api/student/", {
            unisubject1,
            unisubject2,
            unisubject3,
            unisubject4,
            uniresult1,
            uniresult2,
            uniresult3,
            uniresult4,
         

        }).then((response) => {
            setlistOfresults([
            ...listOfresults,
            {   unisubject1,
                unisubject2,
                unisubject3,
                unisubject4,
                uniresult1,
                uniresult2,
                uniresult3,
                uniresult4,
               
            },
          ]);
        });

        alert("Successfully Result Added");
        
      };


return(

<div>




<form>
        <div class="form-group">
          <label for="exampleInputEmail1">sub 1:</label>
          <input type="text"  onChange={(event) => {setunisubject1(event.target.value);}} />          
        </div>
         <div class="form-group">
            <label for="exampleInputEmail1">result1:</label>
            <input type="text" onChange={(event) => {setuniresult1(event.target.value);}}/>            
          </div>

         <div class="form-group">
            <label for="exampleInputEmail1">sub 2:</label>
            <input type="text" onChange={(event) => {setunisubject2(event.target.value);}}/>           
          </div>
         <div class="form-group">
            <label for="exampleInputEmail1">result2:</label>
            <input type="text" onChange={(event) => {setuniresult2(event.target.value);}}/>  
          </div>

         <div class="form-group">
            <label for="exampleInputEmail1">sub3</label>
            <input type="text" onChange={(event) => {setunisubject3(event.target.value);}}/>  
          </div>
         <div class="form-group">
            <label for="exampleInputEmail1"> result3:</label>
            <input type="text" onChange={(event) => {setuniresult3(event.target.value);}} />  
          </div>

         <div class="form-group">
            <label for="exampleInputEmail1">sub 4:</label>
            <input type="text" onChange={(event) => {setunisubject4(event.target.value);}}/>  
          </div>
         <div class="form-group">
            <label for="exampleInputEmail1">result:</label>
            <input type="text" onChange={(event) => {setuniresult4(event.target.value);}}/>  
          </div>      

       <button type="submit" class="btn btn-primary" onClick={createresult}>Submit</button>
      </form>
</div>

);

}


export default StudentCreate;