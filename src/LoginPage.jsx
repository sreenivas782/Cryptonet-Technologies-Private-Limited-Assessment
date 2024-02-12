import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc",
        );
        const data = await response.json();
        setUserData(data.results[0]); // Assuming you want to store the first result in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div className="outer-box">
      {userData ? (
      
        <div className="inner-box">
          
          <div className="innermost-box">
            <img src={userData.picture.large} alt="User Image" />
          </div>
          <div className="text-box">
            <h3>
              <h3>First Name: {userData.name.first}</h3>
              <h3>LastName:{userData.name.last}</h3>
              <h3>Email : {userData.email}</h3>
              <h3>Gender : {userData.gender}</h3>
              <h3>Phone number : {userData.phone}</h3>
            </h3>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LoginPage;
