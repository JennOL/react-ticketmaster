import { Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <p>This is the profile page</p>
            <Outlet />
        </div>
    )
}

export default Profile;