import React, {useState} from 'react';
import UserProfile from './user-profile';
import men from '../asset/men.png';
import women from '../asset/women.jpg'


function UserCard() {
  const [profile, setProfile] = useState([
    {
      "name": 'Rahul',
      "avatar": men,
      "biography": "I'm a software engineer in Chennai, CA with a passion for computer science, electrical engineering and embedded systems technology.",
      "dob": "15/Oct/1990",
      "email": "rahul@gmail.com",
      "mobile": "9876543210",
      "location": "chennai"
    },
    {
      "name": 'Dhanya',
      "avatar": women,
      "biography": "I'm seeking an internship where I can apply my skills in content creation and increase my experience in digital marketing.",
      "dob": "07/Aug/1995",
      "email": "keerthi@gmail.com",
      "mobile": "9128345678",
      "location": "Delhi"
    },
    {
      "name": 'Kavin',
      "avatar": men,
      "biography": "Designing systems and products using computer software. Managing and maintaining building services, such as lighting, heating, ventilation and lift systems.",
      "dob": "07/Aug/2000",
      "email": "keerthi@gmail.com",
      "mobile": "9127383847",
      "location": "Mumbai"
    }
  ])
    return(
      <UserProfile profiles = { profile } />
  )
}

export default UserCard;
