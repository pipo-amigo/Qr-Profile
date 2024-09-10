import React from 'react';
import ProfileUI from './ProfileUi/ProfileUI';
import cover from './../assets/coverTest.jpg';
import avatar from './../assets/avatar.jpg';
import ProfileUIForm from '../components/ProfileUiForm/ProfileUiForm';
function MainPage() {
    
    return (
      /*  <ProfileUI
  Projects={[
    "Portfolio Website",
    "Task Management App",
    "Weather Forecasting App",
    "E-commerce Website",
    "Chat Application"
  ]}
  Skills={[
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML"
  ]}
  Hobbies={[
    "Wrestling",
    "Jiu-Jitsu",
    "MMA",
    "Video Games",
    "Reading"
  ]}
  UserName={'Ghassen Chebbi'}
  coverPhoto={cover}
  ProfilePicture={avatar}
  ThemeColor={'#26DF5A'}
  BackgroundColor={"#444444"}
  FrontgroundColor={'#2B455D'}
  AboutMe={"Passionate software developer with a knack for creating efficient and scalable web applications. Enjoys working in dynamic environments and loves tackling complex challenges. Outside of work, I enjoy hiking, reading tech blogs, and experimenting with new programming languages and frameworks."}
/>*/

<>
  <ProfileUIForm /> 
</>
    );
}

export default MainPage;
