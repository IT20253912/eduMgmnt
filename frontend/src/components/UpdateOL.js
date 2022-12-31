import React from 'react';
import{ Link,useParams} from "react-router-dom";

import{ useState, useEffect }from "react";

import Axios from "axios";

function UpdateOL(){
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
}
