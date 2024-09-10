import { FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import './ProfileUi.css'
import { useEffect } from "react";
const ProfileUI = ({
    coverPhoto,
    ProfilePicture,
    ThemeColor,
    BackgroundColor,
    FrontgroundColor,
    UserName,
    faceBookLink,
    instagramLink,
    twitterLink,
    linkedInLink,
    Email,
    PhoneNumber,
    Address,
    Hobbies,
    Skills,
    Projects,
    AboutMe
}) => {
    useEffect(()=>{
        document.body.style.backgroundColor = BackgroundColor;
    },[])
    
  return (
    <div className="profile" style={{backgroundColor:BackgroundColor}}>
        <div className="coverXpic">
            <div className="coverPhoto">
                <img src={coverPhoto} alt="Cover Photo" />
                {/*<input type="file" id="coverPhotoFile" />*/}
            </div>
            <div className="ProfilePicture">
                <img style={{border:`solid 2px ${ThemeColor}`}} src={ProfilePicture} alt="Profile Picture" />
               {/*<input type="file" id="ProfilePictureFile" />*/}
            </div>
        </div>
        <div className="container">
            <div className="TwoSides">
                <div className="leftSide">
                    <div className="SocialMediaAndName">
                        <h1 style={
                            {color:ThemeColor,
                            backgroundColor:FrontgroundColor
                            }
                        }>{UserName}</h1>
                        <a href={faceBookLink} className="Fb"><FaFacebookSquare /></a>
                        <a href={instagramLink} className="Ig"><IoLogoInstagram /></a>
                        <a href={twitterLink} className="X"><FaSquareXTwitter /></a>
                        <a href={linkedInLink} className="Lin"><FaLinkedin /></a>
                    </div>
                    <div id="Contacts" className="infoDiv" style={{backgroundColor:FrontgroundColor}}>
                        <h2>Contacts</h2>
                        <h3><span>Email:</span>{Email}</h3>
                        <h3><span>Phone Number:</span>{PhoneNumber}</h3>
                        <h3><span>Address:</span>{Address}</h3>
                    </div>
                    <div id="Hobbies" className="infoDiv" style={{backgroundColor:FrontgroundColor}}>
                        <h2>Hobbies</h2>
                        <ul>
                        {Hobbies.map((hobbie,key)=>{
                            return <li key={key}>{hobbie}</li>
                        })}
                        </ul>
                    </div>

                </div>
                <div className="rightSide infoDiv" style={{backgroundColor:FrontgroundColor}}>
                <h2>Proffisional Information:</h2>
                    <div className="skills">
                        <h3>Skills:</h3>
                        <ul>
                        {Skills.map((skill,key)=>{
                            return <li key={key}>{skill}</li>
                        })}
                        </ul>
                    </div>
                    <div className="projects">
                        <h3>Projects:</h3>
                        <ul>
                        {Projects.map((project,key)=>{
                            return <li key={key}>{project}</li>
                        })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottomSide infoDiv" style={{backgroundColor:FrontgroundColor}} >
                <h1>About Me:</h1>
                <h3>{AboutMe}</h3>
            </div>
        </div>

    </div>
  )
}

export default ProfileUI