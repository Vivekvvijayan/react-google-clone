import GoogleBtn from "../Button/GoogleBtn";


const  Profile = ({ userImage }) =>   userImage ? <img src={userImage} style={{ borderRadius: 50, width: 55, height: 55, cursor: 'pointer', border: '4px solid #f1f1f1' }} alt="profile" />
                                    : <GoogleBtn />

  


export default Profile