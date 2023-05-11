import * as React from 'react';
import axios from 'axios';

import { useEffect} from 'react';
import './Style.css';
import Avatar from '@mui/material/Avatar';
export default function ClientsDetails(){
  const [clients, setClients] = React.useState([]);


  useEffect(() => {
    if (clients.length === 0)  {
      axios.get('http://localhost:8000/clients/')
        .then(response => {
          setClients(response.data);
        })
        .catch(err => console.log(err));
    }
  }, [clients])
  

  return (
    <>
      {clients.length > 0 && (
        <div className='tableClients'>
          {clients.map(client => (
            <div className='clients' key={client._id}>
                <Avatar alt="Remy Sharp" src={client.imageFile} />
              <h3>full name :{client.fullName}</h3>
              <h3>id card: {client.idCard}</h3>
              <h3>address: {client.address}</h3>
              <h3>date of birth: {new Date(client.dateOfBirth).toLocaleDateString()}</h3>
              <h3>mobile phone:{client.mobilePhone}</h3>
              <h3>telephone: {client.telephone}</h3> 
              <h3>positive result date: {new Date(client.positive_result_date).toLocaleDateString()}</h3>
              <h3>recovery date:{new Date(client.recovery_date).toLocaleDateString()}</h3>

           
             <h3> vaccination dates & manufacturers:</h3>
             {Array.isArray(client.vaccination_dates) && client.vaccination_dates.map((date, index) => (
               date !== null && <div key={date}>
               {new Date(date).toLocaleDateString()}- {Array.isArray(client.vaccine_manufacturers) && client.vaccine_manufacturers[index]}
               </div>
               ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

