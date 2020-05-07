import React from 'react';
import SQL from '../components/sql';
import Navbar from '../components/navbar';

const ProfileScreen = ({ task }) => {

    return (
        <div>
            <Navbar />
            <SQL task={task}  />
        </div>
    )

}
export default ProfileScreen;