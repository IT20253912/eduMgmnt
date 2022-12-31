import React , {useState,useEffect} from 'react';
import Axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";

export default function EditAppointment(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [sid , setsid] = useState('');
    const [olsubject1 , setolsubject1] = useState('');
    const [olresult1 , setolresult1] = useState('');
    const [olsubject2 , setolsubject2] = useState('');
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
    const [olresult7, setolsubjec] = useState('');
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
        Axios.get(`http://localhost:8000/api/student/`+id)
        .then((getData)=>{        
            setsid(getData.data.citizendata.sid);
            setolsubject1(getData.data.citizendata.olsubject1);
            setolresult1(getData.data.citizendata.olresult1);
            setolsubject2(getData.data.citizendata.olsubject2);
            setolresult2(getData.data.citizendata.olresult2);
            setolsubject3(getData.data.citizendata.olsubject3);
            setolresult3(getData.data.citizendata.olresult3);
            setolsubject4(getData.data.citizendata.olsubject4);
            setolresult4(getData.data.citizendata.olresult4);
            setolsubject5(getData.data.citizendata.olsubject5);
            setolresult5(getData.data.citizendata.olresult5);
            setolsubject6(getData.data.citizendata.olsubject6);
            setolresult6(getData.data.citizendata.olresult6);
            setolsubject7(getData.data.citizendata.olsubject7);
            setolresult7(getData.data.citizendata.olresult7);
            setolsubject8(getData.data.citizendata.olsubject8);
            setolresult8(getData.data.citizendata.olresult8);
            setolsubject9(getData.data.citizendata.olsubject9);
            setolresult9(getData.data.citizendata.olresult9);
            setolsubject10(getData.data.citizendata.olsubject10);
            setolresult10(getData.data.citizendata.olresult10);
            setalsubject1(getData.data.citizendata.alsubject1);
            setalresult1(getData.data.citizendata.alresult1);
            setalsubject2(getData.data.citizendata.alsubject2);
            setalresult2(getData.data.citizendata.alresult2);
            setalsubject3(getData.data.citizendata.alsubject3);
            setalresult3(getData.data.citizendata.alresult3);
            setalsubject4(getData.data.citizendata.alsubject4);
            setalresult4(getData.data.citizendata.alresult4);
            setalsubject5(getData.data.citizendata.alsubject5);
            setalresult5(getData.data.citizendata.alresult5);
            setunisubject1(getData.data.citizendata.unisubject1);
            setuniresult1(getData.data.citizendata.uniresult1);
            setunisubject2(getData.data.citizendata.unisubject2);
            setuniresult2(getData.data.citizendata.uniresult2);
            setunisubject3(getData.data.citizendata.unisubject3);
            setuniresult3(getData.data.citizendata.uniresult3);
            setunisubject4(getData.data.citizendata.unisubject4);
            setuniresul4(getData.data.citizendata.uniresul4);
            setolschool(getData.data.citizendata.olschool);
            setalschool(getData.data.citizendata.alschool);
            setsclershipschool(getData.data.citizendata.sclershipschool);
            setolindex(getData.data.citizendata.olindex);
            setalindex(getData.data.citizendata.alindex);
            setsclershipindex(getData.data.citizendata.sclershipindex);
            setuniname(getData.data.citizendata.uniname);
            setdegreename(getData.data.citizendata.degreename);
            setdegreeclass(getData.data.citizendata.degreeclass);
            setfullname(getData.data.citizendata.fullname);
            setnic(getData.data.citizendata.nic);
            setgender(getData.data.citizendata.gender);
            setbod(getData.data.citizendata.bod);
        })
    },[])

    return(
        <div>
            <form>
            <input type="text" value={sid} name="OwnerNic" onChange={(citizendata) => setsid(citizendata.target.value)}  placeholder="Owner NIC" /><br/>
                <input type="text" value={olresult1} name="OwnerEmail" onChange={(citizendata) => setolresult1(citizendata.target.value)}  placeholder="Owner Email" /><br/>
                <a href={"./Appointments"} style={{textDecoration:'none'}}>
                    <button type="submit" >Back</button>
                </a>
            </form>
        </div>
    );
}