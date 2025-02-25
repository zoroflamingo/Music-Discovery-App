import { useState } from "react";
import "./profile.css";
import defaultPic from "../assets/default-profile-picture-webp.webp"; // Replace with your actual default image path
import fallbackPic from "../assets/default-profile-picture.jpg"; // Replace with your actual default image path
import userPic from "../assets/nope.jpg"; // Replace with a sample logged-in user image

function Profile() {
  const [isLoggedIn] = useState(false); // Simulate login state
  const username = "zoro";
  const date = "11/12/2021";
  const location = "Singapore";
  const email = "SpyroTheDragon@gmail.com";
  const birthday = "28/02/2002";
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img
          src={isLoggedIn ? userPic : defaultPic}
          alt="User profile"
          className="profile-pic"
          loading="lazy"
          onError={(e) => (e.currentTarget.src = fallbackPic)}
        />
      </div>
      <div className="profile-details">
        <p>Username: {username}</p>
        <p>Member since: {date}</p>
        <p>Location: {location}</p>
        <p>Email: {email}</p>
        <p>Birthday: {birthday}</p>
      </div>
      <div className="profile-details">
        <h1>Bio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          blanditiis similique, quos eaque architecto odio, nulla dolorem eum
          earum id nesciunt fuga, adipisci magnam deleniti natus sint facere
          quod veniam.
        </p>
      </div>
    </div>
  );
}

export default Profile;
