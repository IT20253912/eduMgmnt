import React, { Component } from 'react';
import "./TestOne.css";


export default class PostDetails extends Component {
  
 // const [contacts,setContacts] = useState(data);

  render() {
    return (
      <div className="app-container">
        <table>
            <thead>
                <tr>
                    <th>sid</th>
                    <th>subject1</th>
                    <th>subject2</th>
                    <th>subject3</th>
                    <th>subject4</th>
                    <th>subject5</th>
                    <th>subject6</th>
                    <th>subject7</th>
                    <th>subject8</th>
                    <th>subject9</th>
                    <th>subject10</th>
                    

                </tr>
            </thead>
                <tr>
                <th>sid</th>
                    <td>sub1</td>
                    <td>sub2</td>
                    <td>sub3</td>
                    <td>sub4</td>
                    <td>sub5</td>
                    <td>sub6</td>
                    <td>sub7</td>
                    <td>sub8</td>
                    <td>subt9</td>
                    <td>sub10</td>
                </tr>
        </table>
      </div>
    )
  }
}
