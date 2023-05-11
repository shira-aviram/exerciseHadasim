export async function getAllClients() {
    try {
          const res = await fetch('http://localhost:8000/clients', { method: 'GET' }); 
          const data = await res.json();
          return data;
      } catch (err) {
          console.log(err);
      }
}
  export async function addClient(newPost) {
   
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newPost),
    };
    console.log('add new client');
    try {
          const res = await fetch('http://localhost:8000/clients', requestOptions);
          const data = await res.json();
          return data;
      } catch (err) {
          console.log(err);
      }

}
