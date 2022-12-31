import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import "../components/StudentStyle.css";
import "../../node_modules/mdb-ui-kit/css/mdb.min.css";
import background from "../../src/images/pic03.jpg";




function StudentCreate() {

    const [sid, setsid] = useState("");
    const [olsubject1, setolsubject1] = useState("");
    const [olsubject2, setolsubject2] = useState("");
    const [olsubject3, setolsubject3] = useState("");
    const [olsubject4, setolsubject4] = useState("");
    const [olsubject5, setolsubject5] = useState("");
    const [olsubject6, setolsubject6] = useState("");
    const [olsubject7, setolsubject7] = useState("");
    const [olsubject8, setolsubject8] = useState("");
    const [olsubject9, setolsubject9] = useState("");
    const [olsubject10, setolsubject10] = useState("");
    const [olresult1, setolresult1] = useState("");
    const [olresult2, setolresult2] = useState("");
    const [olresult3, setolresult3] = useState("");
    const [olresult4, setolresult4] = useState("");
    const [olresult5, setolresult5] = useState("");
    const [olresult6, setolresult6] = useState("");
    const [olresult7, setolresult7] = useState("");
    const [olresult8, setolresult8] = useState("");
    const [olresult9, setolresult9] = useState("");
    const [olresult10, setolresult10] = useState("");
    const [alsubject1, setalsubject1] = useState("");
    const [alresult1, setalresult1] = useState("");
    const [alsubject2, setalsubject2] = useState("");
    const [alresult2, setalresult2] = useState("");
    const [alsubject3, setalsubject3] = useState("");
    const [alresult3, setalresult3] = useState("");
    const [alsubject4, setalsubject4] = useState("");
    const [alresult4, setalresult4] = useState("");
    const [alsubject5, setalsubject5] = useState("");
    const [alresult5, setalresult5] = useState("");
    const [unisubject1, setunisubject1] = useState("");
    const [uniresult1, setuniresult1] = useState("");
    const [unisubject2, setunisubject2] = useState("");
    const [uniresult2, setuniresult2] = useState("");
    const [unisubject3, setunisubject3] = useState("");
    const [uniresult3, setuniresult3] = useState("");
    const [unisubject4, setunisubject4] = useState("");
    const [uniresul4, setuniresul4] = useState("");
    const [olschool, setolschool] = useState("");
    const [alschool, setalschool] = useState("");
    const [sclershipschool, setsclershipschool] = useState("");
    const [olindex, setolindex] = useState("");
    const [alindex, setalindex] = useState("");
    const [sclershipindex, setsclershipindex] = useState("");
    const [uniname, setuniname] = useState("");
    const [degreename, setdegreename] = useState("");
    const [degreeclass, setdegreeclass] = useState("");
    const [fullname, setfullname] = useState("");
    const [nic, setnic] = useState("");
    const [gender, setgender] = useState("");
    const [bod, setbod] = useState("");
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
            alsubject1,
            alresult1,
            alsubject2,
            alresult2,
            alsubject3,
            alresult3,
            alsubject4,
            alresult4,
            alsubject5,
            alresult5,
            unisubject1,
            uniresult1,
            unisubject2,
            uniresult2,
            unisubject3,
            uniresult3,
            unisubject4,
            uniresul4,
            olschool,
            alschool,
            sclershipschool,
            olindex,
            alindex,
            sclershipindex,
            uniname,
            degreename,
            degreeclass,
            fullname,
            nic,
            gender,
            bod,

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
                    alsubject1,
                    alresult1,
                    alsubject2,
                    alresult2,
                    alsubject3,
                    alresult3,
                    alsubject4,
                    alresult4,
                    alsubject5,
                    alresult5,
                    unisubject1,
                    uniresult1,
                    unisubject2,
                    uniresult2,
                    unisubject3,
                    uniresult3,
                    unisubject4,
                    uniresul4,
                    olschool,
                    alschool,
                    sclershipschool,
                    olindex,
                    alindex,
                    sclershipindex,
                    uniname,
                    degreename,
                    degreeclass,
                    fullname,
                    nic,
                    gender,
                    bod,

                },
            ]);
        });

        alert("Successfully Result Added");

    };


    return (
      


        <div style={{ backgroundImage: `url(${background})`}}>

            <h1>Citizen O/L results:-</h1>


            <table class="table" width="100%">
                <thead>

                </thead>
                <tbody>
                    <tr>

                        <td width="50%">

                            <table>
                                <thead>

                                </thead>
                                <tbody>

                                        <form>
                                                <input type="text" class="form-control" placeholder='Student ID' onChange={(event) => { setsid(event.target.value); }} hidden/>
                                         
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject1(event.target.value); }} hidden/>
                                                                        
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult1(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                         
                            
                                           
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject2(event.target.value); }} hidden/>
                                                                                   
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult2(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                
                        
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject3(event.target.value); }} hidden/>
             
                                                                           
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult3(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                   
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject4(event.target.value); }} hidden/>
                                                                
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult4(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                 
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject5(event.target.value); }} hidden/>
                                 
                      
                                                                  
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult5(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                          
                         
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject6(event.target.value); }} hidden/>
                                                        
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult6(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                             
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject7(event.target.value); }} hidden/>
                                                                         
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult7(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                              
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject8(event.target.value); }} hidden/>
                                                                    
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult8(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                       
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject9(event.target.value); }} hidden/>
                                                                       
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult9(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                             
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject10(event.target.value); }} hidden/>
                                                             
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult10(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                               
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject1(event.target.value); }} hidden/>
                                                                  
                                            <select id="inputState" class="form-control"  onChange={(event) => { setalresult1(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                              
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject2(event.target.value); }} hidden/>
                                                                 
                                            <select id="inputState" class="form-control"  onChange={(event) => { setalresult2(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
             
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject3(event.target.value); }} hidden/>
                                                                      
                                            <select id="inputState" class="form-control"  onChange={(event) => { setalresult3(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                        
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject4(event.target.value); }} hidden/>
                                                                 
                                            <select id="inputState" class="form-control"  onChange={(event) => { setalresult4(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                       
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject5(event.target.value); }} hidden/>
                                                                  
                                            <select id="inputState" class="form-control"  onChange={(event) => { setalresult5(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                   
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setunisubject1(event.target.value); }} hidden/>
                                                                 
                                            <select id="inputState" class="form-control"  onChange={(event) => { setuniresult1(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                          
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setunisubject2(event.target.value); }} hidden/>
                                                                 
                                            <select id="inputState" class="form-control"  onChange={(event) => { setuniresult2(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                     
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setunisubject3(event.target.value); }} hidden/>
                                                                           
                                            <select id="inputState" class="form-control"  onChange={(event) => { setuniresult3(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                    
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setunisubject4(event.target.value); }} hidden/>
                                                                  
                                            <select id="inputState" class="form-control"  onChange={(event) => { setuniresul4(event.target.value); }} hidden>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                         
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolschool(event.target.value); }} hidden/>
                               
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalschool(event.target.value); }} hidden/>
                          
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setsclershipschool(event.target.value); }} hidden/>
                                 
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolindex(event.target.value); }} hidden/>
                             
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalindex(event.target.value); }} hidden/>
                           
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setsclershipindex(event.target.value); }} hidden/>
                            
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setuniname(event.target.value); }} hidden/>
                               
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setdegreename(event.target.value); }} hidden/>
                              
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setdegreeclass(event.target.value); }} hidden/>
                                                </form> 
                                    <tr>
                                        <th scope="row">29</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setfullname(event.target.value); }} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">30</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setnic(event.target.value); }} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">31</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setgender(event.target.value); }} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">32</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setbod(event.target.value); }} />
                                            </div>
                                        </td>
                                    </tr>












                                </tbody>
                            </table>

                        </td>
                        <td width="50%">

                            <div >

                                <center>
                                <img src={require('../../src/images/pic02.png')} width="100%"/>
                                </center>
                            </div>


                        </td>
                        <td></td>

                    </tr>
                </tbody>
            </table>

            <button type="submit" class="btn btn-primary" onClick={createresult}>Submit</button>

            </div>
    );

}


export default StudentCreate;