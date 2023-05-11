

import React, { useState,useEffect } from 'react';
import {getAllClients,  addClient } from "./Api";
    import Avatar from '@mui/material/Avatar';



export default function SignUp(){

  const [client, setClient] = useState([]);
  const [fullName, setfullName] = useState('');
  const [idCard, setIdCard] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(Date);
  const [mobilePhone,setMobilePhone]=useState('');
  const [telephone,setTelephone]=useState('');
  const [positive_result_date,set_positive_result_date]=useState(Date);
  const [recovery_date,set_recovery_date]=useState(Date);
  const [vaccination_dates, setVaccinationDates] = useState([Date,Date ,Date ,Date]);
  const [vaccine_manufacturers, setVaccineManufacturers] = useState(['', '', '', '']);
  //  const [imageFile,setImageFile]=useState('');
  //  const [imageFileUrl, setImageFileUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // useEffect(() => {//מציג את התמונה
  //   if (imageFile) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(imageFile);
  //     reader.onloadend = () => {
  //       setImageFileUrl(reader.result);
  //       setImageFile(reader.result);
  //     };
  //   }
  // }, [imageFile]);


  useEffect(() => {
    async function fetchData() {
      const apiClients = await getAllClients();
      setClient(apiClients);
    }
    fetchData();
  }, []);


  // const reader = new FileReader();
  // reader.readAsDataURL(imageFile);

  async function handleAddPost(event) {
    event.preventDefault();
    if (!fullName || !idCard || !address || !dateOfBirth || !mobilePhone || !telephone) {
      alert('Please fill in all required fields.');
      return;
    }

    // const reader = new FileReader( );
   
    const newPost = {
      fullName: fullName,
      idCard: idCard,
      address: address,
      dateOfBirth: dateOfBirth,
      mobilePhone: mobilePhone,
      telephone: telephone,
      positive_result_date: positive_result_date,
      recovery_date: recovery_date,
      vaccination_dates: vaccination_dates,
      vaccine_manufacturers: vaccine_manufacturers,
      imageFile: imageFile ? URL.createObjectURL(imageFile) : null,
      // imageFile:imageFileUrl
    //  imageFile: {
    //   data: new Buffer.from(reader.result.split(',')[1], 'base64'),
    //   contentType: imageFile.type
    // }
    };

    // const uploadedImage = await uploadedImage(imageFile);
    // if (uploadedImage) {
    //   newPost.imageFile = uploadedImage.imageUrl;
    // }

    addClient(newPost).then((newPost) => {
      setClient([...client, newPost]);
      console.log('Client added successfully:', newPost);

      // if (imageFile) {
      //   const formData = new FormData();
      //   formData.append('image', imageFile);
      //   fetch('/api/upload-image', {
      //     method:  'POST',
      //     body: formData
      //   }).then(response => response.json())
      //     .then(data => {
      //       setImageFileUrl(data.imageUrl);
           
      //     });
      // }
    });
    
    setfullName('');
    setIdCard('');
    setAddress('');
    setDateOfBirth(Date);
    setMobilePhone('');
    setTelephone('');
    set_positive_result_date(Date);
    set_recovery_date(Date);
    setVaccinationDates([Date, Date, Date, Date]);
    setVaccineManufacturers(['','','','']);
    // setImageFile('');
    // setImageFileUrl('');
 
  }
    return(
        <div>
           <div className='t3'>
          <button className='bd1' onClick={handleAddPost}>ADD CLIENT</button>
          <div>
           {imageFile &&<Avatar alt="Remy Sharp" src={URL.createObjectURL(imageFile)} />}
           {/* {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Selected Image" />} */}
            <input type="text" placeholder="full Name" value={fullName} onChange={(event) => setfullName(event.target.value)} /><br />
            <input type="text" placeholder="id card" value={idCard} onChange={(event) => setIdCard(event.target.value)} /><br />
            <input type="text" placeholder=" address" value={address} onChange={(event) => setAddress(event.target.value)} /><br />Date Of Birth<br/>
            <input type="date" placeholder="date Of birth" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} /><br />
            <input type="text" placeholder="mobilePhone" value={mobilePhone} onChange={(event) => setMobilePhone(event.target.value)} /><br />
            <input type="text" placeholder="telephone" value={telephone} onChange={(event) => setTelephone(event.target.value)} /><br />positive result date<br/>
            <input type="date" placeholder="positive result date" value={positive_result_date} onChange={(event) => set_positive_result_date(event.target.value)} /><br />recovery date<br/>
            <input type="date" placeholder="recovery date" value={recovery_date} onChange={(event) => set_recovery_date(event.target.value)} /><br />
             
            <div>vaccination date<br/>
  <input type="date" placeholder="vaccination date 1" value={vaccination_dates[0]} onChange={(event) => setVaccinationDates([event.target.value, vaccination_dates[1], vaccination_dates[2], vaccination_dates[3]])} /><br /> 
  <input type="date" placeholder="vaccination date 2" value={vaccination_dates[1]} onChange={(event) => setVaccinationDates([vaccination_dates[0], event.target.value, vaccination_dates[2], vaccination_dates[3]])} /><br /> 
  <input type="date" placeholder="vaccination date 3" value={vaccination_dates[2]} onChange={(event) => setVaccinationDates([vaccination_dates[0], vaccination_dates[1], event.target.value, vaccination_dates[3]])} /><br /> 
  <input type="date" placeholder="vaccination date 4" value={vaccination_dates[3]} onChange={(event) => setVaccinationDates([vaccination_dates[0], vaccination_dates[1], vaccination_dates[2], event.target.value])} /><br /> 
</div>
<div>vaccine manufacturer<br/>
  <input type="text" placeholder="vaccine manufacturer 1" value={vaccine_manufacturers[0]} onChange={(event) => setVaccineManufacturers([event.target.value, vaccine_manufacturers[1], vaccine_manufacturers[2], vaccine_manufacturers[3]])} /><br /> 
  <input type="text" placeholder="vaccine manufacturer 2" value={vaccine_manufacturers[1]} onChange={(event) => setVaccineManufacturers([vaccine_manufacturers[0], event.target.value, vaccine_manufacturers[2], vaccine_manufacturers[3]])} /><br /> 
  <input type="text" placeholder="vaccine manufacturer 3" value={vaccine_manufacturers[2]} onChange={(event) => setVaccineManufacturers([vaccine_manufacturers[0], vaccine_manufacturers[1], event.target.value, vaccine_manufacturers[3]])} /><br /> 
  <input type="text" placeholder="vaccine manufacturer 4" value={vaccine_manufacturers[3]} onChange={(event) => setVaccineManufacturers([vaccine_manufacturers[0], vaccine_manufacturers[1], vaccine_manufacturers[2], event.target.value])} /><br /> 
</div>
       Private profile<br/>
       {/* <input type="file" onChange={(e) => setImageFile(e.target.files[0])} /> */}
       <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
       {/* <handleSearch/> */}
      {/* {imageFileUrl && <img src={imageFileUrl} alt="Selected Image" />}  */}
  
       {/* <img src={imageFileUrl} alt="Selected Image" />  */}

          </div>
        </div>

        </div>
    );
}