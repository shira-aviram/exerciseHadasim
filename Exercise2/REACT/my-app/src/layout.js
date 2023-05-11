import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './Style.css';
export default function Layout(){

 const[flag,setFlag] = useState(false);
 

function toManager(){
const password = prompt("Please enter the password:");
   if (password === "1234") {
     setFlag(true);
   } else {
     alert("Incorrect password. Please try again.");
   } }

    return (
      <>
        <nav>
          <table className="layout">
          <td> <button className="ButtonManager"  onClick={()=>toManager()}>MANGER</button></td>
       
            <td>
             <Link className="link"    to="/signin">SIGN IN</Link>
            </td>
            <td>
              <Link className="link"   to="/signup">SIGN UP</Link>
            </td>
            
            {flag && (
            <>
              <td>
                <Link className="link"  to="/clientsdetails">ALL CLIENTS</Link>
              </td>
              <td>
                <Link className="link"  to="/activeclients">ACTIVE CLIENTS </Link>
              </td>
              <td>
                <Link className="link"  to="/unvaccinatedclients" >UNVACCINATED CLIENTS</Link>
              </td>
            </>
          )}
         
       
          </table>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
