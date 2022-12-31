import React , {useState,useEffect} from 'react';
import Axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";

export default function Updatetest(){
    const { ResultID } = useParams();
    const [sid, setsid] = useState('');
    const [olsubject1, setolsubject1] = useState('');
    const [olresult1, setolresult1] = useState('');
    const [olsubject2, setolsubject2] = useState('');
    const [olresult2, setolresult2] = useState('');
    const [olsubject3, setolsubject3] = useState('');
    const [olresult3, setolresult3] = useState('');
    const [olsubject4, setolsubject4] = useState('');
    const [olresult4, setolresult4] = useState('');
    const [olsubject5, setolsubject5] = useState('');
    const [olresult5, setolresult5] = useState('');
    const [olsubject6, setolsubject6] = useState('');
    const [olresult6, setolresult6] = useState('');
    const [olsubject7, setolsubject7] = useState('');
    const [olresult7, setolresult7] = useState('');
    const [olsubject8, setolsubject8] = useState('');
    const [olresult8, setolresult8] = useState('');
    const [olsubject9, setolsubject9] = useState('');
    const [olresult9, setolresult9] = useState('');
    const [olsubject10, setolsubject10] = useState('');
    const [olresult10, setolresult10] = useState('');

    const [alsubject1, setalsubject1] = useState('');

    const [alresult1, setalresult1] = useState('');

    const [alsubject2, setalsubject2] = useState('');

    const [alresult2, setalresult2] = useState('');

    const [alsubject3, setalsubject3] = useState('');

    const [alresult3, setalresult3] = useState('');

    const [alsubject4, setalsubject4] = useState('');

    const [alresult4, setalresult4] = useState('');

    const [alsubject5, setalsubject5] = useState('');

    const [alresult5, setalresult5] = useState('');

    const [unisubject1, setunisubject1] = useState('');

    const [uniresult1, setuniresult1] = useState('');

    const [unisubject2, setunisubject2] = useState('');

    const [uniresult2, setuniresult2] = useState('');

    const [unisubject3, setunisubject3] = useState('');

    const [uniresult3, setuniresult3] = useState('');

    const [unisubject4, setunisubject4] = useState('');

    const [uniresul4, setuniresul4] = useState('');

    const [olschool, setolschool] = useState('');

    const [alschool, setalschool] = useState('');

    const [sclershipschool, setsclershipschool] = useState('');

    const [olindex, setolindex] = useState('');

    const [alindex, setalindex] = useState('');
    const [sclershipindex, setsclershipindex] = useState('');
    const [uniname, setuniname] = useState('');
    const [degreename, setdegreename] = useState('');
    const [degreeclass, setdegreeclass] = useState('');
    const [fullname, setfullname] = useState('');
    const [nic, setnic] = useState('');
    const [gender, setgender] = useState('');
    const [bod, setbod] = useState('');

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/student/`+ResultID)
        .then((getData)=>{        
            setsid(getData.data.user.sid);
                 setolsubject1(getData.data.user.olsubject1);
                 setolresult1(getData.data.user.olresult1);
                 setolsubject2(getData.data.user.olsubject2);
                 setolresult2(getData.data.user.olresult2);
                 setolsubject3(getData.data.user.olsubject3);
                 setolresult3(getData.data.user.olresult3);
                 setolsubject4(getData.data.user.olsubject4);
                 setolresult4(getData.data.user.olresult4);
                 setolsubject5(getData.data.user.olsubject5);
                 setolresult5(getData.data.user.olresult5);
                 setolsubject6(getData.data.user.olresult6);
                 setolresult6(getData.data.user.olresult6);
                 setolsubject7(getData.data.user.olsubject7);
                 setolresult7(getData.data.user.olresult7);
                 setolsubject8(getData.data.user.olsubject8);
                 setolresult8(getData.data.user.olresult8);
                 setolsubject9(getData.data.user.olsubject9);
                 setolresult9(getData.data.user.olresult9);
                 setolsubject10(getData.data.user.olsubject10);
                 setolresult10(getData.data.user.olresult10);
                 setalsubject1(getData.data.user.alsubject1);
                 setalresult1(getData.data.user.alresult1);
                 setalsubject2(getData.data.user.alsubject2);
                 setalresult2(getData.data.user.alresult2);
                 setalsubject3(getData.data.user.alsubject3);
                 setalresult3(getData.data.user.alresult3);
                 setalsubject4(getData.data.user.alsubject4);
                 setalresult4(getData.data.user.alresult4);
                 setalsubject5(getData.data.user.alsubject5);
                 setalresult5(getData.data.user.alresult5);
                 setunisubject1(getData.data.user.unisubject1);
                 setuniresult1(getData.data.user.uniresult1);
                 setunisubject2(getData.data.user.unisubject2);
                 setuniresult2(getData.data.user.uniresult2);
                 setunisubject3(getData.data.user.unisubject3);
                 setuniresult3(getData.data.user.uniresult3);
                 setunisubject4(getData.data.user.unisubject4);
                 setuniresul4(getData.data.user.uniresul4);
                 setolschool(getData.data.user.olschool);
                 setalschool(getData.data.user.alschool);
                 setsclershipschool(getData.data.user.sclershipschool);
                 setolindex(getData.data.user.olindex);
                 setalindex(getData.data.user.alindex);
                 setsclershipindex(getData.data.user.sclershipindex);
                 setuniname(getData.data.user.uniname);
                 setdegreename(getData.data.user.degreename);
                 setdegreeclass(getData.data.user.degreeclass);
                 setfullname(getData.data.user.fullname);
                 setnic(getData.data.user.nic);
                 setgender(getData.data.user.gender);
                 setbod(getData.data.user.bod);
        })
    },[])
console.log(nic);

    const sendDataToAPI =()=>{
        const citizendata = {
            
                    sid,
                    olsubject1,
                    olresult1,
                    olsubject2,
                    olresult2,
                    olsubject3,
                    olresult3,
                    olsubject4,
                    olresult4,
                    olsubject5,
                    olresult5,
                    olsubject6,
                    olresult6,
                    olsubject7,
                    olresult7,
                    olsubject8,
                    olresult8,
                    olsubject9,
                    olresult9,
                    olsubject10,
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
        }
        Axios.put(`http://localhost:8000/api/student/${ResultID}`,citizendata)
        .then((res)=>{
            alert("Update Successful");  
            window.location(-1);   
        })
        .catch((err)=>{
            alert("Update Unsuccessful");
        })
    }
 
    return(
        <div>
            <form>
                
                <input type="text" value={nic} name="OwnerNic" onChange={(citizendata) => setnic(citizendata.target.value)}  placeholder="Owner NIC" /><br/>
                <input type="text" value={olresult1} name="OwnerEmail" onChange={(citizendata) => setolresult1(citizendata.target.value)}  placeholder="Owner Email" /><br/>
                
                
                <button type="submit" onClick={sendDataToAPI}>Edit citizendata</button>
            </form>
        </div>
    );
}