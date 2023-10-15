import React, { useEffect, useState } from "react";
 // Import your CSS file

const FetchData = (name) => {
  const url1 =
    "https://v1.nocodeapi.com/sangam0207/instagram/OghuMnuCgmAMqNUv";
    const url2=
    
    `https://www.instagram.com/${name}/?__a=1&__d=dis`;
  const [users, setUser] = useState(null);
  const[isLoading,setLoading]=useState(true);
  

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(url1);
        if (response.ok) {
          const data1 = await response.json();
          setUser(data1);
          //console.log(data1);
          setLoading(false);

        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchUrl();
  }, []); // Empty dependency array ensures that useEffect runs once after the initial render
if(isLoading){
  return(
    <div className="spinner-container">
    <div className="loading-spinner">
    </div>
    </div>
  )}

  return (
    
        <div className="container">
       
       {users &&
         users.data.map((item) => {
           const { id, username, media_url, caption, timestamp } = item;
           return (
             <div key={id} className="card">
               <img src={media_url} alt='Sorry this is a reels video' className="card-image" />
               <div className="card-content">
                 <h2>{username}</h2>
                 <p> <b>Caption :</b>  {caption}</p>
                 <p><b>Post Date:</b> {timestamp}</p>
               </div>
             </div>
           );
         })}
     </div>
    
    
  );
};

export default FetchData;
