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


    return (
        /*
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
        
        */

        //new 


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

                                    <tr>
                                        <th scope="row"></th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Student ID' onChange={(event) => { setsid(event.target.value); }} />
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject1(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult1(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>


                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject2(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult2(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject3(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult3(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject4(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult4(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject5(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult5(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject6(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult6(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject7(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult7(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject8(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult8(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject9(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult9(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject10(event.target.value); }} />
                                            </div>
                                        </td>
                                        <td>
                                        <div class="dropdown">                                          
                                            <select id="inputState" class="form-control"  onChange={(event) => { setolresult10(event.target.value); }}>
                                                <option selected>Choose Result</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>AB</option>
                                            </select>
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



















 





        /*
        
                <section class="vh-100" style="background-color: #eee;">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style="border-radius: 25px;">
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
        
                        <form class="mx-1 mx-md-4">
        
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example1c" class="form-control" />
                              <label class="form-label" for="form3Example1c">Your Name</label>
                            </div>
                          </div>
        
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" class="form-control" />
                              <label class="form-label" for="form3Example3c">Your Email</label>
                            </div>
                          </div>
        
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" class="form-control" />
                              <label class="form-label" for="form3Example4c">Password</label>
                            </div>
                          </div>
        
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4cd" class="form-control" />
                              <label class="form-label" for="form3Example4cd">Repeat your password</label>
                            </div>
                          </div>
        
                          <div class="form-check d-flex justify-content-center mb-5">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label class="form-check-label" for="form2Example3">
                              I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                          </div>
        
                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" class="btn btn-primary btn-lg">Register</button>
                          </div>
        
                        </form>
        
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
        
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image" />
        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        
        
        
        */
    );






}


export default StudentCreate;