import React, { useState, useEffect } from 'react';

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/api/all');
      const responseData = await response.json();
      setData(responseData);
    }
    fetchData();
  }, []);

  return (
    <div  style={{backgroundColor:"white", textAlign:"center", justifyContent:"center"}}>
    <h1 style={{color:'purple'}}>Places to travel</h1>
    <div className="card-container" style={{backgroundColor:"black", paddingTop:"10px",paddingBottom:"10px"}}>
     
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.place_name} />
          <div  style={{paddingTop:"10px",paddingBottom:"10px"}}>
            <h2>{item.place_name}</h2>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Cards;
