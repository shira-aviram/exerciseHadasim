
import * as React from 'react';
import axios from 'axios';
import { useEffect} from 'react';
import './Style.css';
 import Avatar from '@mui/material/Avatar';
export default function SignIn(){
  const [clients, setClients] = React.useState([]);
  const [searchName, setSearchName] = React.useState('');
  const [searchIdCard, setSearchIdCard] = React.useState('');
  const [searchedClient, setSearchedClient] = React.useState(null);

  useEffect(() => {
    if (clients.length === 0) {
      axios.get('http://localhost:8000/clients/')
        .then(response => {
          setClients(response.data);
        })
        .catch(err => console.log(err));
    }
  }, [clients])

  const handleSearch = () => {
    const filteredClients = clients.filter(client => client.fullName.includes(searchName) && client.idCard.includes(searchIdCard));
    if (filteredClients!=null) {//filteredClients.length > 0
      setSearchedClient(filteredClients[0]);
    } else {
      setSearchedClient(null);
    }
  }

  return (
    <>
      <div className='singin'>

        YOUR FULL NAME<input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} /><br/>
        YOUR ID CARD<input type="text" value={searchIdCard} onChange={(e) => setSearchIdCard(e.target.value)} /><br/>
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchedClient ? (
        <div className='tableClients'>
          <div key={searchedClient._id}>
          <Avatar alt="Remy Sharp" src={searchedClient.imageFile} />
          <h3>full name :{searchedClient.fullName}</h3>
              <h3>id card: {searchedClient.idCard}</h3>
              <h3>address: {searchedClient.address}</h3>
              <h3>date of birth: {new Date(searchedClient.dateOfBirth).toLocaleDateString()}</h3>
              <h3>mobile phone:{searchedClient.mobilePhone}</h3>
              <h3>telephone: {searchedClient.telephone}</h3> 
              <h3>positive result date: {new Date(searchedClient.positive_result_date).toLocaleDateString()}</h3>
              <h3>recovery date:{new Date(searchedClient.recovery_date).toLocaleDateString()}</h3>

            <h3> vaccination dates & manufacturers:</h3>
             {Array.isArray(searchedClient.vaccination_dates) && searchedClient.vaccination_dates.map((date, index) => (
               date !== null && <div key={date}>
               {new Date(date).toLocaleDateString()}- {Array.isArray(searchedClient.vaccine_manufacturers) && searchedClient.vaccine_manufacturers[index]}
               </div>
               ))}
          </div>
        </div>
      ) : (
        <div>No client found</div>
      )}
    </>
  );
}

