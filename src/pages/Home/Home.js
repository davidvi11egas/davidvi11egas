import React,{Component} from "react";
import "./Home.css";
import { Row, Col } from 'react-bootstrap';

// class Home extends Component{
//   render(){
//     return(
//       <div>
//         <Row>
//           {/* <Col className="bioPicBox">
//               <img id="bioPic" src={require("../../images/davidFullBody.jpg")} alt="david_villegas_photo" />  
//           </Col> */}
//           <Col className="textBox">
//             <div>
//               <p className="nameLine"> david villegas </p>
//               <p className="tagLine"> web developer </p>
//               <p className="tagLine"> marketing pro </p>
//               <p className="tagLine"> graphic designer  </p>
//             </div>
//             <ul class="list-group list-group-flush tagLine">
//               <li class="list-group-item">david villegas</li>
//               <li class="list-group-item">Dapibus ac facilisis in</li>
//               <li class="list-group-item">Morbi leo risus</li>
//               <li class="list-group-item">Porta ac consectetur ac</li>
//               <li class="list-group-item">Vestibulum at eros</li>
//             </ul>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }


class Home extends Component {
  render() {
    return (
      <div className="pageContent">
        {/* <span className="pageHeader">David Villegas</span> */}
       
        <div className="card tagLine">
          <p>WEB DEVELOPMENT</p>
          <p>DIGITAL MARKETING</p>
          <p>CREATIVE DESIGN</p>
        </div>
     
      </div>
    );
  }
}

export default Home;
