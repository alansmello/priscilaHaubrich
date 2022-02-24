import React from "react";
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


function FooterPage(){

return (
<footer className="bg-light text-center text-black" s>
  
  <div className="container p-4 pb-0">
 
    <section className="mb-4">
    
      <a href="https://www.facebook.com/priscilanuneshaubrich" target="_blank"><FontAwesomeIcon  icon={faFacebook} size = "3x" style={{ color: 'blue', 'margin-right': '20px' }} /> </a>

      <a href="http://www.instagram.com/priscilanuneshaubrich" target="_blank"><FontAwesomeIcon  icon={faInstagram} size = "3x" style={{ color: 'purple', 'margin-left': '20px' }} /> </a>

    
    </section>
 
  </div>
 


  <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
 
</footer>
)
}

export default FooterPage;