import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import "../components/StudentStyle.css";




function StudentCreate(){

        const [ sid, setsid] = useState("");
        const [ olsubject1, setolsubject1] = useState("");
        const [ olsubject2, setolsubject2] = useState("");
        const [ olsubject3, setolsubject3] = useState("");
        const [ olsubject4, setolsubject4] = useState("");
        const [ olsubject5, setolsubject5] = useState("");
        const [ olsubject6,setolsubject6] = useState("");
        const [ olsubject7,setolsubject7] = useState("");
        const [ olsubject8,setolsubject8] = useState("");
        const [ olsubject9,setolsubject9] = useState("");
        const [ olsubject10,setolsubject10] = useState("");
        const [ olresult1, setolresult1] = useState("");
        const [ olresult2,setolresult2] = useState("");
        const [ olresult3, setolresult3] = useState("");
        const [ olresult4, setolresult4] = useState("");
        const [ olresult5, setolresult5] = useState("");
        const [ olresult6, setolresult6] = useState("");
        const [ olresult7,setolresult7] = useState("");
        const [ olresult8, setolresult8] = useState("");
        const [ olresult9, setolresult9] = useState("");
        const [ olresult10, setolresult10] = useState("");
        const [listOfresults, setlistOfresults] = useState([]);


    const createresult = () => {
        Axios.post("http://localhost:8000/api/student/", {
            sid,
            olsubject1,
            olsubject2,
            olsubject3,
            olsubject4,
            olsubject5,
            olsubject6,
            olsubject7,
            olsubject8,
            olsubject9,
            olsubject10,
            olresult1,
            olresult2,
            olresult3,
            olresult4,
            olresult5,
            olresult6,
            olresult7,
            olresult8,
            olresult9,
            olresult10,

        }).then((response) => {
            setlistOfresults([
            ...listOfresults,
            {   
                sid,
                olsubject1,
                olsubject2,
                olsubject3,
                olsubject4,
                olsubject5,
                olsubject6,
                olsubject7,
                olsubject8,
                olsubject9,
                olsubject10,
                olresult1,
                olresult2,
                olresult3,
                olresult4,
                olresult5,
                olresult6,
                olresult7,
                olresult8,
                olresult9,
                olresult10,
    
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
          <input type="text"  onChange={(event) => {setsid(event.target.value);}} />          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">sub 1:</label>
          <input type="text"  onChange={(event) => {setolsubject1(event.target.value);}} />          
        </div>

       <div class="form-group">
            <label for="exampleInputEmail1">result1:</label>
            <input type="text" onChange={(event) => {setolresult1(event.target.value);}}/>            
          </div>


         <div class="form-group">
            <label for="exampleInputEmail1">sub 2:</label>
            <input type="text" onChange={(event) => {setolsubject2(event.target.value);}}/>           
          </div>

         <div class="form-group">
            <label for="exampleInputEmail1">result2:</label>
            <input type="text" onChange={(event) => {setolresult2(event.target.value);}}/>  
          </div>


         <div class="form-group">
            <label for="exampleInputEmail1">sub3</label>
            <input type="text" onChange={(event) => {setolsubject3(event.target.value);}}/>  
          </div>

         <div class="form-group">
            <label for="exampleInputEmail1"> result3:</label>
            <input type="text" onChange={(event) => {setolresult3(event.target.value);}} />  
          </div>


         <div class="form-group">
            <label for="exampleInputEmail1">sub 4:</label>
            <input type="text" onChange={(event) => {setolsubject4(event.target.value);}}/>  
          </div>

         <div class="form-group">
            <label for="exampleInputEmail1">result:</label>
            <input type="text" onChange={(event) => {setolresult4(event.target.value);}}/>  
          </div>


         <div class="form-group">
            <label for="exampleInputEmail1">sub5:</label>
            <input type="text" onChange={(event) => {setolsubject5(event.target.value);}}/>  
          </div>

         <div class="form-group">
            <label for="exampleInputEmail1">resullt 5:</label>
            <input type="text" onChange={(event) => {setolresult5(event.target.value);}}/>  
          </div>


          <div class="form-group">
          <label for="exampleInputEmail1">sub 6:</label>
          <input type="text"  onChange={(event) => {setolsubject6(event.target.value);}} />          
        </div>

       <div class="form-group">
            <label for="exampleInputEmail1">result6:</label>
            <input type="text" onChange={(event) => {setolresult6(event.target.value);}}/>            
          </div>

          <div class="form-group">
          <label for="exampleInputEmail1">sub 7:</label>
          <input type="text"  onChange={(event) => {setolsubject7(event.target.value);}} />          
        </div>
       <div class="form-group">
            <label for="exampleInputEmail1">result7:</label>
            <input type="text" onChange={(event) => {setolresult7(event.target.value);}}/>            
          </div>

          <div class="form-group">
          <label for="exampleInputEmail1">sub 8:</label>
          <input type="text"  onChange={(event) => {setolsubject8(event.target.value);}} />          
        </div>

       <div class="form-group">
            <label for="exampleInputEmail1">result8:</label>
            <input type="text" onChange={(event) => {setolresult8(event.target.value);}}/>            
          </div>

          <div class="form-group">
          <label for="exampleInputEmail1">sub 9:</label>
          <input type="text"  onChange={(event) => {setolsubject9(event.target.value);}} />          
        </div>



       



       <div class="form-group">
            <label for="exampleInputEmail1">result9:</label>
            <input type="text" onChange={(event) => {setolresult9(event.target.value);}}/>            
          </div>

          <div class="form-group">
          <label for="exampleInputEmail1">sub 10:</label>
          <input type="text"  onChange={(event) => {setolsubject10(event.target.value);}} />          
        </div>

       <div class="form-group">
            <label for="exampleInputEmail1">result10:</label>
            <input type="text" onChange={(event) => {setolresult10(event.target.value);}}/>            
          </div>


       <button type="submit" class="btn btn-primary" onClick={createresult}>Submit</button>
      </form>





</div>



);






}


export default StudentCreate;