import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import "../components/StudentStyle.css";
import "../../node_modules/mdb-ui-kit/css/mdb.min.css";
import background from "../../src/images/pic03.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';



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

        <div>

            <form>

                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Citizen Details</button>
                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Citizen O/L Details</button>
                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Citizen A/L Details</button>
                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Citizen Univercity Details</button>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                            <p class="fw-bold">Citizen Personal Details</p>


                            <table >
                                <thead class="table-primary">

                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table-light">
                                            <div class="form-group">
                                                <i><p class="font-weight-bold">full name</p></i>
                                                <input type="text" class="form-control" placeholder='Enter full name' onChange={(event) => { setfullname(event.target.value); }} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="table-light">
                                            <div class="form-group">
                                                <i><p class="font-weight-bold">NIC number</p></i>
                                                <input type="text" class="form-control" placeholder='Enter nic number' onChange={(event) => { setnic(event.target.value); }} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="table-light">
                                            <div class="form-group">
                                                <i><p class="font-weight-bold">Gender</p></i>
                                                <input type="text" class="form-control" placeholder='Enter gender' onChange={(event) => { setgender(event.target.value); }} />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="table-light">
                                            <div class="form-group">
                                                <i><p class="font-weight-bold">Birth of Date</p></i>
                                                <input type="date" class="form-control" placeholder='Subject Name' onChange={(event) => { setbod(event.target.value); }} />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                            <p class="fw-bold">Citizen Ordinary Level (O-level) Details</p>

                            <i><p class="font-weight-bold">O/L index number</p></i>
                            <input type="text" class="form-control" placeholder='Enter index number' onChange={(event) => { setolindex(event.target.value); }} />
                            <br />
                            <i><p class="font-weight-bold">O/L School Name</p></i>
                            <input type="text" class="form-control" placeholder='Enter School Name' onChange={(event) => { setolschool(event.target.value); }} />

                            <input type="text" class="form-control" placeholder='Student ID' onChange={(event) => { setsid(event.target.value); }} hidden />
                            <br />
                            <i><p class="font-weight-bold">O/L Results</p></i>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject1(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult1(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject2(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult2(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject3(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult3(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject4(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult4(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject5(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult5(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject6(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult6(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject7(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult7(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject8(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult8(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject9(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult9(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setolsubject10(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setolresult10(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/><br/>

                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <h1>Citizen A/L Details</h1>

                            <i><p class="font-weight-bold">A/L Index number</p></i>
                            <input type="text" class="form-control" placeholder='A/L Index number' onChange={(event) => { setalindex(event.target.value); }} />
                            <br/>
                            <i><p class="font-weight-bold">A/L School</p></i>
                            <input type="text" class="form-control" placeholder='A/L School' onChange={(event) => { setalschool(event.target.value); }} />
                            <br />
                            <i><p class="font-weight-bold">A/L Results</p></i>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject1(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setalresult1(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject2(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setalresult2(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject3(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setalresult3(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject4(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setalresult4(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setalsubject5(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setalresult5(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/><br /><br />
                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            <h1>uni</h1>

                            <i><p class="font-weight-bold">Univercity name</p></i>
                            <input type="text" class="form-control" placeholder='Univercity name' onChange={(event) => { setuniname(event.target.value); }} />
                            <br/>
                            <i><p class="font-weight-bold">Degree Programe</p></i>
                            <input type="text" class="form-control" placeholder='Degree Programe' onChange={(event) => { setdegreename(event.target.value); }} />
                            <br/>
                            <i><p class="font-weight-bold">Degree class</p></i>
                            <input type="text" class="form-control" placeholder='Degree class' onChange={(event) => { setdegreeclass(event.target.value); }} />
                            <br/>
                            
                            <i><p class="font-weight-bold">Final year Univercity Results</p></i>

                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setunisubject1(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setuniresult1(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setunisubject2(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setuniresult2(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setunisubject3(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setuniresult3(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder='Subject Name' onChange={(event) => { setunisubject4(event.target.value); }} />
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-control" onChange={(event) => { setuniresul4(event.target.value); }} >
                                        <option selected>Choose Result</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
    
                            <button type="submit" class="btn btn-primary" onClick={createresult}>Submit</button>
                            <br /><br /><br />
                        </div>
                    </div>
                </div>
            </form>

        </div>


    );

}


export default StudentCreate;