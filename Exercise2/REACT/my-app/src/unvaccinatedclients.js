
import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Style.css';

export default function UnvaccinatedClients(){

      const [clients, setClients] = useState([]);
      const [unvaccinatedCount, setUnvaccinatedCount] = useState(0);
    
      useEffect(() => {
        if (clients.length === 0) {
          axios.get('http://localhost:8000/clients/')
            .then(response => {
              setClients(response.data);
            })
            .catch(err => console.log(err));
        }
      }, [clients])
    
      useEffect(() => {
        const count = clients.filter(client =>  client.vaccination_dates.every(date => date === null)).length;
        setUnvaccinatedCount(count);
      }, [clients])
    
      return (
        <>
          <div>
            <h3>Number of unvaccinated clients: {unvaccinatedCount}</h3>
          </div>
        </>
      );
    }