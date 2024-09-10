import { FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import './ProfileUiForm.css'
import { useEffect , useState } from "react";
import cover from "../../assets/coverTest.jpg"
import prfl from "../../assets/avatar.jpg"
const ProfileUIForm = () => {

    //Profile
    const [images,setImages] = useState({
      coverImageData:'',
      ProfilePictureImageData:''
    })
    const [profile, setProfile] = useState({
      coverPhoto: 'https://coverUrl.com',
      ProfilePicture: 'https://coverUrl.com',
      ThemeColor: '#fff',
      BackgroundColor: '#ffffff',
      FrontgroundColor: '#000000',
      UserName: 'Ghassen Chebbi',
      faceBookLink: 'https://www.facebook.com/profile.php?id=61562504914743',
      instagramLink: 'https://www.instagram.com/ghassen_chebbi_7/',
      twitterLink: 'https://x.com/chbikghassen',
      linkedInLink: 'https://www.linkedin.com/in/ghassen-chebbi-73295b316/',
      Email: 'ghassen.chebbi.dev@gmail.com',
      PhoneNumber: '29010114',
      Address: 'https://maps.app.goo.gl/6nDNApHfsHgRyS6W7',
      Hobbies: [
        'Wrestling',
        'Jiu-Jitsu',
        'Mixed Martial Arts (MMA)',
        'Playing Rocket Game',
        'Coding'
      ],
      Skills: [
        'Flutter development',
        'Firebase Cloud Messaging',
        'Node.js',
        'React.js',
        'HTML & CSS',
        'JavaScript (Smooth Scrolling, DOM Manipulation)',
        'Database Management (Firebase)'
      ],
      Projects: [
        'Movie Randomizer - A React project fetching random movie titles from the Movie Database API.',
        'Profile Creator - A React app for creating professional profiles with custom styling and social links.',
        'Node.js Video Recorder - A Node.js application for recording videos and integrating with Firebase for data storage.'
      ],      
      AboutMe: 'I am a passionate developer with interests in Flutter, Node.js, React.js, and Firebase. I also enjoy wrestling, jiu-jitsu, and MMA in my free time, and love experimenting with new technologies in the world of web development.'
      
    });
    const sendFilesFormTest = () =>{
      const fileDataForm = new FormData();
fileDataForm.append('coverPhoto', images.coverImageData);
fileDataForm.append('profilePicture', images.ProfilePictureImageData);

fetch('http://localhost:3000/upload', {
  method: 'POST',
  body: fileDataForm,
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

    }
    const sendData =  () => {
      const fileDataForm = new FormData();
      fileDataForm.append('coverPhoto',images.coverImageData);
      fileDataForm.append('ProfilePicture',images.ProfilePictureImageData);
      fetch("http://localhost:3000/profiles",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `hello`
        },
        body: JSON.stringify(profile)
      }).then(response => response.json()) 
      .then(data => {
        console.log('Success:', data); 
      })
      .catch(error => {
        console.error('Error:', error); 
      });
      };  
      
    useEffect(()=>{
        document.body.style.backgroundColor = profile.BackgroundColor;
    },[profile.BackgroundColor])
    // To update specific fields
    const updateProfile = (updates) => {
      setProfile(prevProfile => ({
        ...prevProfile,
        ...updates
      }));
    };
    const updateDataImage = (updates) => {
      setImages(DataImages => ({
        ...DataImages,
        ...updates
      }));
    };
    const FilePicker = (e,type) =>{
        const file = URL.createObjectURL(e.target.files[0]);
        type=="cover"?updateProfile({coverPhoto:file}):updateProfile({ProfilePicture:file});
        type=="cover"?updateDataImage({coverImageData:e.target.files[0]}):updateDataImage({ProfilePictureImageData:e.target.files[0]})

    }

  return (
    <div className="Profile" style={{backgroundColor:profile.BackgroundColor}}>
              <div className="sendForm">
            <button onClick={()=>sendFilesFormTest()}>generate Profile</button>
        </div>
        <div className="CoverXpic">
            <div className="CoverPhoto">
                <img src={profile.coverPhoto} alt="Cover Photo" />
                    <input type="file" id="CoverPhotoFile"  onChange={(e)=>FilePicker(e,"cover")} />

            </div>
            <div className="profilePicture">
                <img style={{border:`solid 4px ${profile.ThemeColor}`}} src={profile.ProfilePicture} alt="Profile Picture" />
               <input type="file" id="profilePictureFile" onChange={(e)=>FilePicker(e,"prof")} />
            </div>
        </div>
        <div className="container">
        <input type="color" onChange={(e)=>updateProfile({BackgroundColor:e.target.value})} />
        <input type="color" onChange={(e)=>updateProfile({FrontgroundColor:e.target.value})} />
        <input type="color" onChange={(e)=>updateProfile({ThemeColor:e.target.value})} />
            <div className="TwoSides">
                <div className="leftSide">
                    <div className="SocialMediaAndName">
                        <h1 style={
                            {color:profile.ThemeColor,
                            backgroundColor:profile.FrontgroundColor
                            }
                        }>{profile.UserName}</h1>
                        <a href={profile.faceBookLink} className="Fb"><FaFacebookSquare /></a>
                        <a href={profile.instagramLink} className="Ig"><IoLogoInstagram /></a>
                        <a href={profile.twitterLink} className="X"><FaSquareXTwitter /></a>
                        <a href={profile.linkedInLink} className="Lin"><FaLinkedin /></a>
                    </div>
                    <div id="Contacts" className="infoDiv" style={{backgroundColor:profile.FrontgroundColor}}>
                        <h2 style={{color:profile.ThemeColor}} >Contacts</h2>
                        <h3><span style={{color:profile.ThemeColor}}>Email:</span>{profile.Email}</h3>
                        <h3><span style={{color:profile.ThemeColor}}>Phone Number:</span>{profile.PhoneNumber}</h3>
                        <h3><span style={{color:profile.ThemeColor}}>Address:</span>{profile.Address}</h3>
                    </div>
                    <div id="Hobbies" className="infoDiv" style={{backgroundColor:profile.FrontgroundColor}}>
                        <h2 style={{color:profile.ThemeColor}}>Hobbies</h2>
                        <ul>
                        {profile.Hobbies.map((hobbie,key)=>{
                            return <li key={key}>{hobbie}</li>
                        })}
                        </ul>
                    </div>

                </div>
                <div className="rightSide infoDiv" style={{backgroundColor:profile.FrontgroundColor}}>
                <h2 style={{color:profile.ThemeColor}}>Proffisional Information</h2>
                    <div className="skills">
                        <h3 style={{color:profile.ThemeColor}}>Skills:</h3>
                        <ul>
                        {profile.Skills.map((skill,key)=>{
                            return <li key={key}>{skill}</li>
                        })}
                        </ul>
                    </div>
                    <div className="projects">
                        <h3 style={{color:profile.ThemeColor}}>Projects:</h3>
                        <ul >
                        {profile.Projects.map((project,key)=>{
                            return <li key={key}>{project}</li>
                        })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottomSide infoDiv" style={{backgroundColor:profile.FrontgroundColor}} >
                <h1 style={{color:profile.ThemeColor}}>About Me:</h1>
                <h3>{profile.AboutMe}</h3>
            </div>
        </div>
    </div>
  )
}

export default ProfileUIForm