import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Student from "../components/StudentCreate";
import Studentol from "../components/StudentOl";
import Studentuni from "../components/StudentUni";
import ResultAdmin from '../components/ResultAdmin';
import Dash from '../components/Dash';
import Ol from '../components/olResults';
import DisplayAll from '../components/DisplayAll';
import PostDetails from '../components/PostDetails';
import Insert from '../components/InsertData';
import Test from '../components/Test';
import Table from '../components/Table';
import Update from '../components/Updatetest';
import Details from '../components/Updatedetails';
import Multi from '../components/Multiform';
import Mul from '../components/MultiTwo';
import Tabletwo from '../components/Tabletest2';
import Updatetwo from '../components/Updatetest2';
import Tableol from '../components/Tableol';



const AppRoutes = () => {
    return (
        <div>
            <Router>
               
                <Routes>
                    
                    <Route path="/student" element={<Student/>} exact={true}/>
                    <Route path="/Studentol" element={<Studentol/>} exact={true}/>
                    <Route path="/Studentuni" element={<Studentuni/>} exact={true}/>
                    <Route path="/studentadmin" element={<ResultAdmin/>} exact={true}/>
                    <Route path="/dash" element={<Dash/>} exact={true}/>
                    <Route path="/oresult" element={<Ol/>} exact={true}/>
                    <Route path="/DisplayAll" element={<DisplayAll/>} exact={true}/>
                    <Route path="/postdetails" element={<PostDetails/>} exact={true}/>
                    <Route path="/insert" element={<Insert/>} exact={true}/>                  
                    <Route path="/test" element={<Test/>} exact={true}/>
                    <Route path="/table" element={<Table/>} exact={true}/>
                    <Route path="/update/:id" element={<Update/>} exact={true}/>
                    <Route path="/details/:id" element={<Details/>} exact={true}/>
                    <Route path="/multi" element={<Multi/>} exact={true}/>
                    <Route path="/mul" element={<Mul/>} exact={true}/>
                    <Route path="/tabletest" element={<Tabletwo/>} exact={true}/>
                    <Route path="/updateest/:id" element={<Updatetwo/>} exact={true}/>
                    <Route path="/tableol/:id" element={<Tableol/>} exact={true}/>
                    

                    

                   
                    
                </Routes>
            </Router>
        </div>
    );
};
export default AppRoutes;
