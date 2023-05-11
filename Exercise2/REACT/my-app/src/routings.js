import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import ClientsDetails from './clientsdetails';
import SignUp from "./signup";
import SignIn from "./signin";
import ActiveClientsByMonth from "./activeclients";
import UnvaccinatedClients from "./unvaccinatedclients";

export default function Routing() {
    return (
      <BrowserRouter >
      
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="signup" element={<SignUp/>} />
          <Route path="signin" element={<SignIn/>} />
          <Route path="clientsdetails" element={<ClientsDetails/>} />
          <Route path="activeclients" element={< ActiveClientsByMonth/>} />
          <Route path="unvaccinatedclients" element={< UnvaccinatedClients/>} />
    
         
          </Route>
        </Routes>
      
      </BrowserRouter>
    );
  }
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Routing />);