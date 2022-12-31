import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import "../components/StudentStyle.css";
import "../../node_modules/mdb-ui-kit/css/mdb.min.css";
import "../components/Multiform.css";
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



    <div>

      <h1>Citizen O/L results:-</h1>



      <h1 class="page-header">Multi-Step Form with CSS Only</h1>
      
        <form action="" role="form">
          <input id='step2' type='checkbox' />
            <input id='step3' type='checkbox' />

              <div id="part1" class="form-group">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title">Part 1</h3>
                  </div>
                  <input type="text" id="name" class="form-control" placeholder="Full Name" aria-describedby="sizing-addon1" />
                    <div class="btn-group btn-group-lg" role="group" aria-label="...">
                      <label for='step2' id="continue-step2" class="continue">
                        <div class="btn btn-default btn-success btn-lg">Continue</div>
                      </label>
                    </div>
                </div>
              </div>

              <div id="part2" class="form-group">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title">Part 2</h3>
                  </div>
                  <input type="email" id="email" class="form-control" placeholder="Email" />
                    <input type="phone" id="phone" class="form-control" placeholder="Phone" />
                      <input type="number" id="zip" class="form-control" placeholder="Zip Code" />
                        <div class="btn-group btn-group-lg btn-group-justified" role="group" aria-label="...">

                          <label for='step2' id="back-step2" class="back">
                            <div class="btn btn-default btn-primary btn-lg" role="button">Back</div>
                          </label>


                          <label for='step3' id="continue-step3" class="continue">
                            <div class="btn btn-default btn-success btn-lg" role="button">Continue</div>
                          </label>

                        </div>
                      </div>
                    </div>

                    <div id="part3" class="form-group">
                      <div class="panel panel-primary">
                        <div class="panel-heading">
                          <h3 class="panel-title">Part 3</h3>
                        </div>
                        <textarea id="message" class="form-control" placeholder="Message" />
                        <div class="btn-group btn-group-lg" role="group" aria-label="...">
                          <label for='step3' id="back-step3" class="back">
                            <div class="btn btn-default btn-primary btn-lg">Back</div>
                          </label>
                          <label class="continue">
                            <button type="submit" class="btn btn-default btn-success btn-lg">Submit</button>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

            







              );

}


              export default StudentCreate;